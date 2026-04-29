function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;
