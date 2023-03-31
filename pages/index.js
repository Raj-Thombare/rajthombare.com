import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'

import { getSkills, getProjects, getEducation } from '@/lib/getData'

export default function Home({ mySkills, myProjects, myEducation }) {
  return (
    <>
      <Head>
        <title>Raj Thombare</title>
        <meta name="description" content="Raj Thombare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About skills={mySkills} education={myEducation} />
        <Projects projects={myProjects} />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const skills = await getSkills();
  const projects = await getProjects();
  const education = await getEducation();

  return {
    props: {
      mySkills: skills,
      myProjects: projects,
      myEducation: education,
    }
  };
};
