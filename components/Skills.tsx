import Image from "next/image";
import { ISkills } from "@/models/types";

type Props = {
  skills:ISkills[]
}

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <section id="skills" className="mb-8 md:mb-20 px-10 pb-10 md:pb-0">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
        Skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:justify-items-center items-end overflow-hidden">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image
              alt={skill.title}
              width={40}
              height={40}
              src={skill.image}
              className="w-[40px] h-[40px]"
            />
            <p className={"font-slab text-sm mt-2.5 pt-1.5"}>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
