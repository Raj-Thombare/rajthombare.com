import { socialLinks } from "../data/social";

export default function Social({ type }: { type: string }) {
  return (
    <>
      <section className=' pt-4 font-incognito'>
        <div className='relative mx-auto max-w-6xl'>
          <div className='mt-2 flex flex-wrap justify-left gap-4 text-xl text-zinc-200'>
            {socialLinks
              .filter((item) => item.status === type)
              .map((value) => (
                <div key={value.id}>
                  <a
                    href={value.url}
                    target='_blank'
                    className='flex items-center border-b border-b-zinc-800  group'
                  >
                    <value.icon
                      className='flex-shrink-0 h-6 w-6 text-zinc-500 group-hover:text-white  duration-300'
                      aria-hidden='true'
                    />
                    &nbsp;
                    {value.name}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
