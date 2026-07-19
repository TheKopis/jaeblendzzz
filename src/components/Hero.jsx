export default function Hero({ onBook }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-meta small-caps">
        <span>Est. 2016</span>
        <span>Barbershop — Stockton, California</span>
        <span>Tue–Sat, 10–6</span>
      </div>

      <div className="container hero-mid">
        <p className="hero-statement">
          Appointment-only barbershop by Jasiel Escalera. Fades, tapers,
          straight-razor work.
        </p>

        <div className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          <span>Booking open — appointments through Square</span>
        </div>

        <div className="hero-actions">
          <button type="button" className="pill" onClick={onBook}>
            Book an appointment
          </button>
          <a href="tel:+12094061061" className="tlink">
            (209) 406-1061
          </a>
        </div>
      </div>

      <div className="hero-word-wrap" aria-hidden="true">
        <div className="hero-word">Jaeblendzzz</div>
      </div>
    </section>
  )
}
