
import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Tina Pokharna — Software Developer & AI Enthusiast",
  author: "Tina Pokharna",
  description:
    "Information Technology student at Pune Institute of Computer Technology, passionate about software development, databases, and Artificial Intelligence.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/Tina2005173" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astrozen-lime-mu.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Tina Pokharna",
    specialty: "Software Developer & AI Enthusiast",
    summary:
      "Information Technology student at Pune Institute of Computer Technology, Pune. Passionate about building innovative software solutions using programming, databases, web technologies, and Artificial Intelligence.",
    email: "tinapokharna2@gmail.com",
  },

  experience: [
    {
      company: "Snazzysmile Pediatric and Adult Oral Rehab Zone",
      position: "Software Development Intern",
      startDate: "Feb 2026",
      endDate: "Apr 2026",
      summary: [
        "Contributed to the development of an AI-powered dental assessment web application based on the ADA Caries Risk Assessment framework.",
        "Developed responsive frontend components using React.js, TypeScript, and CSS for Doctor and Patient portals.",
        "Implemented features including authentication UI, dental image uploads, patient assessment forms, interactive dashboards, and visit history modules.",
        "Collaborated with the development team using Git, GitHub, and Docker following Agile development practices.",
      ],
    },
    {
      company: "RB Tech Services",
      position: "Software Development Intern",
      startDate: "Jun 2023",
      endDate: "Jul 2023",
      summary: [
        "Worked on developing a full-stack e-commerce website integrating frontend and backend functionalities.",
        "Built responsive user interface components using HTML, CSS, JavaScript, and PHP.",
        "Implemented backend functionalities using MySQL.",
        "Collaborated with developers in an Agile environment using Git and GitHub for version control and task tracking.",
      ],
    },
  ],

  
projects: [
  {
    name: "DentalAI",
    summary:
      "An AI-powered dental assessment web application featuring dental image uploads, patient assessment forms, visit history, and interactive dashboards. Built using React.js, TypeScript, Docker, and GitHub Actions.",
    linkPreview: "",
    linkSource: "",
    image: "/dental_portfolio.jpg",
  },
  {
    name: "Personal Finance Management System",
    summary:
      "A PHP and MongoDB-based personal finance tracker to manage income, expenses, and budgets. Includes database triggers, views, stored procedures, overspending alerts, and analytical reports.",
    linkPreview: "",
    linkSource: "https://github.com/PurvaPotabatti/PersonalFinance",
    image: "/personal_finanace_image.jpg",
  },
],


  about: {
    description: `
      Hi, I'm Tina Pokharna, an Information Technology undergraduate at Pune Institute of Computer Technology, Pune.

      I completed my Diploma in Computer Engineering from Government Polytechnic Ahilyanagar with 93.43%. Currently pursuing my B.E. in Information Technology (2024–2027), I am passionate about software development, Artificial Intelligence, database management, and building practical technology solutions.

      My technical skills include Python, Java, C, C++, PHP, JavaScript, SQL, MongoDB, Git, GitHub, and web development.

      I have worked on projects such as DentalAI and Personal Finance Management System, gaining practical experience in frontend development, backend technologies, database management, and collaborative software development.

      I enjoy learning new technologies, solving problems, and continuously improving my development skills.
    `,
    image: "/alejandro-big.jpg",
  },
};
