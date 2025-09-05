import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const portfolioImages = {
  profile:
    "https://api.builder.io/api/v1/image/assets/TEMP/0468b51298414b9c6fb21cc6fe3218a379d0e5fa?width=920",
  project1:
    "/Developer_Portfolio/assets/SafeScript-Logo.jpg",
  project2:
    "/Developer_Portfolio/assets/Blog_pic.jpg",
  project3:
    "/Developer_Portfolio/assets/Portfolio_Pic.jpg",
  project4:
    "https://api.builder.io/api/v1/image/assets/TEMP/59e42bb15b97198af3623297b09c14aa0283e0cd?width=1126",
  // Technology icons - Add new ones here
  react:
    "https://api.builder.io/api/v1/image/assets/TEMP/969e098303d96b7d7bf2806520b3c3db56a63192?width=80",
  python:
    "https://api.builder.io/api/v1/image/assets/TEMP/2347053b8cc6fefd38ac7b0b1e62002c2d255d6a?width=80",
  javascript:
    "https://api.builder.io/api/v1/image/assets/TEMP/54540fafa16b93ea7cd47d6f5cd667534ed5e8bc?width=80",
  tailwind:
    "https://api.builder.io/api/v1/image/assets/TEMP/faa214df9db6ae5561bd4d3e68cf2c9a16f8f6a3?width=80",
  html: "https://api.builder.io/api/v1/image/assets/TEMP/3908ae717237f316e90188d7fd96e17f4b48dd56?width=80",
  css: "https://api.builder.io/api/v1/image/assets/TEMP/7a67d672bee004b637ec60f981545a77d7b3f4a5?width=80",
  // New technology icons (placeholder URLs - replace with actual icon URLs)
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  csharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  dotnet:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  intellij:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
};

const technologies = [
  { name: "Java", icon: portfolioImages.java },
  { name: "Python", icon: portfolioImages.python },
  { name: "TypeScript", icon: portfolioImages.typescript },
  { name: "React", icon: portfolioImages.react },
  { name: "Next.js", icon: portfolioImages.nextjs },
  { name: "Angular", icon: portfolioImages.angular },
  { name: "Express.js", icon: portfolioImages.express },
  { name: "MongoDB", icon: portfolioImages.mongodb },
  { name: "MySQL", icon: portfolioImages.mysql },
  { name: "TailwindCSS", icon: portfolioImages.tailwind },
  { name: "Jest", icon: portfolioImages.jest },
  { name: "C", icon: portfolioImages.c },
  { name: "C#", icon: portfolioImages.csharp },
  { name: "VSCode API", icon: portfolioImages.vscode },
];

const experiences = [
  {
    id: 1,
    title: "Digital Transformation Project Manager",
    company: "Airbond Travel",
    period: "Jun 2025 - Present",
    location: "Toronto, ON",
    logo: "/Developer_Portfolio/assets/airbond-logo.jpg",
    description:
    "Guided the company president on technology decisions and led the modernization of the website with AI-powered trip planning and a booking engine. Coordinated payment integrations, streamlined workflows with Power Automate, and created an IT training handbook. Prepared marketing initiatives and delivered general IT support to ensure smooth adoption of new systems.",
    skills: [
      "Website Revamp",
      "AI Booking System",
      "Power Automate",
      "Digital Marketing",
      "IT Training",
    ],
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "SOTI",
    period: "Sep 2023 - Aug 2024",
    location: "Toronto, ON",
    logo: "/Developer_Portfolio/assets/SOTI-Logo.png",
    description:
      "Resolved over 130 issues including unit tests and bugs, significantly improving frontend user experience. Increased software module coverage from 5% to 80% through comprehensive unit testing with Karma and Jasmine. Contributed to backend upgrades and security vulnerability resolution.",
    skills: ["Angular", "C#", ".NET", "MySQL", "Jasmine", "Karma"],
  },
  {
    id: 3,
    title: "STEM Program Mentor",
    company: "k2i academy",
    period: "May 2022 - Aug 2022",
    location: "Toronto, ON",
    logo: "/Developer_Portfolio/assets/Lassonde-Logo.jpg",
    description:
      "Mentored 8 Grade 11 physics students in creating research posters on A.I. and data using Micro-bit. Taught students basic Machine Learning to analyze weather graphs and identify natural disasters through DIY weather stations.",
    skills: ["Machine Learning", "Micro-bit", "STEM Education", "Physics"],
  },
  {
    id: 4,
    title: "Software Developer",
    company: "Lassonde Blockchain Association",
    period: "Sep 2023 - Jan 2024",
    location: "Toronto, ON",
    logo: "/Developer_Portfolio/assets/LBA-Logo.jpg",
    description:
      "Developed minimalist landing page and new blog submission feature following Figma design constraints. Built modern web applications using Next.js and React with responsive design principles.",
    skills: ["Next.js", "React", "Tailwind", "Figma"],
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "YuHacks 2023",
    period: "June 2023 - Aug 2023",
    location: "Toronto, ON",
    logo: "/Developer_Portfolio/assets/yuHacks-logo.jpg",
    description:
      "Assembled modern landing page and developed custom JWT login/registration with error handling. Implemented GraphQL mutations to post data to backend for hacker form applications.",
    skills: ["Next.js", "React", "TypeScript", "GraphQL", "JWT"],
  },
];


