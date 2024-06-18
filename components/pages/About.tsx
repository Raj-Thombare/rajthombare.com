import Skills from "./Skills";
import Education from "./Education";
import { ISkills, IEducation } from "@/models/types";

type Props = {
  skills:ISkills[],
  education:IEducation[],
}

const About:React.FC<Props> = ({skills, education}) => {
  return (
   <div className="my-10 md:mb-4">
    <Skills skills={skills} />
    <Education education={education} />
   </div>
  );
};

export default About;
