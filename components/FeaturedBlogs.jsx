import { Fragment } from "react"
import Link from "next/link";
import BlogCard from "./BlogCard";

const FeaturedBlogs = ({ blog }) => {
  return (
    <section id="blogs" className="px-10 mb-10 lg:mt-0 lg:mb-10">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
        Blogs
      </h3>
      <div className="flex flex-col space-y-4">
        {blog.slice(0,3).map((item, idx)=>{
            return <Fragment key={idx}>
              <BlogCard blog={item} />
            </Fragment>
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
