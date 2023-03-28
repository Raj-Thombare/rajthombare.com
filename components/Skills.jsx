import Image from "next/image";

const Skills = ({ skills }) => {
  return (
    <div className="px-10 my-6 md:my-10 lg:my-20">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[40px]">Skills</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:justify-items-center items-end overflow-hidden">
        {skills.map((skill) => (
          <div key={skill.title} className="flex flex-col items-center">
            <Image alt={skill.title} width={40} height={40} src={skill.image} />
            <p className="text-sm pt-1.5 font-slab">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
