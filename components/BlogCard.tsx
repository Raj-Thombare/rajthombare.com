import Link from "next/link";
import SlideUp from "./SlideUp";
import { IBlogs } from "@/models/types";

type Props = {
  blog: IBlogs,
};

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <SlideUp offset="-100px 0px -50px 0px">
      <div className="flex flex-col items-center justify-left animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 ">
        <div className="px-8 py-3 bg-white w-full shadow-sm rounded border-b-2 border-[#8a2be2]">
          <Link href={blog.link} target="_blank">
            <h1 className="font-medium text-lg">{blog.title}</h1>
          </Link>
          <p className="pt-[2px] pb-3 md:pb-2 font-slab font-light text-[14px]">
            {blog.description}
          </p>
          <div className="flex justify-between">
            <span className="font-slab font-light text-[14px]">
              {blog.duration}
            </span>
            <span className="font-slab font-light text-[14px]">
              {blog.date}
            </span>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default BlogCard;
