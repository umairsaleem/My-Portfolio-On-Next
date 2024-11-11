'use client'

import { Inter } from 'next/font/google'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiAngular, SiNodedotjs, SiExpress, SiNestjs, SiPostgresql, SiMongodb, SiElasticsearch, SiDocker, SiHeroku, SiGit, SiJenkins, SiSequelize, SiAmazon } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface Skill {
  name: string;
  icon: React.ElementType;
  
}

export function BlockPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills: Skill[] = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Angular", icon: SiAngular },
    { name: "React Native", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Nest.js", icon: SiNestjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Elasticsearch", icon: SiElasticsearch },
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Heroku", icon: SiHeroku },
    { name: "Git", icon: SiGit },
    { name: "Jenkins", icon: SiJenkins },
    { name: "Sequelize", icon: SiSequelize },
    { name: "TypeORM", icon: TbBrandTypescript },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
      <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-10 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-blue-600"
            >
              MU
            </motion.div>
            <ul className="flex space-x-1 md:space-x-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm md:text-base px-2 py-1 rounded-full transition duration-300 ${activeSection === item.toLowerCase()
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100'
                      }`}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/placeholder.svg"
                alt="Muhammad Umair"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg mx-auto"
              />
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              Muhammad Umair
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl mb-8"
            >
              Lead Software Engineer
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://linkedin.com/in/umairsaleem33"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
              >
                <FaLinkedin className="inline mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/mumairsaleem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
              >
                <FaGithub className="inline mr-2" /> GitHub
              </a>
              <a
                href="mailto:umairsaleem33@hotmail.com"
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
              >
                <FaEnvelope className="inline mr-2" /> Contact
              </a>
              <a
                href="/Muhammad_Umair_Resume.pdf"
                download
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
              >
                <FaFileDownload className="inline mr-2" /> Download Resume
              </a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-8 text-center text-gray-800"
            >
              About Me
            </motion.h2>
            <motion.p
              {...fadeInUp}
              className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
            >
              Results-driven Lead Software Engineer with 6+ years of experience in web and mobile application development across healthcare, technology, animal care, and rental marketplaces. Skilled in leveraging cutting-edge technologies such as JavaScript, React, Angular, Node.js, and Elasticsearch to deliver scalable solutions that exceed client expectations. Experienced in leading development teams, optimizing performance, and implementing complex business logic. Passionate about building intuitive user interfaces and crafting robust software solutions.
            </motion.p>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center text-gray-800"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-4 text-center transform hover:scale-105 transition duration-300 flex flex-col items-center justify-center"
                >
                  <skill.icon className="text-4xl mb-2 text-blue-600" aria-hidden="true" />
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center text-gray-800"
            >
              Work Experience
            </motion.h2>
            <div className="space-y-12">
              {[
                {
                  title: "Lead Software Engineer",
                  company: "Folio3 Software",
                  period: "January 2024 - Present",
                  responsibilities: [
                    "Manage the full development lifecycle from requirements gathering to deployment.",
                    "Lead a development team of 8 engineers, conducting code reviews and mentoring junior developers.",
                    "Architected and developed microservices-based applications using the MERN/MEAN stack.",
                    "Spearheaded the adoption of Elasticsearch, reducing search times by 50%."
                  ]
                },
                {
                  title: "Senior Software Engineer",
                  company: "Folio3 Software",
                  period: "September 2018 - January 2024",
                  responsibilities: [
                    "Designed and developed web and mobile applications using React, React Native, and Angular.",
                    "Led the implementation of state management tools to improve application maintainability.",
                    "Built RESTful APIs and database schemas with PostgreSQL and NoSQL databases.",
                    "Utilized version control (Git) and continuous integration tools for streamlined development processes."
                  ]
                }
              ].map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2 text-blue-600">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.company} | {job.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-6">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Guest View Guide",
                  description: "Developed a wall-mounted digital display solution for short-term rental operators, providing guests with information about the property and local attractions.",
                  technologies: "React, Node.js, AWS, PostgreSQL"
                },
                {
                  title: "Ecodocs",
                  description: "Built a cloud-based Computerized Maintenance Management System (CMMS) for organizing, tracking, and scheduling maintenance tasks, leading to increased workforce agility.",
                  technologies: "React, React Native, AWS Cloud, Elasticsearch"
                },
                {
                  title: "Truecare",
                  description: "Contributed to the development of a healthcare management system, incorporating advanced data analytics for patient care insights.",
                  technologies: "React, AWS, PostgreSQL"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-blue-200">Technologies: {project.technologies}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education & Certifications
            </motion.h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  title: "Bachelor of Science in Computer Science",
                  institution: "NED University of Engineering & Technology",
                  period: "2015 - 2018"
                },
                {
                  title: "AWS Certified Developer - Associate",
                  institution: "Amazon Web Services",
                  period: "Planned completion: Dec 2024"
                },
                {
                  title: "JavaScript Algorithms and Data Structures",
                  institution: "FreeCodeCamp",
                  period: "Completed"
                }
              ].map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                  <p className="text-gray-600">{edu.institution} | {edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-8 text-gray-800"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              {...fadeInUp}
              className="text-xl mb-8 text-gray-600"
            >
              I'm always open to new opportunities and collaborations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center space-x-6"
            >
              <a href="https://linkedin.com/in/umairsaleem33" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
                <FaLinkedin size={32} />
              </a>
              <a href="https://github.com/mumairsaleem" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                <FaGithub size={32} />
              </a>
              <a href="mailto:umairsaleem33@hotmail.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                <FaEnvelope size={32} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Muhammad Umair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}