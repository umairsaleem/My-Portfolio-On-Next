import Link from 'next/link'

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <Link href="https://github.com/yourusername" target="_blank" className="hover:text-gray-200">
        GitHub
      </Link>
      <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-gray-200">
        LinkedIn
      </Link>
    </div>
  )
} 