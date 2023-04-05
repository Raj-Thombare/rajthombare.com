import Image from "next/image";
import MyPicture from "../public/picture.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { DiGithubFull } from "react-icons/di";
import { FcDocument } from "react-icons/fc";

const Hero = () => {

  const socialIcons = [
    {
      icon: <DiGithubFull size={30} />,
    },
    {
      icon: <FaLinkedinIn size={30} />,
    },
    {
      icon: <CgTwitter size={30} />,
    },
    {
      icon: <FcDocument size={30} />,
    },
  ];

  return (
    <div
      id="home"
      className="w-[100%] min-h-screen md:min-h-full pt-[50px] pb-10 px-10 text-center md:text-left flex justify-end md:justify-between flex-col-reverse md:flex-row items-center md:items-start"
    >
      <header className="md:w-[60%] pt-4">
        <span className="mb-1 block font-slab text-[18px] font-light">
          Hello there!
          <span className="text-[30px] font-bold ml-1 text-[#8a2be2]">
            I&apos;m
          </span>
        </span>
        <h1 className="mb-3 text-5xl md:text-[50px] font-bold mt-2 text-[#2d2e32]">
          Raj Thombare
        </h1>
        <h2 className="mb-5 text-3xl md:text-[35px] font-bold mt-6 md:mt-2 text-[#2d2e32]">
          Full Stack Software Engineer
        </h2>
        <p
          className={
            "mb-8 font-slab font-light text-lg text-left break-all pr-0 md:pr-10"
          }
        >
          A Full Stack Developer based in Navi Mumbai, Maharashtra.I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques.
        </p>
        <div className="flex">
          {socialIcons.map((social, idx) => {
            return (
              <a
                key={idx}
                className="social-icon"
                href="https://github.com/raj-thombare"
                target="_blank"
              >
                {social.icon}
              </a>
            );
          })}
        </div>
      </header>
      <Image
          src={MyPicture}
          alt="my picture"
          className="rounded-full md:mt-8 md:w-[35%]"
          priority
          width={200}
          height={200}
        />
    </div>
  );
};

export default Hero;
