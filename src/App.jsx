import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import DeveloperBackdrop from "./components/DeveloperBackdrop";
import HeroSection from "./components/HeroSection";
import {
  academicAchievements,
  profile,
  projects,
  skills,
  socialLinks,
} from "./data/portfolioData";

const AboutSection = lazy(() => import("./components/AboutSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const AcademicAchievementsSection = lazy(() => import("./components/AcademicAchievementsSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

function DeferredSection({ children, minHeight = 260, rootMargin = "600px 0px" }) {
  const [shouldRender, setShouldRender] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (shouldRender) return;
    const node = placeholderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  if (!shouldRender) {
    return <div ref={placeholderRef} style={{ minHeight }} aria-hidden="true" />;
  }

  return children;
}

function App() {
  useEffect(() => {
    const root = document.documentElement;
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

    const observed = new WeakSet();
    const getRevealNodes = () =>
      Array.from(document.querySelectorAll("[data-reveal]")).filter((node) => !observed.has(node));

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

      const observeReveals = () => {
        const nodes = getRevealNodes();
        nodes.forEach((node) => {
          observed.add(node);
          observer.observe(node);
        });
      };

      observeReveals();

      const mutationObserver = new MutationObserver(observeReveals);
      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        mutationObserver.disconnect();
        observer.disconnect();
        window.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }

    const markAllVisible = () => {
      getRevealNodes().forEach((node) => {
        observed.add(node);
        node.classList.add("is-visible");
      });
    };

    markAllVisible();
    const mutationObserver = new MutationObserver(markAllVisible);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const sectionFallback = useMemo(
    () => <div className="h-10 w-full" aria-hidden="true" />,
    [],
  );

  return (
    <div className="portfolio-shell min-h-screen bg-[#020617] text-slate-100">
      <DeveloperBackdrop />
      <div className="scroll-progress-bar" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <HeroSection profile={profile} socialLinks={socialLinks} />
        <main className="space-y-14 pb-10 sm:space-y-20">
          <DeferredSection minHeight={360}>
            <Suspense fallback={sectionFallback}>
              <AboutSection about={profile.about} />
            </Suspense>
          </DeferredSection>
          <DeferredSection minHeight={420}>
            <Suspense fallback={sectionFallback}>
              <SkillsSection skills={skills} />
            </Suspense>
          </DeferredSection>
          <DeferredSection minHeight={420}>
            <Suspense fallback={sectionFallback}>
              <AcademicAchievementsSection achievements={academicAchievements} />
            </Suspense>
          </DeferredSection>
          <DeferredSection minHeight={520}>
            <Suspense fallback={sectionFallback}>
              <ProjectsSection projects={projects} />
            </Suspense>
          </DeferredSection>
          <DeferredSection minHeight={420}>
            <Suspense fallback={sectionFallback}>
              <ContactSection
                email={profile.email}
                phone={profile.phone}
                socialLinks={socialLinks}
              />
            </Suspense>
          </DeferredSection>
        </main>
      </div>
    </div>
  );
}

export default App;
