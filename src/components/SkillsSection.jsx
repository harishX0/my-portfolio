import {
  Atom,
  Braces,
  Code2,
  Database,
  GitFork,
  Palette,
  Route,
  Server,
  TestTube2,
  Wind,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const skillIcons = {
  HTML5: Braces,
  CSS3: Palette,
  JavaScript: Code2,
  React: Atom,
  "Tailwind CSS": Wind,
  "Node.js": Server,
  "Express.js": Route,
  MongoDB: Database,
  "Git & GitHub": GitFork,
  Postman: TestTube2,
};

function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      data-reveal
      className="reveal-section scroll-mt-24 border-t border-white/10 pt-14 sm:pt-16"
    >
      <SectionTitle
        eyebrow="Skills"
        title="Core technologies I use to build production-ready products."
        description="A practical stack shaped by real project delivery, from interface development to backend architecture."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skillIcons[skill.name] ?? Code2;
          return (
            <article
              key={skill.name}
              className="group rounded-lg border border-white/10 bg-slate-950/42 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-slate-900/60 hover:shadow-[0_26px_70px_-40px_rgba(34,211,238,0.48)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/12">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200">
                  {skill.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{skill.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
