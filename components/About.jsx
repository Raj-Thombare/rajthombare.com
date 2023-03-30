import Skills from "./Skills";
import Education from "./Education";

const About = ({skills, education}) => {
  return (
   <div id="about" className="h-screen">
    <Skills skills={skills} />
    <Education education={education} />
   </div>
  );
};

export default About;
