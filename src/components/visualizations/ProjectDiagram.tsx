export function ProjectDiagram({ type }: { type: "cyan" | "violet" | "blue" }) {
  const labels =
    type === "cyan"
      ? ["Checkout", "Gateway", "Webhook", "State"]
      : type === "violet"
        ? ["Onboarding", "Product", "API", "Marketplace"]
        : ["Mobile", "Terminal", "API", "Legacy"];
  return (
    <div className={`diagram diagram-${type}`} aria-hidden="true">
      <svg viewBox="0 0 620 220" role="img">
        <path
          d="M92 110H222M274 110H404M456 110H548"
          className="diagram-line"
        />
        <path
          d="m214 104 10 6-10 6M396 104l10 6-10 6M540 104l10 6-10 6"
          className="diagram-line"
        />
        {labels.map((label, index) => (
          <g key={label} transform={`translate(${20 + index * 152} 78)`}>
            <rect width="110" height="64" rx="5" className="diagram-box" />
            <text x="55" y="37" textAnchor="middle">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
