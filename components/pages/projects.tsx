import Image from "next/image";
import Link from "next/link";
import PageHeading from "../shared/PageHeading";
import { Slide } from "../animations/Slide";
import EmptyState from "../animations/EmptyState";
import { ProjectWobble } from "../animations/project-wobbler";

export default function Project({ projects }) {
  return (
    <main className='max-w-7xl mx-auto md:px-16 px-6'>
      <PageHeading
        title='Projects'
        description="I've worked on these few projects over the years. All of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved."
        image='/project.gif'
      />

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12'>
            {projects.map((project) => (
              <ProjectWobble key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                  className='flex items-center gap-x-4 border border-transparent p-4'>
                  <Image
                    src={project.icon}
                    width={50}
                    height={50}
                    alt={project.title}
                    className='bg-zinc-800 rounded-md p-2'
                  />
                  <div className='break-all'>
                    <h2 className='text-lg tracking-wide mb-1'>
                      {project.title}
                    </h2>
                    <div className='text-sm text-zinc-400'>
                      {project.tagline}
                    </div>
                  </div>
                </Link>
              </ProjectWobble>
            ))}
          </section>
        ) : (
          <EmptyState value='Projects' />
        )}
      </Slide>
    </main>
  );
}
