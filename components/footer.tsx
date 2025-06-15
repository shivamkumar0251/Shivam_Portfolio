import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shivam Kumar</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Frontend Engineer passionate about creating exceptional user experiences through clean code and innovative
              solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:shivamkumar02517@gmail.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>(+91) 7668955567</li>
              <li>shivamkumar02517@gmail.com</li>
              <li>Noida, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 Shivam Kumar. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
