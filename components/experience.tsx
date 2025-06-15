import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Engineer (Frontend)",
      company: "Nexyom Consultancy Service Private Limited",
      location: "Noida, India",
      period: "June 2024 — Present",
      achievements: [
        "Architected and led frontend development of an Intelligent Document Processing (IDP) system using React.js and Redux, enhancing document processing efficiency by 90%",
        "Integrated AWS Lambda and API Gateway for secure and scalable backend communication, reducing API latency by 20%",
        "Resolved Cypress testing failures in GitHub Actions CI/CD pipelines, ensuring reliable automated testing for frontend modules",
        "Documented API integration processes on Confluence, improving team collaboration and knowledge sharing",
      ],
      technologies: ["React.js", "Redux", "AWS Lambda", "API Gateway", "Cypress", "CI/CD"],
    },
    {
      title: "Associate Software Engineer (Frontend)",
      company: "Nexyom Consultancy Service Private Limited",
      location: "Noida, India",
      period: "Jan 2024 — May 2024",
      achievements: [
        "Developed core frontend modules using React.js and Tailwind CSS, improving UI/UX by 30% and user engagement",
        "Mentored junior developers through code reviews, ensuring high-quality code standards using ESLint",
        "Designed and automated API testing processes using Jest and Cypress, enhancing system reliability",
      ],
      technologies: ["React.js", "Tailwind CSS", "Jest", "Cypress", "ESLint"],
    },
    {
      title: "Intern (Frontend Development)",
      company: "Nexyom Consultancy Service Private Limited",
      location: "Noida, India",
      period: "June 2023 — Dec 2023",
      achievements: [
        "Built and deployed two dynamic, responsive websites from scratch using React.js and Tailwind CSS",
        "Developed Nexyom - Scalable company website enabling content updates via JSON",
        "Created DocScience - AI-powered intelligent document processing platform",
        "Gained hands-on experience in Git, component-based architecture, and agile development workflows",
      ],
      technologies: ["React.js", "Tailwind CSS", "Git", "JSON", "Agile"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in frontend development and software engineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
