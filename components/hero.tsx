"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Frontend Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hello, I'm <span className="text-blue-600 dark:text-blue-400">Shivam Kumar</span>
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 h-12">
                I am a{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Frontend Engineer with 2 years of expertise in building high-performance web applications using React.js
                and Next.js. Specialized in AWS-integrated solutions that delivered 90% operational efficiency gains.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>(+91) 7668955567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Noida, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>shivamkumar02517@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
              <div className="text-8xl font-bold text-white">SK</div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
