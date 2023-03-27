import Image from "next/image";
import Logo from "../public/logo.jpg";
import { GiBackpack } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="py-4 px-10 border-b-[1px] flex justify-between items-center bg-[#f9f9f9] overflow-y-hidden">
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
