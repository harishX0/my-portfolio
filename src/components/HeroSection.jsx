import { ArrowRight, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import heroGraphic from "../assets/my_img.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function HeroSection({ profile }) {
  return (
    <header id="home" data-reveal className="reveal-section pb-12 pt-6 sm:pb-16 sm:pt-8">
      <nav className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/45 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-tight text-white sm:text-lg"
        >
          {profile.name}
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
            {profile.role}
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building modern web experiences that feel fast.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
              <GraduationCap size={16} className="text-cyan-300" />
              MCA Graduate
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
              <MapPin size={16} className="text-cyan-300" />
              Chandigarh University
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-cyan-400/25 bg-cyan-400/10 px-3 py-2">
              <Sparkles size={16} className="text-cyan-200" />
              Open to Opportunities
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/18 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(34,211,238,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/22"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-slate-950/42 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-200"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-[22.5rem] animate-fade-in-up [animation-delay:120ms]">
          <div className="absolute -inset-5 -z-10 bg-gradient-to-br from-cyan-500/32 via-blue-500/18 to-fuchsia-500/18 blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-95" />
          <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/55 shadow-[0_28px_90px_-46px_rgba(8,145,178,0.65)] backdrop-blur-xl transition-all duration-700 group-hover:-translate-y-3 group-hover:border-cyan-300/25 group-hover:shadow-[0_36px_110px_-44px_rgba(34,211,238,0.58)]">
            <div className="relative overflow-hidden border-b border-white/10 bg-slate-900/70 p-3">
              <img
                src={heroGraphic}
                alt={`${profile.name} portrait`}
                className="h-[24rem] w-full rounded-md object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
              <div className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-3 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-300/25 group-hover:bg-cyan-400/10">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Experience
                </p>
                <p className="mt-1 text-lg font-semibold text-white">6 Months</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-3 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-fuchsia-300/25 group-hover:bg-fuchsia-400/10">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Projects
                </p>
                <p className="mt-1 text-lg font-semibold text-white">5+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
