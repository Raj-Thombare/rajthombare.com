"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { LinkPreview } from "../animations/link-preview";
import { formatDate } from "@/lib/date";
import MyPicture from "@/public/profile.jpg";
import Link from "next/link";

interface PostProps {
  title: string;
  content: string;
  projectUrl: string;
  githubUrl: string;
  slug: string;
  date: string;
  coverImage: string;
}

export function Post(props: PostProps) {
  const { title, content, slug, projectUrl, date, githubUrl, coverImage } =
    props;

  const formattedDate = formatDate(date);
  return (
    <article className='max-w-3xl mx-auto lg:px-0 px-8'>
      <div className='flex flex-col  md:flex-row justify-end items-end mb-2 pb-2'>
        <Link
          className='flex space-x-2 items-center px-4 py-2 bg-gray-800/40 rounded border border-cyan-900/90 hover:border-cyan-300'
          href='/projects'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='tabler-icon tabler-icon-arrow-left w-6 h-6 text-muted'>
            <path d='M5 12l14 0'></path>
            <path d='M5 12l6 6'></path>
            <path d='M5 12l6 -6'></path>
          </svg>
          <span className='text-base md:text-lg text-muted font-incognito'>
            Back
          </span>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap items-center justify-between mb-6'>
        <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0'>
          {title}
        </h1>
        <div className='flex flex-row gap-x-4'>
          <LinkPreview url={projectUrl}>
            <Button className='border border-gray-100 hover:bg-gray-200 hover:text-black gap-x-2 flex'>
              Live
              <BiLinkExternal className='text-base ' />
            </Button>
          </LinkPreview>
          <LinkPreview url={githubUrl}>
            <Button className='border border-gray-100 hover:bg-gray-200 hover:text-black flex gap-x-2'>
              Github
              <BiLogoGithub className='text-lg ' />
            </Button>
          </LinkPreview>
        </div>
      </div>
      <div>
        <Image
          src={coverImage}
          alt={title}
          width={800}
          height={600}
          className='rounded-lg'
        />
      </div>
      <div
        className='sm:text-lg  text-justify text-sm max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white px-2 py-4 prose-invert'
        dangerouslySetInnerHTML={{ __html: content }}></div>

      <div className='flex md:flex-row flex-wrap justify-between mt-4 pt-4 border-t border-neutral-800'>
        <div className='flex space-x-2 items-center border-neutral-800'>
          <div className='flex space-x-2 items-center'>
            <Image
              src={MyPicture}
              width={30}
              height={30}
              alt="Raj's Photo"
              className=' rounded-full'
            />
            <p className='text-sm font-incognito font-normal text-muted'>
              Raj Thombare
            </p>
          </div>
          <div className='h-5 rounded-lg w-0.5 bg-neutral-700'></div>
          <time className='flex items-center text-base'>
            <span className='text-muted font-incognito text-sm'>
              {formattedDate}
            </span>
          </time>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center'>
          <Link
            className='flex space-x-2 items-center underline font-incognito'
            href='https://x.com/rajth0mbare'>
            @RajTh0mbare
          </Link>
        </div>
      </div>
    </article>
  );
}