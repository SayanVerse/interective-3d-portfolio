// thoda zada ts ho gya idhar
export enum SkillNames {
  AWS = "aws",
  // AZURE = "azure",    // +
  LINUX = "linux",
  SHELL = "shell",    // +
  PYTHON = "python",  // +
  GIT = "git",
  DOCKER = "docker",
  SELENIUM = "selenium",  // +
  // JENKINS = "jenkins",    // +
  // KUBERNETES = "kubernetes",  // +
  // ANSIBLE = "ansible",    // +
  // TERRAFORM = "terraform",  // +
  // PROMETHEUS = "prometheus",  // +
  // GRAFANA = "grafana",    // +
  // SONARQUBE = "sonarqube",  // +
  // OWASP = "owasp",    // +
  // TRIVY = "trivy",    // +
  // MAVEN = "maven",    // +
  // GO = "go",        // +
  HTML = "html",
  CSS = "css",
  JS = "js",
  JAVA = "java",    // +
  POSTGRES = "postgres",
  TS = "ts",         //
  REACT = "react",   //
  VUE = "vue",       //
  NEXTJS = "nextjs", //
  TAILWIND = "tailwind",  //
  NODEJS = "nodejs",  //
  EXPRESS = "express",  // 
  MONGODB = "mongodb",  //
  GITHUB = "github",   //
  PRETTIER = "prettier",  //
  NPM = "npm",       //
  FIREBASE = "firebase",  //
  WORDPRESS = "wordpress",  //
  NGINX = "nginx",      //
  VIM = "vim",           //
  VERCEL = "vercel",    //
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Partial<Record<SkillNames, Skill>> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 102,
    name: "python",
    label: "Python",
    shortDescription: "The coding equivalent of 'It just works' — even when you barely know what you're doing. 🐍📜",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 104,
    name: "java",
    label: "Java",
    shortDescription: "The OG workhorse that still runs a zillion enterprise apps — slow but steady. 🏋️‍♂️☕",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  // Repurposing AWS for Machine Learning as requested (Mapping 'Machine Learning' to a key)
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Machine Learning",
    shortDescription: "",
    color: "#ff9900",
    icon: "/assets/ml-logo.png", // Trying to point to the new logo
  },
  // Inactive / "Will Learn Soon" Skills
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Will learn soon...",
    color: "#61dafb",
    icon: ""
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "Will learn soon...",
    color: "#41b883",
    icon: ""
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Will learn soon...",
    color: "#fff",
    icon: ""
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Will learn soon...",
    color: "#38bdf8",
    icon: ""
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Will learn soon...",
    color: "#fff",
    icon: ""
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Will learn soon...",
    color: "#336791",
    icon: ""
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: ""
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "The code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: ""
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK!",
    color: "#000000",
    icon: ""
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: ""
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Will learn soon...",
    color: "#fff",
    icon: ""
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Will learn soon...",
    color: "#ffca28",
    icon: ""
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Will learn soon...",
    color: "#007acc",
    icon: ""
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Will learn soon...",
    color: "#fff",
    icon: ""
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Will learn soon...",
    color: "#2496ed",
    icon: ""
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Nginx",
    shortDescription: "Will learn soon...",
    color: "#008000",
    icon: ""
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Will learn soon...",
    color: "#e34c26",
    icon: ""
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Will learn soon...",
    color: "#6cc24a",
    icon: ""
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

