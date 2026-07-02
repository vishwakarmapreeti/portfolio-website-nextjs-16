import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectSection"
import TechStack from "@/components/TechStack"
import WorkExperience from "@/components/WorkExperience"

const Home = () => {
  return <>
    <main className="max-w-7xl mx-auto px-6 lg:px-8">
      <HeroSection />
      <WorkExperience />
         <TechStack/>
           <ProjectsSection/>
     
    <ContactSection/>
    </main>
  </>
}

export default Home