import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { useState, useRef } from "react";

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const bodyRef = useRef();

  const navHandler = () => {
    setNav((prev) => !prev)
  }

  return (
    <div className="mx-[20px] sticky top-4 z-50">
      <nav className="w-full md:mx-0 py-1 md:py-[6px] px-6 border rounded-[50px] flex justify-between items-center bg-white-rgba overflow-y-hidden backdrop-saturate-[180%] backdrop-blur shadow-nav z-50">
        <header className="flex items-center">
          <Image
            className="mr-[2px]"
            src={Logo}
            width={45}
            height={45}
            alt="logo"
            priority
          />
        </header>
        <ul className="hidden md:flex">
          <li>
            <Link href="/" className="hover:opacity-75">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:opacity-75">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:opacity-75">
              Posts
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:opacity-75">
              Connect
            </Link>
          </li>
        </ul>

        <div className="md:hidden cursor-pointer">
          <BiMenuAltRight size={45} onClick={navHandler} />
        </div>
      </nav>

      <div
        className={`sm:hidden w-[100%] fixed top-0 right-0 bottom-0 p-0 m-0 flex justify-center items-center h-screen z-50 bg-white-rgba backdrop-saturate-[180%] backdrop-blur text-center ${
          nav ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="fixed top-[25px] right-[35px] text-white md:text-black">
          <IoMdClose size={45} onClick={navHandler} />
        </div>
        <ul className="w-full h-full flex flex-col justify-center items-center bg-[#2d2e32] md:bg-transparent">
          <li className="m-3">
            <Link
              href="/"
              className="text-4xl text-white md:text-black hover:opacity-75"
              onClick={navHandler}
            >
              Home
            </Link>
          </li>
          <li className="m-3">
            <Link
              href="/projects"
              className="text-4xl text-white md:text-black hover:opacity-75"
              onClick={navHandler}
            >
              Projects
            </Link>
          </li>
          <li className="m-3">
            <Link
              href="/blogs"
              className="text-4xl text-white md:text-black hover:opacity-75"
              onClick={navHandler}
            >
              Posts
            </Link>
          </li>
          <li className="m-3">
            <Link
              href="#contact"
              className="text-4xl text-white md:text-black hover:opacity-75"
              onClick={navHandler}
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
