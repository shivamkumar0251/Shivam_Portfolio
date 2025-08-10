import Header from "@/components/header"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

