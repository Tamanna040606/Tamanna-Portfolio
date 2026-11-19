import { useState } from "react";
import "./App.css";
import ParticleBackground from "./components/ParticleBackground";
import CursorGlow from "./components/CursorGlow";
import ScrollReveal from "./components/ScrollReveal";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";


import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Sparkles,
  Layers3,
  BrainCircuit,
  GraduationCap,
  Heart,
  Menu,
  X,
  Terminal,
  ExternalLink,
  Globe,
  Database,
  Cpu,
  Palette,
  Phone,
  MessageCircle,
  Plane,
  Film,
} from "lucide-react";

import "./App.css";

import heroImg from "./assets/tamanna photo.jpeg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleTilt = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * -12;
  const rotateY = ((x / rect.width) - 0.5) * 12;

  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-6px)
  `;
};

const resetTilt = (e) => {
  e.currentTarget.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
};

  // PERSONAL LINKS
  const githubLink = "https://github.com/Tamanna040606";

  const linkedinLink =
    "https://www.linkedin.com/in/tamanna-kumari-0b6bab438";

  const email = "tamanna040606@gmail.com";

  const phone = "+919353660134";

  // NAVIGATION
  const navigation = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Favorites",
    "Contact",
  ];

  // SKILLS
  const skills = [
    {
      title: "Programming",
      icon: <Code2 size={22} />,
      tags: ["JavaScript", "Python", "Java", "C++", "HTML", "CSS", "SQL"],
    },
    {
      title: "Development",
      icon: <Layers3 size={22} />,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    },
    {
      title: "AI & Intelligence",
      icon: <BrainCircuit size={22} />,
      tags: [
        "Machine Learning",
        "Artificial Intelligence",
        "Data Analysis",
        "Neural Networks",
      ],
    },
    {
      title: "Tools",
      icon: <Terminal size={22} />,
      tags: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    },
  ];

  // PROJECTS
  const projects = [
    {
      number: "01",
      title: "Technika Course Central",
      category: "WEB DEVELOPMENT",
      description:
        "A course management platform designed to make learning resources and educational content easier to explore and access.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://technika-course-central-iyzp.vercel.app",
      icon: <GraduationCap size={24} />,
    },
    {
      number: "02",
      title: "KittyPop",
      category: "CREATIVE WEB PROJECT",
      description:
        "A creative and interactive web experience built with a focus on engaging visuals and an enjoyable user interface.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://kittypop-swart.vercel.app/",
      icon: <Heart size={24} />,
    },
    {
      number: "03",
      title: "CineBook Genre API",
      category: "BACKEND DEVELOPMENT",
      description:
        "A REST API for managing and exploring movie genres, with endpoints for retrieving and adding genre information.",
      tech: ["Node.js", "Express.js", "REST API"],
      link: "https://cinebook-tamanna-api.onrender.com/api/genres",
      icon: <Film size={24} />,
    },
  ];

  // EDUCATION
  const education = [
    {
      year: "2024 – 2027",
      degree: "Bachelor of Computer Applications",
      institution: "Aditya Institute of Management and Studies",
      location: "Bengaluru, Karnataka",
      description: "Specialization in Artificial Intelligence and Machine Learning.",
    },
    {
      year: "2022 – 2024",
      degree: "Pre-University Course",
      institution: "GRV PU College",
      location: "Mekri Circle",
      description: "Completed Pre-University education.",
    },
    {
      year: "2022",
      degree: "Secondary School Education",
      institution: "Sri Basaveshwara English High School",
      location: "Karnataka",
      description: "Completed 10th standard.",
    },
  ];

  // FAVORITES
  const favorites = [
    {
      number: "01",
      title: "Drawing",
      description: "Expressing creativity through art and imagination.",
      icon: <Palette size={25} />,
    },
    {
      number: "02",
      title: "Technology",
      description: "Exploring new technologies and learning new skills.",
      icon: <Cpu size={25} />,
    },
    {
      number: "03",
      title: "Travelling",
      description: "Discovering new places and experiences.",
      icon: <Plane size={25} />,
    },
    {
      number: "04",
      title: "Web Series",
      description: "Enjoying stories, entertainment and creativity.",
      icon: <Film size={25} />,
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <LoadingScreen />
      <ParticleBackground />
       <CursorGlow />
       <ScrollReveal />
       <BackToTop />

      {/* BACKGROUND EFFECTS */}

      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>
      <div className="background-glow glow-three"></div>


      {/* NAVBAR */}

      <nav className="navbar">

        <a href="#home" className="logo" onClick={closeMenu}>
          Tamanna<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>

        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>


      {/* HERO SECTION */}

      <section className="hero section-container" id="home">

        <div className="hero-content">

          <div className="availability">
            <span className="availability-dot"></span>
            OPEN TO LEARNING & OPPORTUNITIES
          </div>

          <p className="hero-intro">
            HELLO, I'M
          </p>

          <h1>
            Tamanna
            <span>Kumari.</span>
          </h1>

          <h2>
            Aspiring Software Developer
            <span>& AI/ML Enthusiast.</span>
          </h2>

          <p className="hero-description">
            I love turning ideas into digital experiences.
            Exploring software development, artificial intelligence
            and creative technologies, one project at a time.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>

          </div>


          {/* SOCIAL LINKS */}

          <div className="hero-socials">

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Code2 size={19} />
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <span className="linkedin-mark">in</span>
            </a>

            <a
              href={`mailto:${email}`}
              aria-label="Email"
              title="Email"
            >
              <Mail size={19} />
            </a>

          </div>


          {/* HERO STATS */}

          <div className="hero-stats">

            <div>
              <h3>03</h3>
              <span>Deployed Projects</span>
            </div>

            <div>
              <h3>AIML</h3>
              <span>Specialization</span>
            </div>

            <div>
              <h3>2027</h3>
              <span>Graduation</span>
            </div>

          </div>

        </div>


        {/* 3D PHOTO */}

        <div className="hero-visual">

          <div className="photo-orbit orbit-one"></div>
          <div className="photo-orbit orbit-two"></div>

          <span className="floating-star star-one">✦</span>
          <span className="floating-star star-two">✧</span>
<div
  className="photo-card"
  onMouseMove={handleTilt}
  onMouseLeave={resetTilt}
>

            <div className="photo-card-inner">

              <div className="photo-top">
                <span>PORTFOLIO / 2026</span>
                <Sparkles size={17} />
              </div>

              <img
                src={heroImg}
                alt="Tamanna Kumari"
              />

              <div className="photo-bottom">

                <div>
                  <span>CREATIVE MIND</span>
                  <h3>Tamanna Kumari</h3>
                </div>

                <span className="photo-number">01</span>

              </div>

            </div>

          </div>


          <div className="floating-card floating-top">

            <BrainCircuit size={23} />

            <div>
              <strong>AI / ML</strong>
              <span>Exploring Intelligence</span>
            </div>

          </div>


          <div className="floating-card floating-bottom">

            <Terminal size={23} />

            <div>
              <strong>Developer</strong>
              <span>Building the Future</span>
            </div>

          </div>

        </div>


        <div className="scroll-indicator">
          SCROLL TO EXPLORE
          <span></span>
        </div>

      </section>


      {/* ABOUT SECTION */}

      <section className="section-block section-container" id="about">

        <div className="section-heading">

          <span>01 / ABOUT ME</span>

          <h2>
            A curious mind.
            <span>A creative soul.</span>
          </h2>

          <p>A little introduction beyond my code.</p>

        </div>


        <div className="about-grid">

          <div className="about-card about-main">

            <div className="section-icon">
              <Sparkles size={24} />
            </div>

            <h3>Who am I?</h3>

            <p>
              I'm Tamanna Kumari, a BCA student specializing in
              Artificial Intelligence and Machine Learning at
              Aditya Institute of Management and Studies.
            </p>

            <p>
              I enjoy building web applications, experimenting
              with technologies, solving programming problems
              and learning new intelligent systems.
            </p>

            <p>
              My ambition is to grow into a skilled software
              engineer and create technology that makes a difference.
            </p>

          </div>


          <div className="about-side">

            <div className="about-card mini-card">
              <Code2 size={22} />
              <h3>Developer</h3>
              <p>Building meaningful digital experiences.</p>
            </div>

            <div className="about-card mini-card">
              <BrainCircuit size={22} />
              <h3>AI Explorer</h3>
              <p>Learning intelligent technologies.</p>
            </div>

            <div className="about-card mini-card">
              <MapPin size={22} />
              <h3>Bengaluru, India</h3>
              <p>Learning, creating and growing.</p>
            </div>

          </div>

        </div>

      </section>


      {/* SKILLS SECTION */}

      <section className="section-block section-container" id="skills">

        <div className="section-heading">

          <span>02 / MY TOOLKIT</span>

          <h2>
            Technologies I
            <span>work with.</span>
          </h2>

          <p>My current technical toolkit and areas of exploration.</p>

        </div>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={skill.title}>

              <div className="skill-card-top">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span>
                  0{index + 1}
                </span>

              </div>

              <h3>{skill.title}</h3>

              <div className="skill-tags">

                {skill.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* PROJECTS SECTION */}

      <section className="section-block section-container" id="projects">

        <div className="section-heading">

          <span>03 / FEATURED PROJECTS</span>

          <h2>
            Things I've
            <span>brought to life.</span>
          </h2>

          <p>A collection of projects with live deployments.</p>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <div
  className="project-card"
  key={project.number}
  onMouseMove={handleTilt}
  onMouseLeave={resetTilt}
>

              <div className="project-top">

                <span>PROJECT / {project.number}</span>

                <div className="project-icon">
                  {project.icon}
                </div>

              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>


              <div className="project-tech">

                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}

              </div>


              <div className="project-footer">

                <div className="project-status">
                  <span></span>
                  LIVE PROJECT
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                  <ExternalLink size={15} />
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* EDUCATION SECTION */}

      <section className="section-block section-container" id="education">

        <div className="section-heading">

          <span>04 / MY EDUCATION</span>

          <h2>
            The journey
            <span>so far.</span>
          </h2>

          <p>Every step is part of the learning journey.</p>

        </div>


        <div className="timeline">

          {education.map((item, index) => (

            <div className="timeline-item" key={item.degree}>

              <div className="timeline-marker">
                <GraduationCap size={21} />
              </div>

              <div className="timeline-content">

                <span>{item.year}</span>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p>{item.location}</p>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* FAVORITES SECTION */}

      <section className="section-block section-container" id="favorites">

        <div className="section-heading">

          <span>05 / BEYOND THE CODE</span>

          <h2>
            A few things
            <span>I love.</span>
          </h2>

          <p>Because creativity exists beyond technology.</p>

        </div>


        <div className="favorites-grid">

          {favorites.map((favorite) => (

            <div className="favorite-card" key={favorite.number}>

              <span className="favorite-number">
                {favorite.number}
              </span>

              <div className="favorite-icon">
                {favorite.icon}
              </div>

              <h3>{favorite.title}</h3>

              <p>{favorite.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* CONTACT SECTION */}

      <section className="section-block section-container" id="contact">

        <div className="contact-card">

          <div className="contact-decoration">
            ✦
          </div>

          <span>06 / LET'S CONNECT</span>

          <h2>
            Have an idea?
            <span>Let's create something.</span>
          </h2>

          <p>
            I'm always excited to connect with people,
            explore opportunities, collaborate on projects
            and learn something new.
          </p>

          <a
            href={`mailto:${email}`}
            className="primary-button"
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </a>


          {/* CONTACT DETAILS */}

          <div className="contact-details">

            <a href={`mailto:${email}`}>
              <Mail size={18} />
              {email}
            </a>

            <a href={`tel:${phone}`}>
              <Phone size={18} />
              +91 9353660134
            </a>

            <a
              href="https://wa.me/919353660134"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkedin-mark">in</span>
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}

       <footer>
        <footer className="footer">
  <div className="footer-main">
    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        Tamanna<span>.</span>
      </a>

      <p>
        Designed & built with creativity by Tamanna Kumari.
      </p>

      <span className="footer-status">
        <span className="status-dot"></span>
        Available for opportunities
      </span>
    </div>

    <div className="footer-socials">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <Code2 size={19} />
      </a>

      <a
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <span className="linkedin-mark">in</span>
      </a>

      <a href={`mailto:${email}`} aria-label="Email" title="Email">
        <Mail size={19} />
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <span>© 2026 TAMANNA KUMARI</span>
    <a href="#home">
      BACK TO TOP ↑
    </a>
    <span>CRAFTED WITH CREATIVITY ✦</span>
  </div>
</footer>
       </footer>
    </div>
  );
}

export default App;