const projects = [
  {
    id: 1,
    title: "SafeScript - VS Code Extension",
    description:
      "AI-powered VS Code extension for C code security analysis. Combines custom static analysis with LLM to detect vulnerabilities and suggest secure alternatives. Features real-time analysis, CWE/CVE mapping, and one-click AI-guided fixes.",
    image: portfolioImages.project1,
    technologies: ["TypeScript", "VSCode API", "Jest"],
    link: "https://github.com/farestrad/LLM-Assisted-Secure-Coding",
  },
  {
    id: 2,
    title: "Cloud-Deployed Blog Platform",
    description:
      "Full-stack MERN blog platform with automated CI/CD pipeline, image upload, and cloud deployment. Implemented RESTful API with Express.js backend and MongoDB Atlas for CRUD operations.",
    image: portfolioImages.project2,
    technologies: ["React", "Express.js", "MongoDB"],
    link: "https://github.com/Humza987/Blog_Platform",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and featuring smooth animations and dark/light mode support.",
    image: portfolioImages.project3,
    technologies: ["React", "TypeScript", "TailwindCSS"],
    link: "https://github.com/placeholder",
  },
];

const socialLinks = {
  email: "mailto:humzainam@gmail.com",
  linkedin: "https://linkedin.com/in/humza-inam",
  github: "https://github.com/Humza987",
};

const resumeLink = "https://drive.google.com/file/d/1Lz0vALCMn9dXzd0fSeTaSX02r7amHNpW/view?usp=sharing"; // Modifiable

// Animated typing text component
function AnimatedTypingText({ isDarkMode }: { isDarkMode: boolean }) {
  const phrases = [
    "develop creative solutions",
    "tackle challenges",
    "study the impact of technology",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="text-lg sm:text-xl lg:text-2xl text-portfolio-text-secondary mb-6">
      <span className={isDarkMode ? '' : 'text-gray-700'}>I like to </span>
      <span className="text-portfolio-accent font-medium">{currentText}</span>
      <span
        className={`text-portfolio-accent ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
      >
        |
      </span>
    </div>
  );
}

// Experience timeline component
function ExperienceTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 },
    );

    const items = timelineRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-portfolio-accent opacity-30"></div>

      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          data-index={index}
          className={`relative flex flex-col lg:flex-row items-start lg:items-center mb-16 lg:mb-20 transition-all duration-1000 transform ${
            visibleItems.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-portfolio-bg z-10 shadow-lg"></div>

          <div
            className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:order-2"}`}
          >
            <div
              className={`max-w-lg ${index % 2 === 0 ? "lg:ml-auto lg:text-right" : "lg:mr-auto lg:text-left"}`}
            >
              <div className="bg-portfolio-accent-dark rounded-xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4">
                  <div
                    className={`flex items-center gap-4`}
                  >
              <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-lg bg-portfolio-accent-dark">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
                    <div
                      className={
                        "lg:text-left"
                      }
                    >
                      <h3 className="text-xl lg:text-2xl font-semibold text-white">
                        {experience.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-portfolio-accent font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-portfolio-text-secondary">
                      {experience.period}
                    </span>
                    <span className="hidden sm:block text-portfolio-text-secondary">•</span>
                    <span className="text-portfolio-text-secondary">
                      {experience.location}
                    </span>
                  </div>


                                    <p className="text-portfolio-text-secondary leading-relaxed text-left">
                    {experience.description}
                  </p>


                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}
                  >
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-accent text-sm rounded-full hover:bg-portfolio-accent/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`hidden lg:block flex-1 ${index % 2 === 0 ? "lg:order-2" : ""}`}
          ></div>
        </div>
      ))}
    </div>
  );
}

