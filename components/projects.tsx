import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects({ limit }: { limit?: number }) {
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
        // github: "#",
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
      technologies: [
        "React.js",
        "Redux",
        "API Gateway",
        "PRD",
        "JWT",
        "Cypress",
      ],
      links: {
        demo: "#",
        // github: "#",
      },
    },
    {
      title: "Agentic Suite",
      role: "AI Platform Developer",
      description:
        "Platform enabling businesses to deploy autonomous AI agents that function like reliable team members, improving operational efficiency and scalability.",
      achievements: [
        "Backed by Nexyom Consultancy Services Pvt. Ltd. (founded 2016)",
        "Global presence in India (Noida) and USA (Folsom)",
        "Services include Generative AI, NLP, Computer Vision, BI & Data, Robotics",
        "Engagements: $25–49/hr, >$100k minimum; focus on mid‑market (65%)",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "LLMs",
        "Vector Databases",
      ],
      links: {
        demo: "https://nexyom-agentic-suite-lzlq.vercel.app/",
        // github: "#",
      },
    },
    {
      title: "Musafir Travel",
      role: "Product & Website Developer",
      description:
        "Travel service based in Himachal Pradesh focused on safe, comfortable and memorable journeys. Tailored itineraries, expert planning, and always-on support to make every trip hassle-free.",
      achievements: [
        "Tailored trip planning with 24/7 assistance",
        "Comprehensive services: local taxis, transfers, outstation trips, sightseeing tours",
        "Affordable, punctual and comfortable rides across Himachal",
      ],
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      links: {
        demo: "http://musafirtravel.in/",
        // github: "#",
      },
    },

    {
      title: "Hops N Chops",
      role: "Website Developer",
      description:
        "Restaurant profile for a multi-cuisine venue in Shyam Nagar, Dharamshala (Kangra). Showcases menu highlights, services, contact and ratings to improve discoverability and conversions.",
      achievements: [
        "Supports breakfast, lunch, dinner with delivery, takeaway and indoor seating",
        "Rich menu categories: Indian, Chinese, Thai, Pizza & Pasta and more",
        "Surfaced customer reviews and 4.1 average ratings for dining and delivery",
      ],
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      links: {
        demo: "https://www.hopsnchops.com/",
        // github: "#",
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
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Redux",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
      ],
      links: {
        demo: "#",
        // github: "#",
      },
    },
    {
      title: "WoodTech Website",
      role: "Frontend Developer",
      description:
        "Built from scratch a fully dynamic website with responsive layout and smooth user experience.",
      achievements: [
        "SEO-friendly architecture using SSR/SSG for fast first-load and easy crawling",
        "Implemented metadata (title, meta description, OpenGraph, Twitter Cards, structured data)",
        "Performance-optimized with image optimization, lazy loading, and smart bundle splitting",
        "Mobile-first responsive design across devices",
        "Accessibility-aware development with semantic HTML and ARIA roles",
        "Deployed on Vercel with edge caching for low latency and high availability",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      links: {
        demo: "https://www.woodtechfurniture.in/",
        // github: "#",
      },
    },
    {
      title: "Gladhand Technology Website",
      role: "Frontend Developer",
      description:
        "Custom-built dynamic site with clean, modular architecture and resume-friendly SEO setup.",
      achievements: [
        "SEO-optimized with custom title/meta, OpenGraph/Twitter previews, and schema markup",
        "Fast & performant via image optimization, code splitting, and lazy loading",
        "Mobile-first responsive design for smooth performance across devices",
        "Accessibility-focused using semantic HTML and ARIA roles",
        "High availability on Vercel leveraging global CDN caching and edge functions",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      links: {
        demo: "https://www.gladhandtechnologies.com/",
        // github: "#",
      },
    },
  ];

  const visibleProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my expertise in building scalable, high-performance web
            applications
          </p>
          {typeof limit === "number" && (
            <div className="mt-6">
              <Button
                asChild
                variant="ghost"
                className="inline-flex items-center"
              >
                <Link href="/projects">
                  View all projects
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {project.role}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  {/* <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Bottom CTA removed in favor of header link for a cleaner look when limited */}
      </div>
    </section>
  );
}
