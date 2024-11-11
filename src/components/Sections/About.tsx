'use client'

import { motion } from 'framer-motion'
import { Section } from '../common/Section'

const About = () => (
  <Section id="about" title="About Me">
    <motion.p
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
    >
      Results-driven Lead Software Engineer with 6+ years of experience in web and mobile application development across healthcare, technology, animal care, and rental marketplaces. Skilled in leveraging cutting-edge technologies such as JavaScript, React, Angular, Node.js, and Elasticsearch to deliver scalable solutions that exceed client expectations. Experienced in leading development teams, optimizing performance, and implementing complex business logic. Passionate about building intuitive user interfaces and crafting robust software solutions.
    </motion.p>
  </Section>
)

export default About 