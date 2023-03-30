import Image from "next/image";

const Education = ({education}) => {
    console.log(education)

  return (
    <section className="px-10 my-6 md:my-10 lg:my-20">
      <h3 className="mb-[40px] text-[#2d2e32] font-bold text-[32px]">
        Education
      </h3>
      {education.map((item, idx)=>{
        return <div className="flex flex-col" key={idx}>
          <div className="flex items-start md:items-center mb-10">
            <Image
              src={item.image}
              alt="university logo"
              className="mr-0 md:mr-12 w-auto md:w-[150px]"
              priority
              width={150}
              height={150}
            />
            <div className="pl-5 md:pl-0">
              <h4 className="font-bold text-xl">{item.name}</h4>
              <p className="text-md font-slab">{item.course}</p>
              <p className="text-md font-slab">{item.year}</p>
            </div>
          </div>
        </div>;
      })}
    </section>
  );
};

export default Education;
