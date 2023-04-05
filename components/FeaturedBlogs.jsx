import Link from "next/link";

const FeaturedBlogs = ({ blog }) => {
  return (
    <section id="projects" className="px-10 mb-10 lg:mt-0 lg:mb-10">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
        Blogs
      </h3>
      <div className="flex flex-col space-y-4">
        {blog.slice(0,3).map((item, idx)=>{
            return <div key={idx} className="px-8 py-5 bg-white">
                <h1 className="font-medium text-lg">{item.title}</h1>
                <span className="font-slab font-light text-[16px]">1,269 views</span>
            </div>
        })}
      </div>
      <div className="w-full">
        <button className="px-1 py-2.5 block m-auto mt-14 text-white bg-black w-[120px] rounded-lg hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200">
          <Link href="/blogs"> See More</Link>
        </button>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
