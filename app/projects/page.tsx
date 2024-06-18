import { Fragment } from "react";
import ProjectCard from "@/components/pages/ProjectCard";
import { IProjects } from "@/models/types";

type Props = {
  myProjects: IProjects[];
};

export default function Projects({ myProjects }: Props) {
  return (
    <section className='px-10 mb-10 lg:mt-0 lg:mb-10'>
      <h3 className='mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]'>
        Projects
      </h3>
      <div className='flex flex-col space-y-20'>
        {myProjects.map((project, idx) => {
          return (
            <Fragment key={idx}>
              <ProjectCard project={project} />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
