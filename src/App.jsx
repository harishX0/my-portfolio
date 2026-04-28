import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import {
  profile,
  projects,
  skills,
  socialLinks,
} from "./data/portfolioData";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle_at_top,_#dbeafe_0%,_#f8fafc_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <HeroSection profile={profile} />
        <main className="space-y-14 pb-10 sm:space-y-20">
          <AboutSection about={profile.about} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ContactSection email={profile.email} socialLinks={socialLinks} />
        </main>
      </div>
    </div>
  );
}

export default App;
