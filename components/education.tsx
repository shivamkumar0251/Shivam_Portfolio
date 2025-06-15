import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
  const achievements = [
    "Automated workflows, improving efficiency by 90% & reducing manual processing time by 80%",
    "Reduced content update time by 50% using JSON-based content management",
    "Ensured security best practices, enhanced platform reliability",
    "Documented APIs using ApiDog, improving team efficiency & collaboration",
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Achievements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic foundation and professional accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology in Electronics and Communication Engineering
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Raj Kumar Goel Institute Of Technology</p>
                <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">July 2019 — June 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Ghaziabad, Uttar Pradesh</span>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">CGPA: 8.29</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Key Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-green-100 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
