import Image from "next/image";
import Logo from "../public/logo.jpg";
import { GiBackpack } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="mx-[20px] md:mx-0 sticky top-4 py-2 px-6 md:px-10 border rounded-[50px] flex justify-between items-center bg-white-rgba overflow-y-hidden background-saturate-[180%] backdrop-blur-md shadow-nav">
      <div className="flex items-center">
        <Image
          className="mr-[2px]"
          src={Logo}
          width={30}
          height={30}
          alt="logo"
          priority
        />
        <h3 className="text-[32px] font-bold">AJ</h3>
      </div>
      <div className="md:hidden cursor-pointer">
        <GiBackpack size={35} />
      </div>
      <ul className="hidden md:block md:flex">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
