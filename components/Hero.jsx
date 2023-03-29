import Image from "next/image";
import MyPicture from "../public/picture.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { DiGithubFull } from "react-icons/di";
import { FcDocument } from "react-icons/fc";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-[100%] min-h-screen md:min-h-full  pt-[50px] pb-10 px-10 text-center md:text-left flex justify-end md:justify-between flex-col-reverse md:flex-row items-center md:items-start"
    >
      <div className="md:w-[60%] pt-7">
        <h1 className="mb-8 text-5xl md:text-[50px] font-bold mt-6 md:mt-0 text-[#2d2e32]">
          Full Stack Software Engineer
        </h1>
        <p className="mb-8 font-slab font-light text-lg text-left break-all pr-0 md:pr-10">
          Hello, I am Raj Thombare. A Full Stack Developer based in Navi Mumbai,
          Maharashtra.I excel in designing and maintaining responsive websites
          that offer a smooth user experience. My expertise lies in crafting
          dynamic, engaging interfaces through writing clean and optimized code
          and utilizing cutting-edge development tools and techniques.
        </p>
        <div className="flex">
          <a
            className="social-icon"
            href="https://github.com/raj-thombare"
            target="_blank"
          >
            <DiGithubFull size={30} />
          </a>
          <a
            className="social-icon"
            href="https://linkedin.com/in/rajthombare"
            target="_blank"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/saysrakaa"
            target="_blank"
          >
            <CgTwitter size={30} />
          </a>
          <a
            className="social-icon"
            href="https://docs.google.com/document/d/1RaFJPnZPtRmpmoKanLKua4qJLIcXHY6C6GNSHig_h08/edit?usp=sharing"
            target="_blank"
            alt="resume"
          >
            <FcDocument size={30} />
          </a>
        </div>
      </div>
      <Image
        src={MyPicture}
        alt="my picture"
        className="rounded-full md:w-[35%]"
        priority
        width={200}
        height={200}
      />
    </div>
  );
};

export default Hero;