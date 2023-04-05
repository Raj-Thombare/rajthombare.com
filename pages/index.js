import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import Blogs from '@/components/FeaturedBlogs'
import About from '@/components/About'

import { getSkills, getProjects, getEducation, getBlogs } from '@/lib/getData'

export default function HomePage({ mySkills, myProjects, myEducation, myBlogs }) {
  return (
    <>
      <Head>
        <title>Raj Thombare</title>
        <meta name="description" content="Raj Thombare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero />
          <About skills={mySkills} education={myEducation} />
          <FeaturedProjects projects={myProjects} />
          <Blogs blog={myBlogs} />
        </Layout>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const skills = await getSkills();
  const projects = await getProjects();
  const blogs = await getBlogs();
  const education = await getEducation();

  return {
    props: {
      mySkills: skills,
      myProjects: projects,
      myBlogs: blogs,
      myEducation: education,
    }
  };
};
