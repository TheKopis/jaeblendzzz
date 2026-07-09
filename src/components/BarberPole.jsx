// Monochrome barber pole — the stripes scroll inside a fixed cylinder.
export default function BarberPole({ className = '' }) {
  return (
    <div className={`barber-pole ${className}`} aria-hidden="true">
      <span className="barber-pole-cap" />
      <span className="barber-pole-glass">
        <span className="barber-pole-stripes" />
        <span className="barber-pole-shine" />
      </span>
      <span className="barber-pole-cap" />
    </div>
  )
}
