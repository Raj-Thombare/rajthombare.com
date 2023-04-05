import Skills from "./Skills";
import Education from "./Education";

const About = ({skills, education}) => {
  return (
   <div className="my-10 md:mb-4">
    <Skills skills={skills} />
    <Education education={education} />
   </div>
  );
};

export default About;
