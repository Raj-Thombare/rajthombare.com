import Skills from "./Skills";
import Education from "./Education";

const About = ({skills}) => {
  return (
   <div id="about" className="h-screen">
    <Skills skills={skills} />
    <Education />
   </div>
  );
};

export default About;
