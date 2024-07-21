import {
  BashIcon,
  ExpressIcon,
  JavascriptIcon,
  MongoIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  RedisIcon,
  TailwindIcon,
  TypescriptIcon,
  FirebaseIcon,
  DockerIcon,
  GitIcon,
  PythonIcon,
  HonoIcon,
  PrismaIcon,
  AuthIcon,
  AwsIcon,
  GcpIcon,
  JenkinsIcon,
  ZodIcon,
  CFIcon,
} from "@/components/icons";

export type SkillProps = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export const LANGUAGES: SkillProps[] = [
  {
    name: "Javascript",
    icon: <JavascriptIcon />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon />,
    link: "https://www.typescriptlang.org/",
  },
  //   {
  //     name: "Bash",
  //     icon: <BashIcon />,
  //     link: "https://www.gnu.org/software/bash/",
  //   },
  {
    name: "Python",
    icon: <PythonIcon />,
    link: "https://www.python.org/",
  },
];

export const FRAMEWORKS: SkillProps[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    link: "https://reactjs.org/",
  },
  {
    name: "Nextjs",
    icon: <NextIcon />,
    link: "https://nextjs.org/",
  },
  {
    name: "Auth.js",
    icon: <AuthIcon />,
    link: "https://authjs.dev/",
  },
  {
    name: "Zod",
    icon: <ZodIcon />,
    link: "https://zod.dev/",
  },
  {
    name: "Express",
    icon: <ExpressIcon />,
    link: "https://expressjs.com/",
  },
  {
    name: "Hono",
    icon: <HonoIcon />,
    link: "https://hono.dev/",
  },
  {
    name: "Tailwindcss",
    icon: <TailwindIcon />,
    link: "https://tailwindcss.com/",
  },
];

export const DATABASES: SkillProps[] = [
  {
    name: "MongoDB",
    icon: <MongoIcon />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Postgres",
    icon: <PostgresIcon />,
    link: "https://www.postgresql.org/",
  },
  //   {
  //     name: "Redis",
  //     icon: <RedisIcon />,
  //     link: "https://redis.io/",
  //   },
  {
    name: "Firebase",
    icon: <FirebaseIcon />,
    link: "https://firebase.google.com/",
  },
  {
    name: "Prisma",
    icon: <PrismaIcon />,
    link: "https://www.prisma.io/",
  },
];

export const DEVOPS: SkillProps[] = [
  {
    name: "Docker",
    icon: <DockerIcon />,
    link: "https://www.docker.com/",
  },
  {
    name: "Git",
    icon: <GitIcon />,
    link: "https://git-scm.com/",
  },
  {
    name: "AWS",
    icon: <AwsIcon />,
    link: "https://aws.amazon.com/",
  },
  //   {
  //     name: "GCP",
  //     icon: <GcpIcon />,
  //     link: "https://cloud.google.com/",
  //   },
  {
    name: "Cloudflare",
    icon: <CFIcon />,
    link: "https://www.cloudflare.com/",
  },
  //   {
  //     name: "Jenkins",
  //     icon: <JenkinsIcon />,
  //     link: "https://www.jenkins.io/",
  //   },
];
