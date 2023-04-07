import Link from "next/link";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Education",
      link: "/#education",
    },
    {
      title: "Skills",
      link: "/#skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "Connect",
      link: "/connect",
    },
  ];

  const socialLinks = [
    {
      title: "Github",
      link: "https://github.com/Raj-Thombare/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rajthombare/",
    },
    {
      title: "Leetcode",
      link: "https://leetcode.com/Rakaa/",
    },
    {
      title: "Twitter",
      link: "https://twitter.com/saysrakaa/",
    },
    {
      title: "Hashnode",
      link: "https://rajthombare.hashnode.dev/",
    },
    {
      title: "Instagram",
      link: "https://instagram.com/im.rakaa/",
    },
  ];

  return (
    <section className="mb-3 px-10 pb-1 md:pb-0 border-t-2 pt-1 md:pt-[2px]">
      <div className="flex flex-col md:flex-row mb-6 md:mb-10">
        <div className="text-black mr-0 mb-2.5 md:mb-0 md:mr-[100px]">
          <p className="pt-4 md:pb-2 text-[20px] font-medium">Quick Links</p>
          <ul>
            {footerLinks.map((footer) => {
              return (
                <li key={footer.title} className="p-0 py-1">
                  <Link
                    href={footer.link}
                    className="font-normal text-black text-[16px]"
                  >
                    {footer.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-black">
          <p className="pt-4 md:pb-2 text-[20px] font-medium">Socials</p>
          <ul>
            {socialLinks.map((social) => {
              return (
                <li key={social.title} className="p-0 py-1">
                  <Link
                    href={social.link}
                    target="_blank"
                    className="font-normal text-black text-[16px]"
                  >
                    {social.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between  text-center md:text-left">
        <p>
          Copyright © 2023
          <a
            className="mx-2 text-black hover:opacity-75"
            href="https://rajthombare.vercel.app"
            target="_blank"
          >
            • Raj Thombare
          </a>
        </p>
        <p>
          Built with
          <span className="mx-1 text-[#8a2be2]">NextJs</span> and
          <span className="mx-1 text-[#8a2be2]">Tailwind</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
