'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SocialLinks } from '@/components/common/SocialLinks'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/placeholder.svg"
            alt="Muhammad Umair"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg mx-auto"
          />
        </motion.div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Muhammad Umair
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl mb-8"
        >
          Lead Software Engineer
        </motion.h2>
        <SocialLinks />
      </div>
    </section>
  )
}

export default Hero 