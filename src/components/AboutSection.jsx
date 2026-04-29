import SectionTitle from "./SectionTitle";

const highlights = [
  { label: "Focus", value: "Product-first engineering" },
  { label: "Workflow", value: "Research -> Design -> Build -> Iterate" },
  { label: "Collaboration", value: "Clear communication and delivery ownership" },
];

function AboutSection({ about }) {
  return (
    <section
      id="about"
      data-reveal
      className="reveal-section scroll-mt-24 border-t border-white/10 pt-14 sm:pt-16"
    >
      <SectionTitle
        eyebrow="About"
        title="I build with detail, speed, and long-term maintainability."
        description={about}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.label}
            className="rounded-lg border border-white/10 bg-slate-950/42 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-slate-900/60 hover:shadow-[0_24px_60px_-34px_rgba(34,211,238,0.45)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
