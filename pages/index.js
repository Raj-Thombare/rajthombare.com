import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

import { getSkills } from '@/lib/getData'

export default function Home({ mySkills }) {
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
        <Projects />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const skills = await getSkills();

  return {
    props: {
      mySkills: skills,
    }
  };
};
