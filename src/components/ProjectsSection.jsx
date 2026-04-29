import { ArrowUpRight, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

function ProjectsSection({ projects }) {
  return (
    <section
      id="projects"
      data-reveal
      className="reveal-section scroll-mt-24 border-t border-white/10 pt-14 sm:pt-16"
    >
      <SectionTitle
        eyebrow="Projects"
        title="Selected work built for speed, usability, and scale."
        description="Each project below highlights UI polish, thoughtful architecture, and reliable implementation."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/42 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-slate-900/65 hover:shadow-[0_30px_80px_-42px_rgba(34,211,238,0.45)]"
          >
            <div className="h-48 overflow-hidden border-b border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="space-y-4 p-5">
              <h3 className="font-display text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:translate-x-1 hover:text-cyan-200"
                >
                  Live
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Code
                  <Code2 size={15} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
