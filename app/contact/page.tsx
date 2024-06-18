import Link from "next/link";

export default function Contact() {
  return (
    <section className='px-10 mb-10 lg:mt-0 lg:mb-10'>
      <h3 className='mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]'>
        Connect with me
      </h3>
      <div className='h-[50vh] flex flex-col justify-center items-center'>
        <div className='text-[18px] mb-9 md:mb-6'>
          I&apos;m available for freelance work. Drop me a line if you fancy a
          chat.
        </div>
        <p className='text-xl md:text-3xl mb-9 md:mb-6 font-light text-[#2d2e32] '>
          Rajthombare3524@gmail.com
        </p>
        <div className='w-full mt-1'>
          <button className='px-1 py-2.5 block m-auto text-white bg-black w-[120px] rounded-lg hover:translate-y-[-10px] transition ease-in-out delay-75 duration-200'>
            <Link href='mailto:rajthombare3524@gmail.com'>Email Me!</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
