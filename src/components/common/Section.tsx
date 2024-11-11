import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  title: string
  id: string
  className?: string
}

export const Section = ({ children, title, id, className = "bg-white" }: SectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-12 text-center text-gray-800"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  )
} 