import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

import { getSkills } from '@/lib/getData'
import { getProjects } from '@/lib/getData'

export default function Home({ mySkills, myProjects }) {
  return (
    <>
      <Head>
        <title>Raj Thombare</title>
        <meta name="description" content="Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Skills skills={mySkills} />
        <Projects projects={myProjects} />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const skills = await getSkills();
  const projects = await getProjects();

  return {
    props: {
      mySkills: skills,
      myProjects: projects,
    }
  };
};
