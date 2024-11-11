'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import NavLinks from './NavLinks'

const Header = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
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
          <NavLinks activeSection={activeSection} />
        </nav>
      </div>
    </header>
  )
}

export default Header 