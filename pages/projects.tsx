import Head from "next/head";
import { Fragment } from "react";
import { GetStaticProps } from "next";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { IProjects } from "@/models/types";
import { getProjects } from "@/lib/getData";

type Props = {
  myProjects: IProjects[];
};

const ProjectsPage: React.FC<Props> = ({ myProjects }) => {
  return (
    <>
      <Head>
        <title>Projects | Raj Thombare</title>
      </Head>
      <Layout className="my-12 min-h-[80vh]">
        <section className="px-10 mb-10 lg:mt-0 lg:mb-10">
          <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
            Projects
          </h3>
          <div className="flex flex-col space-y-20">
            {myProjects.map((project, idx) => {
              return (
                <Fragment key={idx}>
                  <ProjectCard project={project} />
                </Fragment>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      myProjects: projects,
    },
  };
};
