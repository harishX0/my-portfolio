import SectionTitle from "./SectionTitle";

const highlights = [
  { label: "Focus", value: "Product-first engineering" },
  { label: "Workflow", value: "Research -> Design -> Build -> Iterate" },
  { label: "Collaboration", value: "Clear communication and delivery ownership" },
];

function AboutSection({ about }) {
  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-200 pt-14 sm:pt-16">
      <SectionTitle
        eyebrow="About"
        title="I build with detail, speed, and long-term maintainability."
        description={about}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.label}
            className="border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
