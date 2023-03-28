import Image from "next/image";
import { TfiGithub } from "react-icons/tfi";
// import { AiFillGithub } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
// import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Pokedex",
    description: "It's a pokedex web app made using typescript and react.js",
    image: "/projects/pokedex.jpeg",
    github: "https://github.com/Raj-Thombare/Pokedex",
    link: "https://p0kedexx.vercel.app",
  },
  {
    name: "Portfolio",
    description: "Personal Portfolio made using Nextjs and Tailwind CSS",
    image: "/projects/portfolio.jpeg",
    github: "https://github.com/Raj-Thombare/rajthombare.com",
    link: "https://rajthombare.vercel.app",
  },
  {
    name: "Github Finder",
    description: "It's GitHub Finder web app that finds user on github!",
    image: "/projects/githubfinder.jpg",
    github: "https://github.com/Raj-Thombare/Github-Finder",
    link: "https://githubxfinder.vercel.app",
  },
  {
    name: "QuizIt",
    description: "It's a web app that has various quizs on multiple topics.",
    image: "/projects/quizit.jpeg",
    github: "https://github.com/Raj-Thombare/QuizIt",
    link: "https://quizzit.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="px-10 my-6 md:my-10 lg:my-20">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px]">
        Projects
      </h3>
      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2 bg-[#8a2be2] flex justify-center rounded-xl min-h-[200px] items-end">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={200}
                    height={200}
                    priority
                    className="w-auto min-h-[170px]  rounded-tl-xl rounded-tr-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="mt-9 md:w-1/2 md:mt-0 flex flex-col justify-evenly">
                  <div>
                    <h1 className="font-slab font-bold text-3xl mb-2.5">
                      {project.name}
                    </h1>
                    <p className="font-slab font-light text-md mb-2.5">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex">
                    <a
                      href={project.github}
                      className="mr-5 hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200"
                      target="_blank"
                    >
                      <TfiGithub size={30} />
                    </a>
                    <a
                      href={project.link}
                      className="hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200"
                      target="_blank"
                    >
                      <HiArrowTopRightOnSquare size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
