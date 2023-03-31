import Image from "next/image";

const Education = ({education}) => {
  return (
    <section className="px-10">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px] border-b-2 pb-1 md:pb-[2px]">
        Education
      </h3>
      {education.map((item, idx)=>{
        return (
          <div className="flex flex-col w-[100%] " key={idx}>
            <div className="flex flex-col justify-evenly md:flex-row items-center mb-8 md:mb-12 min-h-[140px] p-[18px] border-[1px] border-black rounded-xl">
              <Image
                src={item.image}
                alt={item.name}
                width={110}
                height={110}
                className="w-[135px] md:w-[110px] h-auto mb-7 md:mb-0"
                priority
              />
              <div>
                  <h4 className="font-bold text-xl">{item.name}</h4>
                  <li className="text-md font-slab p-0 list-square">
                    {item.course}
                  </li>
                <li className="text-md font-slab p-0 list-square">
                  {item.year}
                </li>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
