import SectionTitle from "./SectionTitle";

function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-200 pt-14 sm:pt-16"
    >
      <SectionTitle
        eyebrow="Skills"
        title="Core technologies I use to build production-ready products."
        description="A practical stack shaped by real project delivery, from interface development to backend architecture."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <article
            key={skill.name}
            className="group border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-slate-900">
              {skill.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{skill.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
