import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaWordpress,
  FaArrowDown,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiNodedotjs, SiLaravel } from "react-icons/si";
import Portfolio from "../components/Portfolio";
import "./Home.css";

const skills: string[] = [
  "Full-Stack Developer",
  "React.js Enthusiast",
  "Node.js Developer",
  "MongoDB Expert",
  "WordPress",
];

const Home: React.FC = () => {
  const [skillIndex, setSkillIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");

  // Scroll to Portfolio
  const handleScrollClick = (): void => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Typing effect
  useEffect(() => {
    const currentText = skills[skillIndex];
    let i = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(currentText.slice(0, i + 1));
      i++;
      if (i === currentText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setSkillIndex((prev) => (prev + 1) % skills.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [skillIndex]);

  return (
    <section>
      <section className="home-section gradient-bg" id="home">
        {/* Stars and floating shapes */}
        <div className="stars"></div>
        <div className="floating-shapes">
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape square"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-name">Azib Tanveer</h1>
          <p className="hero-title">{displayedText}</p>

          <div className="hero-buttons">
            <motion.button
              className="scroll-down"
              onClick={handleScrollClick}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Portfolio <FaArrowDown style={{ marginLeft: "8px" }} />
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="floating-tech-left">
          <FaReact size={40} className="tech-icon" />
          <FaWordpress size={40} className="tech-icon" />
          <SiLaravel size={40} className="tech-icon" />
          <SiMysql size={40} className="tech-icon" />
          <SiMongodb size={40} className="tech-icon" />
          <SiNodedotjs size={40} className="tech-icon" />
        </div>

        <div className="hero-icons-mobile">
          <FaReact size={20} className="tech-icon-mobile" />
          <FaWordpress size={20} className="tech-icon-mobile" />
          <SiLaravel size={20} className="tech-icon-mobile" />
          <SiMysql size={20} className="tech-icon-mobile" />
          <SiMongodb size={20} className="tech-icon-mobile" />
          <SiNodedotjs size={20} className="tech-icon-mobile" />
        </div>

        {/* Social Icons */}
        <div className="floating-social">
          <a
            href="https://github.com/azib98"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="Github"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/azib-tanveer-7405a61b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="Linkedin"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:azib2468@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="Email"
            aria-label="Send Email"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="/fullstack.pdf"
            download="Azib_Tanveer_CV.pdf"
            className="social-icon"
            target="_blank"
            title="CV"
          >
            <FaFileDownload size={30} />
          </a>
        </div>
        {/* Mobile Social Icons */}
        <div className="floating-social-mobile">
          <a
            href="https://github.com/azib98"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-mobile"
            title="Github"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/azib-tanveer-7405a61b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-mobile"
            title="Linkedin"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:azib2468@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-mobile"
            title="Email"
            aria-label="Send Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="/fullstack.pdf"
            download="Azib_Tanveer_CV.pdf"
            className="social-icon-mobile"
            target="_blank"
            title="CV"
          >
            <FaFileDownload size={20} />
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio"></section>
    </section>
  );
};

export default Home;
