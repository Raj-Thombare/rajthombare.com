"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { LinkPreview } from "../animations/link-preview";
import { formatDate } from "@/lib/date";

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
      <div className='flex flex-col md:flex-row items-center justify-between mb-6'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4'>
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
      <p className='text-right pb-4'>{formattedDate}</p>
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
    </article>
  );
}