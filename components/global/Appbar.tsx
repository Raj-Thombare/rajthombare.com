"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo-light.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { BsMenuButtonWide } from "react-icons/bs";

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
    setNav((status) => !status);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && nav) {
        setNav(false);
      }
    };

    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav]);

  const isActive = (link) =>
    pathname === link || pathname.startsWith(`${link}/`);

  return (
    <header className='text-sm py-6 md:px-16 px-6 border-b border-zinc-800 z-50 md:mb-20 mb-8'>
      <nav className='max-w-6xl mx-auto flex items-center justify-between'>
        <Link href='/' className='flex items-center flex-row gap-x-4'>
          <Image src={Logo} width={45} height={45} alt='logo' />
          <div className='py-1'>
            <h1 className='font-incognito font-semibold text-2xl'>
              Raj Thombare
            </h1>
          </div>
        </Link>
        <ul className='hidden sm:flex gap-x-8'>
          {navLinks.slice(0, 4).map((nav) => (
            <li key={nav.title}>
              <Link
                href={nav.link}
                className={`${
                  isActive(nav.link) ? "font-semibold" : "opacity-75"
                } font-incognito text-white hover:text-cyan-600 duration-300 text-base hover:opacity-100`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden cursor-pointer'>
          <BiMenuAltRight size={45} onClick={navHandler} />
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`sm:hidden w-full fixed top-0 right-0 bottom-0 p-0 m-0 flex flex-col justify-center items-center h-full backdrop-saturate-150 backdrop-blur text-center ${
          nav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ease-in-out duration-300`}>
        <div className='flex justify-between pt-6 px-6 w-[100%]'>
          <div className='flex items-center'>
            <span className='mr-3'>
              <BsMenuButtonWide size={30} />
            </span>
            <p className='font-incognito text-3xl font-extrabold'>MENU</p>
          </div>
          <div className=' text-white md:text-black'>
            <IoMdClose size={45} onClick={navHandler} />
          </div>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center md:bg-transparent'>
          <ul className='flex flex-col justify-center items-center px-2'>
            {navLinks.map((nav) => (
              <li
                key={nav.title}
                className={`${
                  isActive(nav.link) ? "font-semibold bg-white text-black" : ""
                } m-3 p-3 bg-primary-bg rounded border border-white w-[250px]`}>
                <Link
                  href={nav.link}
                  className={`${
                    isActive(nav.link) ? "font-semibold text-black" : ""
                  } text-3xl font-incognito md:text-black hover:opacity-75`}
                  onClick={navHandler}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}


   
