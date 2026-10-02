// The app's ScalesLogo (core/design_system/widgets/display/scales_logo.dart) at rest:
// a 300x212 drawing with gold-stroke scales and white pans reading "Law" and "Bid".
export function ScalesLogo({ width = 40, className }: { width?: number; className?: string }) {
  const stroke = "#d4af5a";
  return (
    <svg
      viewBox="0 0 300 212"
      width={width}
      height={(width * 212) / 300}
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={stroke}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="150" cy="16" r="5" />
      <path d="M150 21V192M112 192H188M122 203H178M50 44H250" />
      <path d="M50 44L12 118M50 44L88 118M250 44L212 118M250 44L288 118" />
      <path d="M12 118H88A38 34 0 0 1 12 118Z" fill="#ffffff" strokeWidth="1.6" />
      <path d="M212 118H288A38 34 0 0 1 212 118Z" fill="#ffffff" strokeWidth="1.6" />
      <circle cx="150" cy="44" r="6" fill={stroke} stroke="none" />
      <g
        fill="#0a1a3f"
        stroke="none"
        fontSize="19"
        fontWeight="600"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
      >
        <text x="50" y="142">
          Law
        </text>
        <text x="250" y="142">
          Bid
        </text>
      </g>
    </svg>
  );
}
