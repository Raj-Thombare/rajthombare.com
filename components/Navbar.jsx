import Image from "next/image";
import { GiBackpack } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="mb-[56px] py-5 border-b-[1px] flex justify-between items-center">
      <div className="flex items-center">
        <Image
          className="mr-[2px]"
          src="/../public/logo.jpg"
          width={30}
          height={30}
          alt="logo"
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
