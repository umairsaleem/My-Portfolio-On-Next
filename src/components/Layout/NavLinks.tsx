'use client'

import { motion } from 'framer-motion'

interface NavLinksProps {
  activeSection: string
}

interface NavLinksProps {
  activeSection: string;
}

const NavLinks = ({ activeSection }: NavLinksProps) => {
  return (
    <div className="flex gap-4">
      {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`capitalize ${
            activeSection === section ? 'text-blue-600' : 'text-gray-600'
          }`}
        >
          {section}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
