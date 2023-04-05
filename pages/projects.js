import Head from 'next/head'
import Layout from "@/components/Layout"
import { Fragment } from "react"
import ProjectCard from "@/components/ProjectCard"

import { getProjects } from '@/lib/getData'

export default function ProjectsPage({ myProjects }) {
  return (
    <>
      <Head>
        <title>Projects | Raj Thombare</title>
      </Head>
      <Layout className="mt-12">
        <section id="projects" className="px-10 mb-10 lg:mt-0 lg:mb-10">
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
  )
}

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      myProjects: projects,
    }
  };
};