// Multi-card project display
function ProjectDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProjects = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visibleCount =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  const [visibleProjects, setVisibleProjects] = useState(getVisibleProjects());

  useEffect(() => {
    const handleResize = () => {
      setVisibleProjects(getVisibleProjects());
    };

    window.addEventListener("resize", handleResize);
    setVisibleProjects(getVisibleProjects());

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={`${project.id}-${currentIndex}-${index}`}
              className="bg-portfolio-accent-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-secondary leading-relaxed text-sm lg:text-base">
                  {project.description}
                </p>

                <div className="flex justify-center gap-3 flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2">
                      <img
                        src={technologies.find((t) => t.name === tech)?.icon}
                        alt={tech}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-portfolio-text-secondary">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                {project.id !== 3 && (<a
               
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="block w-full text-center px-6 py-3 bg-portfolio-accent text-black text-base font-medium rounded-lg hover:bg-opacity-90 transition-all hover:scale-105"
             >
               Learn More
             </a>
           )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
{/* Navigation arrows */}
<button
 onClick={prevProjects}
 className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 bg-portfolio-accent/5 hover:bg-portfolio-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
>
 <svg
   className="w-6 h-6"
   fill="none"
   stroke="currentColor"
   viewBox="0 0 24 24"
 >
   <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     d="M15 19l-7-7 7-7"
   />
 </svg>
</button>
<button
 onClick={nextProjects}
 className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 bg-portfolio-accent/5 hover:bg-portfolio-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
>
 <svg
   className="w-6 h-6"
   fill="none"
   stroke="currentColor"
   viewBox="0 0 24 24"
 >
   <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     d="M9 5l7 7-7 7"
   />
 </svg>
</button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
              index === currentIndex
                ? "bg-portfolio-accent shadow-lg"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const showAllProjects = () => {
    alert("All projects view - implement as needed!");
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-portfolio-bg text-portfolio-text-primary" : "bg-white text-gray-900"} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-portfolio-accent/20 ${
          isDarkMode ? "bg-portfolio-bg/90" : "bg-white/90"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4">
          <div className="flex items-center">
            <h1 className="text-xl lg:text-2xl font-bold text-portfolio-accent hover:scale-105 transition-transform cursor-pointer">
              Humza Inam
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection(heroRef)}
              className={`px-4 py-2 text-lg font-medium rounded-lg transition-all hover:scale-105 ${
                activeSection === "hero"
                  ? "bg-portfolio-accent text-black"
                  : "hover:bg-portfolio-accent/10"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className={`px-4 py-2 text-lg font-medium rounded-lg transition-all hover:scale-105 ${
                activeSection === "about"
                  ? "bg-portfolio-accent text-black"
                  : "hover:bg-portfolio-accent/20"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className={`px-4 py-2 text-lg font-medium rounded-lg transition-all hover:scale-105 ${
                activeSection === "experience"
                  ? "bg-portfolio-accent text-black"
                  : "hover:bg-portfolio-accent/20"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className={`px-4 py-2 text-lg font-medium rounded-lg transition-all hover:scale-105 ${
                activeSection === "projects"
                  ? "bg-portfolio-accent text-black"
                  : "hover:bg-portfolio-accent/20"
              }`}
            >
              Projects
            </button>
          </div>

          {/* Social icons and theme toggle */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.email}
              className="p-2 rounded-lg hover:bg-portfolio-accent/20 transition-all hover:scale-110"
              title="Email"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-portfolio-accent/20 transition-all hover:scale-110"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-portfolio-accent/20 transition-all hover:scale-110"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-portfolio-accent/20 transition-all hover:scale-110"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-16 w-full">
          <div className="flex-1 space-y-8 lg:space-y-12 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-1 lg:space-y-2">
                <h2 className="text-xl lg:text-2xl font-normal animate-fade-in">
                  Hey there. I'm Humza.
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-portfolio-accent animate-slide-up">
                  SOFTWARE DEVELOPER
                </h1>
              </div>

              <AnimatedTypingText isDarkMode={isDarkMode} />

              <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed animate-fade-in-delay ${isDarkMode ? 'text-portfolio-text-secondary' : 'text-gray-700'}`}>
              I enjoy tinkering with software and hardware, experimenting with new tech, and working on projects that drive real change to help people. I’m curious about the socio-economic and psychological impacts of tech. Looking for full-time software opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-20">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-portfolio-accent text-portfolio-bg text-lg lg:text-2xl font-medium rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 animate-bounce-subtle"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[460px] lg:h-[460px] flex-shrink-0 animate-float">
            <img
              src={portfolioImages.profile}
              alt="Humza Inam"
              className="w-full h-full object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

{/* About Me Section */}
<section
  ref={aboutRef}
  id="about"
  className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16"
>
  <div className="max-w-7xl mx-auto w-full">
    <div className="space-y-8 lg:space-y-12 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal animate-fade-in">
          About Me
        </h2>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-4 lg:w-6 h-0.5 bg-portfolio-accent animate-width-expand"></div>
          <span className="text-sm lg:text-lg text-portfolio-accent">
            Who Am I?
          </span>
        </div>

        {/* Logos Below "Who Am I?" */}
        <div className="flex justify-center items-center gap-6 mt-4 animate-fade-in">
          <img
            src="/Developer_Portfolio/assets/SOTI-Logo.png"
            alt="SOTI Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
            />
          <img
            src="/Developer_Portfolio/assets/Lassonde-Logo.jpg"
            alt="Lassonde Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
            />
        </div>
      </div>

      <p
        className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto animate-fade-in-delay ${
          isDarkMode ? "text-portfolio-text-secondary" : "text-gray-700"
        }`}
      >
        I’m a Computer Engineering graduate from York University with a
        passion for building software that makes a real difference in people’s
        lives. My recent work centers on full-stack web development using
        Next.js, React, TailwindCSS, backed by a foundation in Java, C, and
        Python.

        Through internships and extracurricular projects, I’ve contributed
        to production-grade applications, including SafeScript, an
        award-winning VS Code extension recognized for its commercial
        potential.

        I thrive at the intersection of software engineering, web
        development, and product-focused innovation. If you’re looking for a
        developer who combines technical depth with creativity and a keen
        curiosity about technology’s broader impact, I’d love to connect.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:items-center lg:justify-center lg:gap-8 gap-4 lg:flex-wrap animate-stagger-in">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 lg:gap-2 hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <span className="text-xs lg:text-base text-portfolio-text-secondary">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full mt-36">
          <div className="text-center space-y-8 lg:space-y-12 mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal">
              Experience
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 lg:w-6 h-0.5 bg-portfolio-accent animate-width-expand"></div>
              <span className="text-sm lg:text-lg text-portfolio-accent">
                My Journey
              </span>
            </div>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8 lg:space-y-12 mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal">
              Projects
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 lg:w-6 h-0.5 bg-portfolio-accent animate-width-expand"></div>
              <span className="text-sm lg:text-lg text-portfolio-accent">
                What I've Built
              </span>
            </div>
          </div>

          <ProjectDisplay />
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`px-4 sm:px-8 lg:px-16 py-8 lg:py-12 ${
          isDarkMode ? "bg-portfolio-accent-dark" : "bg-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className={`text-lg lg:text-xl ${isDarkMode ? 'text-portfolio-text-secondary' : 'text-gray-700'}`}>
            Built with{" "}
            <span className="text-portfolio-accent font-medium">React</span> +{" "}
            <span className="text-portfolio-accent font-medium">Vite</span>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes width-expand {
          from {
            width: 0;
          }
          to {
            width: 1.5rem;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.1s both;
        }

        .animate-width-expand {
          animation: width-expand 0.8s ease-out 0.5s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-stagger-in > * {
          animation: fade-in 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}
