'use client'

import { Section } from '../common/Section'
import ExperienceCard from '../cards/ExperienceCard'
import { experience } from '@/data/experience'

const Experience = () => (
  <Section id="experience" title="Work Experience" className="bg-blue-50">
    <div className="space-y-12">
      {experience.map((job, index) => (
        <ExperienceCard key={job.title} job={job} index={index} />
      ))}
    </div>
  </Section>
)

export default Experience 