import { Medal, Trophy } from "lucide-react";
import SectionTitle from "./SectionTitle";

function AcademicAchievementsSection({ achievements }) {
  return (
    <section
      id="achievements"
      data-reveal
      className="reveal-section scroll-mt-24 border-t border-white/10 pt-14 sm:pt-16"
    >
      <SectionTitle
        eyebrow="Academic Achievements"
        title="Sports and service milestones from Chandigarh University."
        description="Highlights from my campus journey, including athletics and volunteer contributions."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item, index) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/42 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-slate-900/65 hover:shadow-[0_30px_80px_-42px_rgba(34,211,238,0.45)]"
          >
            <div className="h-52 overflow-hidden border-b border-white/10">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">
                {index === 0 ? <Trophy size={14} /> : <Medal size={14} />}
                {item.event}
              </p>
              <h3 className="font-display text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AcademicAchievementsSection;
