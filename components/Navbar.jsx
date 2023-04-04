import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import Logo from "../public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const navHandler = () => {
    setNav((prev) => !prev);
  };

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Posts",
      link: "/blogs",
    },
    {
      title: "Connect",
      link: "#contact",
    }
  ];

  return (
    <div className="mx-[20px] sticky top-4 z-50">
      <nav className="w-full md:mx-0 py-1 md:py-[6px] px-6 border rounded-[50px] flex justify-between items-center bg-white-rgba overflow-y-hidden backdrop-saturate-[180%] backdrop-blur shadow-nav z-50">
        <Link href="/" className="flex items-center">
          <Image
            className="mr-[2px]"
            src={Logo}
            width={45}
            height={45}
            alt="logo"
            priority
          />
        </Link>
        <ul className="hidden md:flex">
          {navLinks.map((nav)=>{
            return (
              <li key={nav.title}>
                <Link href={nav.link} className={` ${
                  router.pathname === nav.link ? 'text-black' : 'opacity-75'
                } hover:text-black hover:opacity-100`}>
                  {nav.title}
                </Link>
              </li>
            );
          })}
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
          {navLinks.map((nav)=>{
            return (
              <li key={nav.title} className="m-3">
                <Link href={nav.link} className={` ${
                  router.pathname === nav.link ? 'text-black' : 'opacity-75'
                } text-4xl text-white md:text-black hover:opacity-75`}
                onClick={navHandler}>
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
