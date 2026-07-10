import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectSection"
import TechStack from "@/components/TechStack"
import WorkExperience from "@/components/WorkExperience"

const Home = () => {
  return <>
    <main>
      <HeroSection />
      <WorkExperience />
         <TechStack/>
        <div className="py-16">
  <ProjectsSection />
</div>
     
    <ContactSection/>
    </main>
  </>
}

export default Home