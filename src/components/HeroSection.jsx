import { ArrowRight, Mail } from "lucide-react";
import heroGraphic from "../assets/hero.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function HeroSection({ profile }) {
  return (
    <header id="home" className="pb-12 pt-6 sm:pb-16 sm:pt-8">
      <nav className="flex items-center justify-between border border-slate-200 bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:px-6">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-tight text-slate-900 sm:text-lg"
        >
          {profile.name}
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-teal-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
            {profile.role}
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building modern web experiences that feel fast.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-in-up [animation-delay:120ms]">
          <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-teal-200/70 via-cyan-100/60 to-amber-100/60 blur-2xl" />
          <div className="border border-slate-200 bg-white p-6 shadow-soft">
            <img
              src={heroGraphic}
              alt="Creative portfolio visual"
              className="mx-auto h-56 w-auto object-contain"
            />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Experience
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">6 months</p>
              </div>
              <div className="border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Projects
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">3+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
