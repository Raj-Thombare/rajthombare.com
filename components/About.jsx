import Skills from "./Skills";
import Education from "./Education";

const About = ({skills, education}) => {
  return (
   <div id="about" className="my-10">
    <Skills skills={skills} />
    <Education education={education} />
   </div>
  );
};

export default About;
