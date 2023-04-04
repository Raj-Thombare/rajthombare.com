import Image from "next/image";
import Link from "next/link";
import { TfiGithub } from "react-icons/tfi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import SlideUp from "./SlideUp";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="px-10 mb-10 lg:mt-0 lg:mb-10">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
        Projects
      </h3>
      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-100px 0px -50px 0px">
                <div className="flex flex-col items-center justify-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 ">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="md:min-w-[40%] bg-[#8a2be2] flex justify-center items-end flex-wrap rounded-xl transition-all ease-in-out delay-75 duration-200 shadow-xl z-[-1] hover:opacity-70 hover:cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={200}
                      height={200}
                      priority
                      className="w-[85%] h-[70%] mt-[20px] rounded-tl-xl rounded-tr-xl"
                    />
                  </Link>
                  <div className="mt-5 px-2.5 py-2.5 h-auto md:min-h-[200px] md:w-1/2 md:mt-0 flex flex-col md:justify-between">
                    <div className="mb-2.5 md:mb-0">
                      <h1 className="font-bold text-2xl mb-1.5">
                        {project.name}
                      </h1>
                      <p className={"font-slab font-light text-md mb-2.5"}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex">
                      <a
                        href={project.github}
                        className="mr-3 hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200"
                        target="_blank"
                      >
                        <TfiGithub className="p-[3px]" size={30} />
                      </a>
                      <a
                        href={project.link}
                        className="hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200"
                        target="_blank"
                      >
                        <HiArrowTopRightOnSquare
                          className="p-[3px]"
                          size={30}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <button
          href="/projects"
          className="px-1 py-2.5 block m-auto mt-14 text-white bg-black w-[120px] rounded-lg hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200"
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default Projects;
