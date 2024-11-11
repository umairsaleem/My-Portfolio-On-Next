'use client'

import { motion } from 'framer-motion'
import { Experience } from '@/types'

interface ExperienceCardProps {
  job: Experience
  index: number
}

const ExperienceCard = ({ job, index }: ExperienceCardProps) => (
  <motion.div
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
)

export default ExperienceCard 