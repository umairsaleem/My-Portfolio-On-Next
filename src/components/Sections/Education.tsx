'use client'

import { motion } from 'framer-motion'
import { Section } from '../common/Section'
import { education } from '@/data/education'

const Education = () => (
  <Section id="education" title="Education" className="bg-gray-100">
    <div className="max-w-3xl mx-auto space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={edu.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-2">{edu.title}</h3>
          <p className="text-gray-700">{edu.institution}</p>
          <p className="text-gray-600 text-sm">{edu.period}</p>
        </motion.div>
      ))}
    </div>
  </Section>
)

export default Education 