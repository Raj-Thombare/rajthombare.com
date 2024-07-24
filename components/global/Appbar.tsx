"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo-light.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Experience", link: "/#experience" },
  { title: "Contact Me", link: "/contact" },
  { title: "Education", link: "/#education" },
];

export default function Appbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const navHandler = () => {
    setNav((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <header className='text-sm py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-20 mb-8'>
      <nav className='max-w-6xl mx-auto flex items-center justify-between'>
        <Link href='/' className='flex items-center flex-row gap-x-4'>
          <Image src={Logo} width={45} height={45} alt='logo' />
          <div className='py-1'>
            <h1 className='font-incognito font-semibold text-2xl'>
              Raj Thombare
            </h1>
          </div>
        </Link>
        <ul className='hidden md:flex gap-x-8'>
          {navLinks.slice(0, 4).map((nav) => (
            <li key={nav.title}>
              <Link
                href={nav.link}
                className={`${
                  pathname === nav.link ? "font-semibold" : "opacity-75"
                } font-incognito text-white  hover:text-cyan-600  duration-300 text-base hover:opacity-100`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className='md:hidden cursor-pointer'>
          <BiMenuAltRight size={45} onClick={navHandler} />
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`sm:hidden w-[100%] fixed top-0 right-0 bottom-0 p-0 m-0 flex justify-center items-center h-screen z-50 backdrop-saturate-50 backdrop-blur text-center ${
          nav ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}>
        <div className='fixed top-[25px] right-[35px] text-white md:text-black'>
          <IoMdClose size={45} onClick={navHandler} />
        </div>
        <ul
          className={`w-full h-full flex flex-col justify-center items-center md:bg-transparent`}>
          {navLinks.map((nav) => (
            <li key={nav.title} className='m-3'>
              <Link
                href={nav.link}
                className={` ${
                  pathname === nav.link
                    ? "text-black font-semibold"
                    : "opacity-75"
                } text-4xl font-incognito text-white md:text-black hover:opacity-75`}
                onClick={navHandler}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
