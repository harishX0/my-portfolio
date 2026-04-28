import { ArrowUpRight, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

function ProjectsSection({ projects }) {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-200 pt-14 sm:pt-16"
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
            className="group overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="h-48 overflow-hidden border-b border-slate-200">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4 p-5">
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600"
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
                  className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition-colors duration-300 hover:text-teal-800"
                >
                  Live
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-slate-900"
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
