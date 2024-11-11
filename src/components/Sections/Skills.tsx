'use client'

import { Section } from '../common/Section'
import SkillCard from '../cards/SkillCard'
import { skills } from '@/data/skills'

const Skills = () => (
  <Section id="skills" title="Skills" className="bg-gray-100">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </Section>
)

export default Skills 