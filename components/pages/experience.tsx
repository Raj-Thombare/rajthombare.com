import Image from "next/image";
import { Slide } from "../animations/Slide";
import { JOBS } from "../data/job";
import { formatDate } from "@/lib/date";
import { LinkPreview } from "../animations/link-preview";

export default function Experience() {
  return (
    <section>
      <Slide delay={0.18}>
        <div className='grid grid-cols-1 gap-x-12 gap-y-10'>
          {JOBS.map((data) => (
            <div
              key={data.id}
              className='flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] before:bg-zinc-700'
            >
              <LinkPreview url={data.url}>
                <div className='grid place-items-center border border-zinc-800 min-h-[65px] min-w-[65px] p-2 rounded-md overflow-clip relative bg-white'>
                  <Image
                    src={data.logo}
                    className='object-cover duration-300'
                    alt={`${data.name} logo`}
                    width={40}
                    height={40}
                  />
                </div>
              </LinkPreview>
              <div className='flex flex-col items-start'>
                <h3 className='text-xl font-semibold'>{data.name}</h3>
                <p>{data.jobTitle}</p>
                <time className='text-sm text-zinc-500 mt-2 tracking-widest uppercase'>
                  {data.startDate} -{" "}
                  {data.endDate ? (
                    data.endDate
                  ) : (
                    <span className='text-cyan-500'>Present</span>
                  )}
                </time>
                <p className='tracking-tight text-zinc-400  my-4'>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
