import { SQUARE_BOOKING_URL } from '../config'

export default function Booking({ onBook }) {
  return (
    <section id="book" className="cta-band">
      <div className="container cta-inner">
        <h2 className="display cta-title">
          Get in the
          <br />
          chair.
        </h2>

        <div className="cta-row">
          <button type="button" className="pill pill-paper" onClick={onBook}>
            Book an appointment
          </button>
          <span className="cta-alt">
            or{' '}
            <a href={SQUARE_BOOKING_URL} target="_blank" rel="noreferrer">
              open the booking page
            </a>
          </span>
        </div>

        <p className="cta-fine">
          Real-time availability through Square. Takes about a minute.
        </p>
      </div>
    </section>
  )
}
