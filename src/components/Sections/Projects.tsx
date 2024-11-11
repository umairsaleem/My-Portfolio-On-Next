'use client'

import { motion } from 'framer-motion'
import { Section } from '../common/Section'
import { projects } from '@/data/projects'

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
        >
          <h3 className="text-xl font-bold mb-3 text-blue-600">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="text-sm text-gray-600">
            <strong>Technologies:</strong> {project.technologies}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
)

export default Projects 