export type Certificate = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    link: string;
    image?: string;
};

export const certificates: Certificate[] = [
    {
        id: "sih-2025",
        title: "Smart India Hackathon 2025 Grand Finale",
        issuer: "Smart India Hackathon",
        date: "Dec 2025",
        link: "https://drive.google.com/file/d/12SSgvAMU1nUwh0YxFDTomLb4BtUna9mU/view",
        image: "/assets/projects-screenshots/smartindiahackathon.png",
    },
    {
        id: "hp-life-ai",
        title: "AI for Beginners",
        issuer: "HP LIFE",
        date: "Mar 2025",
        credentialId: "06218b60-20f3-41d3-821d-07ed564d15e2",
        link: "https://www.life-global.org/certificate/06218b60-20f3-41d3-821d-07ed564d15e2",
        image: "/assets/projects-screenshots/hplife_logo.jpg",
    },
    {
        id: "hackerrank-java",
        title: "Java (Basic)",
        issuer: "HackerRank",
        date: "Feb 2025",
        credentialId: "B5B3A86A574F",
        link: "https://www.hackerrank.com/certificates/b5b3a86a574f",
        image: "/assets/projects-screenshots/hackerrank_java.jpg",
    },
    {
        id: "hackerrank-ps",
        title: "Problem Solving (Basic)",
        issuer: "HackerRank",
        date: "Feb 2025",
        credentialId: "6AC58A65F3C1",
        link: "https://www.hackerrank.com/certificates/6ac58a65f3c1",
        image: "/assets/projects-screenshots/hackerrank_java.jpg",
    },
];
