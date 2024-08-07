import { LANGUAGES, FRAMEWORKS, DATABASES, DEVOPS } from "../data/skills";
import Link from "next/link";
import { Slide } from "../animations/Slide";

export type SkillProps = {
  name: string;
  icon: JSX.Element;
  link: string;
};

function SkillPill(props: SkillProps) {
  const { name, icon } = props;

  return (
    <div className='flex w-max items-center gap-2 overflow-hidden rounded-md border border-cyan-900/90 hover:border-cyan-300 px-4 py-2 text-sm bg-zinc-800/70 sm:text-base md:px-6 md:py-3 md:text-lg'>
      {icon}
      <span className='font-medium'>{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <section className=' py-4 font-incognito'>
        <div className='relative mx-auto max-w-6xl'>
          <Slide delay={0.14}>
            <div className='mt-5 flex flex-col md:flex-row justify-start items-center'>
              <p className='font-semibold text-xl text-center md:text-left sm:min-w-[324px]'>
                Languages
              </p>
              <div className='mt-2 flex flex-wrap justify-center md:justify-start gap-4 text-xl text-zinc-200'>
                {LANGUAGES.map(({ icon, name, link }, i) => (
                  <Link href={link} key={i} target='_blank'>
                    <SkillPill icon={icon} name={name} key={i} link={link} />
                  </Link>
                ))}
              </div>
            </div>
            <div className='mt-5 flex flex-col md:flex-row justify-start items-center'>
              <p className='font-semibold text-xl text-center md:text-left sm:min-w-[324px]'>
                Libraries and Frameworks
              </p>
              <div className='mt-2 flex flex-wrap gap-4 text-xl justify-center md:justify-start text-zinc-200'>
                {FRAMEWORKS.map(({ icon, name, link }, index) => (
                  <Link href={link} key={index} target='_blank'>
                    <SkillPill
                      icon={icon}
                      name={name}
                      key={index}
                      link={link}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className='mt-5 flex flex-col md:flex-row justify-start items-center'>
              <p className='font-semibold text-xl text-center md:text-left sm:min-w-[324px]'>
                Databases and ORM
              </p>
              <div className='mt-2 flex flex-wrap gap-4 justify-center md:justify-start text-zinc-200'>
                {DATABASES.map(({ icon, name, link }, index) => (
                  <Link href={link} key={index} target='_blank'>
                    <SkillPill
                      icon={icon}
                      name={name}
                      key={index}
                      link={link}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className='mt-5 flex flex-col md:flex-row justify-start items-center'>
              <p className='text-xl font-semibold text-center md:text-left sm:min-w-[324px]'>
                Devops and Tools
              </p>
              <div className='mt-2 flex flex-wrap gap-4 justify-center md:justify-start text-zinc-200'>
                {DEVOPS.map(({ icon, name, link }, index) => (
                  <Link href={link} key={index} target='_blank'>
                    <SkillPill
                      icon={icon}
                      name={name}
                      key={index}
                      link={link}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
}
