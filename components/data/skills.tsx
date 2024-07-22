import {
  CppIcon,
  ExpressIcon,
  JavascriptIcon,
  MongoIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  CssIcon,
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
  HtmlIcon,
  NpmIcon,
  ZodIcon,
  CFIcon,
  ReduxIcon,
  NodeIcon,
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
  {
    name: "Python",
    icon: <PythonIcon />,
    link: "https://www.python.org/",
  },
  {
    name: "C++",
    icon: <CppIcon />,
    link: "https://cplusplus.com/",
  },
];

export const FRAMEWORKS: SkillProps[] = [
  {
    name: "React.js",
    icon: <ReactIcon />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <NextIcon />,
    link: "https://nextjs.org/",
  },
  {
    name: "Auth.js",
    icon: <AuthIcon />,
    link: "https://authjs.dev/",
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    link: "https://nodejs.org/en",
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
    name: "Redux",
    icon: <ReduxIcon />,
    link: "https://redux.js.org/",
  },
  {
    name: "Zod",
    icon: <ZodIcon />,
    link: "https://zod.dev/",
  },
  {
    name: "Tailwindcss",
    icon: <TailwindIcon />,
    link: "https://tailwindcss.com/",
  },
];

export const DATABASES: SkillProps[] = [
  {
    name: "Postgres",
    icon: <PostgresIcon />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Prisma",
    icon: <PrismaIcon />,
    link: "https://www.prisma.io/",
  },
  {
    name: "MongoDB",
    icon: <MongoIcon />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Firebase",
    icon: <FirebaseIcon />,
    link: "https://firebase.google.com/",
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
  {
    name: "Cloudflare",
    icon: <CFIcon />,
    link: "https://www.cloudflare.com/",
  },
  {
    name: "NPM",
    icon: <NpmIcon />,
    link: "https://www.npmjs.com/",
  },
];
