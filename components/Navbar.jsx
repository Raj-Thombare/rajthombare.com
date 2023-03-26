import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-6 px-14  border-b-2 shadow-sm flex justify-between items-center bg-white">
      <div className="flex items-center">
        <Image
          className="mr-2.5"
          src="/../public/logo.jpg"
          width={30}
          height={30}
          alt="logo"
        />
        <h3 className="text-xl font-bold">Raj Thombare</h3>
      </div>
      <ul className="flex">
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
