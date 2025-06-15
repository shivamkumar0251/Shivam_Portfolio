import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Users, Award } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "2+ Years Experience",
      description: "Building high-performance web applications",
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: "90% Efficiency Gains",
      description: "Through AWS-integrated solutions",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Team Leadership",
      description: "Leading frontend architecture for enterprise systems",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-600" />,
      title: "30% Performance",
      description: "UI performance optimization achievements",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Frontend Engineer dedicated to creating exceptional user experiences through clean code and
            innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            As a Frontend Engineer with 2 years of expertise, I specialize in building high-performance web applications
            using modern technologies like React.js and Next.js. My experience includes architecting AWS-integrated
            solutions that have delivered significant operational efficiency gains and leading frontend development for
            enterprise-level systems.
          </p>
          <br />
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm passionate about optimizing user interfaces, implementing best practices in code quality, and mentoring
            junior developers. My goal is to create seamless, accessible, and performant web experiences that make a
            real impact.
          </p>
        </div>
      </div>
    </section>
  )
}
