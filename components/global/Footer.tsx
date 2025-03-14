import Link from "next/link";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className='border-t border-zinc-800  mt-10 lg:min-h-10 min-h-10 relative'>
      <div className='max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 pt-4 pb-8 md:py-8'>
        <div className='flex flex-row items-center gap-x-2 font-incognito'>
          <h3 className='font-inter'>Built with ❤️ using</h3>
          <a
            href='https://nextjs.org'
            rel='Next.js'
            target='_blank'
            className='flex items-center gap-x-2 text-white  hover:underline'>
            <Image src='/nextjs.svg' width={20} height={20} alt='nextjs logo' />
            Next.js
          </a>
        </div>

        <div className='flex flex-col lg:items-end items-center lg:text-start text-center'>
          <small className='text-zinc-400 font-incognito'>
            Copyright &copy;{" "}
            <Link className='underline' href={process.env.NEXT_PUBLIC_BASE_URL}>
              Raj Thombare
            </Link>{" "}
            {new Date().getFullYear()} | All rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
