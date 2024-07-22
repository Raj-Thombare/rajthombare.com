export type EducationProps = {
  id: string;
  name: string;
  url: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string;
  CGPA?: string;
};

export const EDUCATIONS: EducationProps[] = [
  {
    id: "AUM",
    name: "Amity University Mumbai",
    url: "https://www.amity.edu/mumbai/",
    logo: "/education/amity.jpeg",
    startDate: "Sept 2023",
    endDate: "June 2025",
    description:
      "I completed my Master of Computer Applications (MCA) in Computer Science at Amity University, Mumbai",
    CGPA: "CGPA 8.75",
  },
  {
    id: "CSMU",
    name: "Chhatrapati Shivaji Maharaj University",
    url: "https://csmu.ac.in/",
    logo: "/education/csmu.png",
    startDate: "Sept 2019",
    endDate: "July 2022",
    description:
      "I completed my Bachelor of Computer Applications (BCA) in Computer Science at Chhatrapati Shivaji Maharaj University, Shedung, Maharashtra",
    CGPA: "GPA 9.06",
  },
  {
    id: "rfsc",
    name: "Reliance Foundation School",
    url: "https://www.rfs.edu.in/Lodhivali-MM/",
    logo: "/education/rfsc.png",
    startDate: "2014",
    endDate: "2019",
    description:
      "I completed my Primary Education at Reliance Foundation School, Lodhivali earlier known as J. H. Ambani High School and Jr. College",
  },
];
