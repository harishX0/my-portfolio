import { useEffect } from "react";
import AcademicAchievementsSection from "./components/AcademicAchievementsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DeveloperBackdrop from "./components/DeveloperBackdrop";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import {
  academicAchievements,
  profile,
  projects,
  skills,
  socialLinks,
} from "./data/portfolioData";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const reveals = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--scroll-depth", `${window.scrollY}px`);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    if (!prefersReducedMotion.matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -12% 0px",
        },
      );

      reveals.forEach((item) => observer.observe(item));

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }

    reveals.forEach((item) => item.classList.add("is-visible"));

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <div className="portfolio-shell min-h-screen bg-[#020617] text-slate-100">
      <DeveloperBackdrop />
      <div className="scroll-progress-bar" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <HeroSection profile={profile} />
        <main className="space-y-14 pb-10 sm:space-y-20">
          <AboutSection about={profile.about} />
          <SkillsSection skills={skills} />
          <AcademicAchievementsSection achievements={academicAchievements} />
          <ProjectsSection projects={projects} />
          <ContactSection
            email={profile.email}
            phone={profile.phone}
            socialLinks={socialLinks}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
