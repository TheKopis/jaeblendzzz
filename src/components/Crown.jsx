// Line-art crown — the Royale mark. Inherits color from CSS via
// currentColor; the gem stays barber-red. `solid` for tiny sizes.
export default function Crown({ className = '', solid = false }) {
  return (
    <svg
      className={`crown ${className}`}
      viewBox="0 0 120 96"
      fill="none"
      aria-hidden="true"
    >
      {solid ? (
        <>
          <path
            d="M24 62 L17 28 L42 48 L60 14 L78 48 L103 28 L96 62 Z"
            fill="currentColor"
          />
          <circle cx="17" cy="21" r="5" fill="currentColor" />
          <circle cx="60" cy="8" r="5.5" fill="currentColor" />
          <circle cx="103" cy="21" r="5" fill="currentColor" />
          <rect x="21" y="66" width="78" height="14" rx="3" fill="currentColor" />
        </>
      ) : (
        <>
          <path
            d="M24 62 L17 28 L42 48 L60 14 L78 48 L103 28 L96 62 Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="17" cy="21" r="4.5" stroke="currentColor" strokeWidth="3" />
          <circle cx="60" cy="8" r="5" stroke="currentColor" strokeWidth="3" />
          <circle cx="103" cy="21" r="4.5" stroke="currentColor" strokeWidth="3" />
          <rect x="21" y="66" width="78" height="14" rx="3" stroke="currentColor" strokeWidth="3" />
          <circle className="crown-gem" cx="60" cy="73" r="3.6" fill="#cf2e1f" />
        </>
      )}
    </svg>
  )
}
