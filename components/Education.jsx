import Image from "next/image";

const Education = ({education}) => {
  return (
    <section className="px-10">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
        Education
      </h3>
      {education.map((item, idx)=>{
        return (
          <div className="flex flex-col" key={idx}>
            <div className="flex flex-col md:flex-row items-center mb-8 md:mb-12">
              <Image
                src={item.image}
                alt="university logo"
                width={150}
                height={150}
                className="w-[150px] min-h-[50px] mr-0 mb-7 md:mb-0 md:mr-12"
                priority
              />
              <div className="pl-5 md:pl-0">
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-md font-slab">{item.course}</p>
                <p className="text-md font-slab">{item.year}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
