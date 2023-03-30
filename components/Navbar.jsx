import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import { GiBackpack } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="mx-[20px] md:mx-0 py-1 md:py-1.5 px-6 sticky top-4 border rounded-[50px] flex justify-between items-center bg-white-rgba overflow-y-hidden backdrop-saturate-[180%] backdrop-blur shadow-nav z-50">
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
