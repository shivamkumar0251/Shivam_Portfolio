import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Intelligent Document Processing System",
      role: "Frontend Engineer",
      description:
        "Led frontend architecture for a smart document processing system, enabling document upload, key–value extraction, and dynamic field customisation. Developed a 5–step custom training pipeline for document models.",
      achievements: [
        "Improved processing efficiency by 90%",
        "Integrated Google Drive, Zoho, Microsoft, and Dropbox for seamless file import/export",
        "Reduced manual processing time by 80%",
      ],
      technologies: [
        "React.js",
        "Redux",
        "AWS Lambda",
        "API Gateway",
        "Cypress",
        "Jest",
        "Proxy server",
        "CI/CD",
        "Docker",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "DocScience IDP Hub",
      role: "Frontend Developer",
      description:
        "Built secure user management modules with role-based access control using JWT, enhancing platform security. Developed comprehensive features for organization management and analytics.",
      achievements: [
        "Enhanced platform security with JWT authentication",
        "Improved user experience by 25%",
        "Built comprehensive analytics and notification systems",
      ],
      technologies: ["React.js", "Redux", "API Gateway", "PRD", "JWT", "Cypress"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Study Notion: Ed-Tech Platform",
      role: "Frontend Developer",
      description:
        "Developed a responsive e-learning platform with OTP-based signup, payment integration, and Cloudinary for media backups. Built REST APIs using MVC architecture.",
      achievements: [
        "Seamless frontend-backend communication",
        "Enhanced system usability",
        "Integrated payment gateway and media management",
      ],
      technologies: ["React.js", "Tailwind CSS", "Redux", "Node.js", "MongoDB", "Express", "JWT"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my expertise in building scalable, high-performance web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {project.role}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
