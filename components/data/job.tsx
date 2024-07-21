export type JobProps = {
  id: string;
  name: string;
  url: string;
  logo: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const JOBS: JobProps[] = [
  {
    id: "shikshasopan",
    name: "Shiksha Sopan - IIT Kanpur",
    url: "https://naest.shiksha-sopan.org/",
    logo: "/shiksha_logo.jpeg",
    jobTitle: "Frontend Developer Intern",
    startDate: "April 2023",
    endDate: "May 2023",
    description:
      "Raj Thombare worked as a Frontend Developer Intern at Shiksha Sopan - IIT Kanpur, contributing to the National Anveshika Experimental Skill Test (NAEST) website. NAEST is an annual competition in India that focuses on assessing and nurturing students' observational, analytical, and experimental skills in physics. Raj built the website and developed React components for the platform used to administer these tests.",
  },
];
