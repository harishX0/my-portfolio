import { ArrowRight, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import heroGraphicPng from "../assets/my_img.png";
import heroGraphicWebp from "../assets/my_img.webp";
import heroGraphicAvif from "../assets/my_img.avif";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const GitHubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.19-3.35-1.19-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.21-.25-4.53-1.11-4.53-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.32 4.69-4.54 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M6.94 6.5A2.06 2.06 0 1 1 6.93 2.4a2.06 2.06 0 0 1 .01 4.1ZM4.5 21.6h4.88V8.4H4.5v13.2Zm7.46-13.2H16v1.8h.06c.57-1.08 1.96-2.22 4.04-2.22 4.32 0 5.12 2.7 5.12 6.2v7.42h-4.88v-6.58c0-1.57-.03-3.6-2.33-3.6-2.33 0-2.69 1.72-2.69 3.49v6.69H11.96V8.4Z"
    />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M20.52 3.48A11.8 11.8 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.6A11.93 11.93 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.48-8.52ZM12 21.85c-1.86 0-3.68-.5-5.26-1.45l-.38-.22-3.67.95.98-3.57-.25-.37A9.83 9.83 0 0 1 2.16 12C2.16 6.56 6.56 2.16 12 2.16c2.63 0 5.1 1.02 6.96 2.88A9.77 9.77 0 0 1 21.84 12c0 5.44-4.4 9.85-9.84 9.85Zm5.39-7.36c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.49-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.94-2.24-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
    />
  </svg>
);

const IconForSocial = ({ name }) => {
  const key = String(name || "").toLowerCase();
  if (key.includes("github")) return <GitHubIcon />;
  if (key.includes("linkedin")) return <LinkedInIcon />;
  if (key.includes("whatsapp")) return <WhatsAppIcon />;
  if (key.includes("email") || key.includes("mail")) return <Mail size={18} />;
  return <ArrowRight size={18} />;
};

function HeroSection({ profile, socialLinks = [] }) {
  return (
    <header id="home" data-reveal className="reveal-section pb-12 pt-6 sm:pb-16 sm:pt-8">
      <nav className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-white/10 bg-slate-950/45 px-3 py-3 shadow-soft backdrop-blur-xl sm:gap-4 sm:px-6">
        <a
          href="https://harishx0.vercel.app/"
          className="min-w-0 max-w-[62vw] truncate font-display text-base font-semibold tracking-tight text-white sm:max-w-none sm:text-lg"
        >
          {profile.name}
        </a>
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
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

          <div className="flex items-center gap-1.5 md:hidden">
            {socialLinks.map((link) => {
              const isEmail = String(link?.url || "").startsWith("mailto:");
              return (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-100 transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/[0.08] hover:text-cyan-200 sm:h-9 sm:w-9"
                >
                  <IconForSocial name={link?.name} />
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="mt-8 grid items-center gap-10 sm:mt-10 lg:grid-cols-[1.1fr_0.9fr]">
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

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/18 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(34,211,238,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/22 sm:w-auto"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-slate-950/42 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-200 sm:w-auto"
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
              <picture>
                <source srcSet={heroGraphicAvif} type="image/avif" />
                <source srcSet={heroGraphicWebp} type="image/webp" />
                <img
                  src={heroGraphicPng}
                  alt={`${profile.name} portrait`}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[20rem] w-full rounded-md object-cover object-top transition-transform duration-700 group-hover:scale-[1.025] sm:h-[24rem]"
                />
              </picture>
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
