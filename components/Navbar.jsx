import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.jpg";
import { GiBackpack } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="mx-[20px] md:mx-0 py-1 px-6 md:px-10 sticky top-4 border rounded-[50px] flex justify-between items-center bg-white-rgba overflow-y-hidden backdrop-saturate-[180%] backdrop-blur shadow-nav z-50">
      <header className="flex items-center">
        <Image
          className="mr-[2px]"
          src={Logo}
          width={30}
          height={30}
          alt="logo"
          priority
        />
        <h3 className="text-[32px] font-bold">AJ</h3>
      </header>
      <div className="md:hidden cursor-pointer">
        <GiBackpack size={35} />
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
