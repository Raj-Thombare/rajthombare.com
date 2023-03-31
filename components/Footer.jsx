import Link from "next/link"

const Footer = () => {
  return (
    <section className="mb-3 px-10 pb-1 md:pb-0 border-t-2 pt-1 md:pt-[2px]">
      <div className="flex flex-col md:flex-row mb-6 md:mb-10">
        <div className="text-black mr-0 mb-2.5 md:mb-0 md:mr-[100px]">
          <p className="pt-4 md:pb-2 text-[20px] font-medium">Quick Links</p>
          <ul>
            <li className="p-0 py-1">
              <Link
                href="#about"
                className="font-normal text-black text-[16px]"
              >
                About
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="#projects"
                className="font-normal text-black text-[16px]"
              >
                Projects
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="#blogs"
                className="font-normal text-black text-[16px]"
              >
                Blogs
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="#contact"
                className="font-normal text-black text-[16px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-black">
          <p className="pt-4 md:pb-2 text-[20px] font-medium">Socials</p>
          <ul>
            <li className="p-0 py-1">
              <Link
                href="https://github.com/Raj-Thombare/"
                target="_blank"
                className="font-normal text-black text-[16px]"
              >
                GitHub
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="https://www.linkedin.com/in/rajthombare/"
                target="_blank"
                className="font-normal text-black text-[16px]"
              >
                LinkedIn
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="https://leetcode.com/Rakaa/"
                target="_blank"
                className="font-normal text-black text-[16px]"
              >
                Leetcode
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="https://twitter.com/saysrakaa/"
                target="_blank"
                className="font-normal text-black text-[16px]"
              >
                Twitter
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="https://rajthombare.hashnode.dev/"
                target="_blank"
                className="font-normal text-black text-[16px]"
              >
                Hashnode
              </Link>
            </li>
            <li className="p-0 py-1">
              <Link
                href="https://instagram.com/im.rakaa/"
                target="_blank"
                className="font-normal text-black text-[16px]"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center md:text-left">
        Copyright © 2023
        <a
          className="mx-1 hover:opacity-50"
          href="https://rajthombare.vercel.app"
          target="_blank"
        >
          Raj Thombare
        </a>
        | All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
