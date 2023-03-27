import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

export default function Home() {
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
        <Header />

        <p className='font-slab font-light break-all mt-5'>
          As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScipt, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
        </p>
      </main>
    </>
  )
}
