import Image from "next/image";
import { Slide } from "../animations/Slide";
import { EDUCATIONS } from "../data/education";
import { Badge } from "../ui/badge";
import { LinkPreview } from "../animations/link-preview";

export default function Job() {
  return (
    <section>
      <Slide delay={0.18}>
        <div className='grid grid-cols-1 gap-x-12 gap-y-5'>
          {EDUCATIONS.map((data) => (
            <div
              key={data.id}
              className='flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] before:bg-zinc-700'
            >
              <LinkPreview url={data.url}>
                <div className='grid place-items-center bg-white border border-zinc-800 min-h-[65px] min-w-[65px] p-2 rounded-md overflow-clip relative'>
                  <Image
                    src={data.logo}
                    className='object-cover duration-300'
                    alt={`${data.name} logo`}
                    width={60}
                    height={60}
                  />
                </div>
              </LinkPreview>
              <div className='flex flex-col items-start'>
                <h3 className='text-xl font-semibold'>{data.name}</h3>
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
                {data.CGPA && (
                  <Badge className='h-4 bg-cyan-700'>{data.CGPA}</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}