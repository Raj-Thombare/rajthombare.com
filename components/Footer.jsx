import Link from "next/link"

const Footer = () => {
  return (
    <section className="mb-8 md:mb-20 px-10 pb-10 md:pb-0 border-t-2 pt-1 md:pt-[2px]">
      <div className="text-[#2d2e32]">
        <p className="pt-4 text-md">Quick Links</p>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#blogs">Blogs</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </section>
  );
};

export default Footer;
