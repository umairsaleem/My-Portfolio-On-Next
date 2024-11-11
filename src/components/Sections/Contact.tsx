'use client'

import { motion } from 'framer-motion'
import { Section } from '../common/Section'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => (
  <Section id="contact" title="Get In Touch">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <p className="text-lg text-gray-700 mb-8">
        I'm always open to discussing new projects, opportunities, and collaborations.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:umairsaleem33@hotmail.com"
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          <FaEnvelope className="mr-2" />
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/umairsaleem33"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          <FaLinkedin className="mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </motion.div>
  </Section>
)

export default Contact 