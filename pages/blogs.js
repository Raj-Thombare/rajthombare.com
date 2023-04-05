import Head from 'next/head'
import Layout from "@/components/Layout"
import { Fragment } from "react"
import BlogCard from "@/components/BlogCard"

import { getBlogs } from '@/lib/getData'

export default function BlogsPage({ myBlogs }) {
  return (
    <>
      <Head>
        <title>Blogs | Raj Thombare</title>
      </Head>
      <Layout className="mt-12 h-[90vh]">
        <section className="px-10 mb-10 lg:mt-0 lg:mb-10">
          <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
            Blogs
          </h3>
          <div className="flex flex-col space-y-6">
                      {myBlogs.map((blog, idx) => {
              return (
                <Fragment key={idx}>
                      <BlogCard blog={blog} />
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
    const blogs = await getBlogs();

  return {
    props: {
        myBlogs: blogs,
    }
  };
};
