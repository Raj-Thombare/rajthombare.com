import { Fragment } from 'react'
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { IProjects } from "@/models/types";

type Props = {
  projects: IProjects[];
};

const FeaturedProjects: React.FC<Props> = ({ projects }) => {
  return (
    <section id="projects" className="px-10 mb-10 lg:mt-0 lg:mb-10">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
        Projects
      </h3>
      <div className="flex flex-col space-y-20">
        {projects.slice(0, 3).map((project, idx) => {
          return (
            <Fragment key={idx}>
              <ProjectCard project={project} />
            </Fragment>
          );
        })}
      </div>
      <div className="w-full">
        <button className="px-1 py-2.5 block m-auto mt-14 text-white bg-black w-[120px] rounded-lg hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200">
          <Link href="/projects"> See More</Link>
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
