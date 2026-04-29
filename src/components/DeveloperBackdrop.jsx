const codeStreams = [
  ["MONGO", "EXPRESS", "REACT", "NODE", "API", "JWT", "CRUD"],
  ["FULL STACK", "UI STATE", "MERN DEV", "DEPLOY", "RESPONSIVE", "GITHUB"],
];

const stackWords = [
  { label: "MERN", className: "developer-word-one" },
  { label: "API", className: "developer-word-two" },
  { label: "UI", className: "developer-word-three" },
];

function DeveloperBackdrop() {
  return (
    <div aria-hidden="true" className="portfolio-background">
      <div className="developer-night-surface" />
      <div className="developer-vignette" />
      <div className="developer-grid-plane" />
      <div className="developer-grid-fade" />
      <div className="developer-aurora developer-aurora-one" />
      <div className="developer-aurora developer-aurora-two" />
      <div className="developer-aurora developer-aurora-three" />
      <div className="developer-orb developer-orb-one" />
      <div className="developer-orb developer-orb-two" />
      <div className="developer-orb developer-orb-three" />
      <div className="developer-glass-panel developer-glass-panel-one" />
      <div className="developer-glass-panel developer-glass-panel-two" />
      <div className="developer-scanlines" />

      {stackWords.map((word) => (
        <div key={word.label} className={`developer-word ${word.className}`}>
          {word.label}
        </div>
      ))}

      <div className="developer-stream developer-stream-one">
        {codeStreams[0].map((item) => (
          <span key={item} className="developer-stream-pill">
            {item}
          </span>
        ))}
      </div>

      <div className="developer-stream developer-stream-two">
        {codeStreams[1].map((item) => (
          <span key={item} className="developer-stream-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DeveloperBackdrop;
