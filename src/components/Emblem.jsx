// The house crest — circular emblem with the crown at center.
export default function Emblem({ className = '' }) {
  return (
    <svg className={`emblem ${className}`} viewBox="0 0 240 240" fill="none" aria-hidden="true">
      {/* rings */}
      <circle cx="120" cy="120" r="116" stroke="var(--gold-soft)" strokeWidth="1" />
      <circle cx="120" cy="120" r="110" stroke="var(--gold)" strokeWidth="1.5" />
      <circle cx="120" cy="120" r="74" stroke="var(--gold-soft)" strokeWidth="1" />

      <defs>
        <path id="arc-top" d="M 28,120 A 92,92 0 1 1 212,120" />
        <path id="arc-bottom" d="M 32,120 A 88,88 0 0 0 208,120" />
      </defs>

      {/* circular lettering */}
      <text
        fontFamily="Marcellus, serif"
        fontSize="19"
        letterSpacing="6"
        fill="var(--gold)"
      >
        <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
          JAEBLENDZZZ
        </textPath>
      </text>
      <text
        fontFamily="Marcellus, serif"
        fontSize="12.5"
        letterSpacing="4"
        fill="var(--dim)"
      >
        <textPath href="#arc-bottom" startOffset="50%" textAnchor="middle">
          STOCKTON ◆ CALIFORNIA
        </textPath>
      </text>

      {/* side diamonds */}
      <path d="M 24 120 l 4 -4 l 4 4 l -4 4 Z" fill="var(--gold)" />
      <path d="M 208 120 l 4 -4 l 4 4 l -4 4 Z" fill="var(--gold)" />

      {/* crown at center */}
      <g transform="translate(78, 74) scale(0.7)" stroke="var(--ivory)" strokeWidth="3">
        <path d="M24 62 L17 28 L42 48 L60 14 L78 48 L103 28 L96 62 Z" strokeLinejoin="round" />
        <circle cx="17" cy="21" r="4.5" />
        <circle cx="60" cy="8" r="5" />
        <circle cx="103" cy="21" r="4.5" />
        <rect x="21" y="66" width="78" height="14" rx="3" />
        <circle cx="60" cy="73" r="3.6" fill="var(--gem)" stroke="none" />
      </g>

      {/* est. */}
      <text
        x="120"
        y="164"
        textAnchor="middle"
        fontFamily="Marcellus, serif"
        fontSize="13"
        letterSpacing="3"
        fill="var(--ivory)"
      >
        EST. 2016
      </text>
    </svg>
  )
}
