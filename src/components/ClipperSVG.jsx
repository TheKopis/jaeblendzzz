import { useId } from 'react'

// Hand-drawn barber clippers. `buzzing` makes the blade vibrate.
export default function ClipperSVG({ className = '', buzzing = false }) {
  const uid = useId()
  const metalId = `clipper-metal-${uid}`
  const bodyId = `clipper-body-${uid}`

  return (
    <svg
      className={`clipper ${buzzing ? 'buzzing' : ''} ${className}`}
      viewBox="0 0 120 250"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={metalId} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#6f6f76" />
          <stop offset="0.35" stopColor="#e9e9ee" />
          <stop offset="0.55" stopColor="#9a9aa2" />
          <stop offset="0.8" stopColor="#d5d5db" />
          <stop offset="1" stopColor="#75757c" />
        </linearGradient>
        <linearGradient id={bodyId} x1="0" y1="0" x2="1" y2="0.25">
          <stop offset="0" stopColor="#232329" />
          <stop offset="0.45" stopColor="#101013" />
          <stop offset="0.55" stopColor="#1c1c21" />
          <stop offset="1" stopColor="#0a0a0b" />
        </linearGradient>
      </defs>

      {/* blade group — this part buzzes */}
      <g className="clipper-blade">
        {/* comb teeth */}
        {[20, 31, 42, 53, 64, 75, 86, 97].map((x) => (
          <rect key={x} x={x} y="4" width="6" height="16" rx="2" fill={`url(#${metalId})`} />
        ))}
        {/* blade plate */}
        <rect x="12" y="16" width="96" height="22" rx="4" fill={`url(#${metalId})`} />
        <rect x="12" y="25" width="96" height="1.6" fill="#0a0a0b" opacity="0.5" />
      </g>

      {/* body */}
      <path
        d="M24 38 H96 C102 38 106 42 106 48 L100 214 C100 230 88 242 72 242 H48 C32 242 20 230 20 214 L14 48 C14 42 18 38 24 38 Z"
        fill={`url(#${bodyId})`}
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.2"
      />
      {/* side highlight */}
      <path
        d="M26 44 L30 220"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* power switch */}
      <rect x="52" y="72" width="16" height="36" rx="8" fill={`url(#${metalId})`} />
      <circle cx="60" cy="82" r="3" fill="#0a0a0b" opacity="0.6" />
      {/* grip ridges */}
      {[168, 180, 192, 204].map((y) => (
        <line
          key={y}
          x1="38"
          y1={y}
          x2="82"
          y2={y}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      {/* engraved monogram */}
      <text
        x="60"
        y="146"
        textAnchor="middle"
        fontFamily="Cinzel, Georgia, serif"
        fontWeight="700"
        fontSize="17"
        fill="rgba(255,255,255,0.22)"
        letterSpacing="2"
      >
        JB
      </text>
    </svg>
  )
}
