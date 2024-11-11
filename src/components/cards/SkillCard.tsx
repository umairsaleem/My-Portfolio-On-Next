'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
  index: number
}

const SkillCard = ({ skill, index }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-md p-4 text-center transform hover:scale-105 transition duration-300 flex flex-col items-center justify-center"
  >
    <skill.icon className="text-4xl mb-2 text-blue-600" aria-hidden="true" />
    <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
  </motion.div>
)

export default SkillCard 