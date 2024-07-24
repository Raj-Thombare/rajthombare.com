import Image from "next/image";
import MyPicture from "../public/profile_raj.jpg";
import { ImageWobble } from "@/components/animations/ImageWobble";
import { Slide } from "@/components/animations/Slide";
import { WobbleCard } from "@/components/animations/WobbleCard";
import { BiLinkExternal } from "react-icons/bi";
import Experience from "@/components/pages/experience";
import Education from "@/components/pages/education";
import Skills from "@/components/pages/Skills";
import Social from "@/components/shared/Social";

export default function Home() {
  return (
    <div id='home' className='container mx-auto'>
      <div className='relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6'>
        <section className='relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 items-start justify-items-center'>
          <div className='order-1 md:gap-y-20 md:pt-0 pt-4'>
            <Slide delay={0.14}>
              <h1 className='font-incognito font-semibold tracking-tight sm:text-5xl text-2xl lg:leading-tight basis-1/2 mb-2'>
                Hey, I&apos;m Raj Thombare
              </h1>
              <h2 className='font-incognito font-semibold tracking-tight sm:text-4xl text-2xl lg:leading-tight basis-1/2 mb-4'>
                Full Stack Software Engineer
              </h2>
              <p className={"text-gray-200/80"}>
                A dedicated full stack engineer specialized in building robust
                web applications using modern technologies. I&apos;m Based in
                Navi Mumbai, Maharashtra, my expertise lies in designing and
                maintaining both frontend and backend systems that deliver
                exceptional user experiences. I excel at crafting dynamic,
                engaging interfaces and powerful, efficient server-side logic
                with clean, optimized code. Leveraging the latest development
                tools and techniques, I create scalable and high-performance
                solutions that meet diverse business needs.
              </p>
              <Social type='social' />
              <br />
              <br />
              <WobbleCard
                containerClassName='col-span-1 lg:col-span-2 h-full bg-cyan-800/90 min-h-fit lg:min-h-full'
                className=''
              >
                <div className='w-full flex items-center justify-center '>
                  If you ever see me out and about, feel free to stop by and say
                  hello! Let&apos;s catch up over a coffee and dive into the
                  latest trends in full-stack development or chat about the
                  newest buzz in the tech world. 🚀
                </div>
              </WobbleCard>
            </Slide>
          </div>

          <aside className='flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12'>
            <Slide delay={0.1}>
              <ImageWobble>
                <Image
                  className='rounded-2xl mb-4 object-cover max-h-auto min-h-96 bg-top'
                  src={MyPicture}
                  width={360}
                  height={360}
                  quality={100}
                  alt='profile'
                />
              </ImageWobble>
              <div className='flex flex-col text-center gap-y-4'>
                <div className='flex items-center gap-x-3'>
                  <a
                    href='https://drive.google.com/file/d/1zAE0f8lAzFauJNYi-AtmBM3P43VMPfxv/view?usp=sharing'
                    rel='raj'
                    target='_blank'
                    className='flex items-center justify-center text-center gap-x-2 basis-[90%] bg-gray-800/40 border border-transparent hover:border-zinc-400  rounded-md py-2 text-lg font-incognito font-semibold'
                  >
                    View Resume <BiLinkExternal className='text-base ' />
                  </a>
                  <a
                    href='https://drive.google.com/file/d/1zAE0f8lAzFauJNYi-AtmBM3P43VMPfxv/export?format=pdf'
                    className='flex items-center justify-center text-center  hover:underline bg-gray-800/40  border border-transparent hover:border-zinc-400 rounded-md py-3 text-lg w-1/4'
                    title='Download Resume'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='red'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>
        <section className='relative grid lg:grid-cols-1 grid-cols-1 mt-7 gap-x-6 items-start justify-items-start'>
          <Slide delay={0.14}>
            <h1
              id='experience'
              className='font-incognito font-semibold tracking-tight sm:text-3xl text-xl lg:leading-tight basis-1/2 mb-4 mt-12'
            >
              Experience
            </h1>
            <div className='px-4'>
              <Experience />
            </div>
          </Slide>

          <Slide delay={0.18}>
            <h1
              id='education'
              className='font-incognito font-semibold tracking-tight sm:text-3xl text-xl lg:leading-tight basis-1/2 mb-4 mt-12'
            >
              Education
            </h1>
            <div className='px-4'>
              <Education />
            </div>
          </Slide>

          <Slide delay={0.18}>
            <h1
              id='skills'
              className='font-incognito font-semibold tracking-tight sm:text-3xl text-xl lg:leading-tight basis-1/2 mb-4 mt-12'
            >
              Technical Skills
            </h1>
            <div className='px-4'>
              <Skills />
            </div>
          </Slide>
        </section>
      </div>
    </div>
  );
}
