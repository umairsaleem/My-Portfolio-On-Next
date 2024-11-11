'use client'

import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Experience from '@/components/Sections/Experience'
import Projects from '@/components/Sections/Projects'
import Education from '@/components/Sections/Education'
import Contact from '@/components/Sections/Contact'
import Footer from '@/components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export function BlockPage() {
  return (
    <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 