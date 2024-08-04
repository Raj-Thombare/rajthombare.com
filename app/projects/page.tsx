import Projects from "@/components/pages/projects";
import { getAllProjects } from "@/lib/notion";

export default async function Project() {
  const projects = await getAllProjects();

  return (
    <div className='container mx-auto'>
      <Projects projects={projects} />
    </div>
  );
}

