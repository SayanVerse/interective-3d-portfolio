import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "internlink",
    category: "Hackathon",
    title: "InternLink - PM Internship Recommender",
    src: "/assets/projects-screenshots/internlink.png",
    screenshots: [],
    live: "https://internlink-sih.netlify.app/",
    github: "https://github.com/SayanVerse/internlink-sih-grandfinale.git",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.postgres, PROJECT_SKILLS.prisma],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center">
            InternLink: PM Internship Recommender
          </TypographyP>
          <TypographyP className="font-mono my-4">
            A full-stack web application that provides an AI-light recommendation system for PM Internship Scheme candidates. Built with a modern tech stack featuring glassmorphism design, multi-language support, and intelligent matching algorithms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "3d-portfolio",
    category: "Portfolio",
    title: "Interactive 3D Portfolio",
    src: "/assets/nav-link-previews/landing.png",
    screenshots: [],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.spline, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center">
            Interactive 3D Portfolio
          </TypographyP>
          <TypographyP className="font-mono my-4">
            Currently developing with curiosity! This is the site you are viewing right now, featuring interactive 3D elements and smooth animations.
          </TypographyP>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 my-3 mb-8">
            <Button variant={"secondary"} size={"sm"} disabled>
              Demo Coming Soon
            </Button>
          </div>
        </div>
      );
    },
  },
  {
    id: "edutrack",
    category: "Education",
    title: "EduTrack 360",
    src: "/assets/projects-screenshots/edutract360.png",
    screenshots: [],
    live: "https://edutrack360.netlify.app/",
    github: "https://github.com/SayanVerse/EduTrack-360-.git",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.vite, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center">
            EduTrack 360
          </TypographyP>
          <TypographyP className="font-mono my-4">
            An education management and smart attendance system designed for students and teachers to streamline academic tracking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "clipboard",
    category: "Utility",
    title: "Multi-Device Clipboard",
    src: "/assets/projects-screenshots/image.png",
    screenshots: [],
    live: "https://clip-board.lovable.app",
    github: "https://github.com/SayanVerse/clip-board.git",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.supabase, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center">
            Universal Clipboard
          </TypographyP>
          <TypographyP className="font-mono my-4">
            A multi-device clipboard management system that allows you to send and receive files and text across millions of devices instantly. (Currently in development phase).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "java-portfolio",
    category: "Portfolio",
    title: "Sayan Portfolio",
    src: "/assets/projects-screenshots/image copy.png",
    screenshots: [],
    live: "#",
    github: "https://github.com/SayanVerse/sayan-portfolio.git",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center">
            Sayan Portfolio
          </TypographyP>
          <TypographyP className="font-mono my-4">
            A personal portfolio website built with modern web technologies such as React, TypeScript, and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;
