import Layout from "@/components/Layout"
import Projects from "@/components/Projects"

import { getProjects } from '@/lib/getData'

export default function ProjectsPage({ myProjects }) {
    return (
        <Layout className="mt-12">
            <Projects projects={myProjects} />
        </Layout>
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
