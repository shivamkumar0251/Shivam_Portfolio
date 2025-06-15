import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      skills: [
        "React.js",
        "Next.js",
        "Redux",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Material UI",
        "SCSS",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MongoDB", "Express", "Fast API", "API Documentation", "PRD", "CI/CD"],
    },
    {
      title: "Testing",
      skills: [
        "Jest",
        "Cypress",
        "AIO Testing",
        "Manual Testing",
        "Automated Testing",
        "Functional Testing",
        "Performance Testing",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS (Lambda, API Gateway, EC2, S3)", "Docker", "Git", "Postman", "Figma", "JIRA", "APIDOG"],
    },
    {
      title: "Integration Expertise",
      skills: ["REST API Integration", "JWT Authentication", "Proxy Server", "Payment Gateway (Stripe)"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 dark:text-blue-400">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
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
