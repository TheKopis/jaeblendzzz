import useReveal from '../useReveal'
import { INSTAGRAM_URL, SQUARE_BOOKING_URL } from '../config'

export default function Booking({ onBook }) {
  const ref = useReveal()

  return (
    <section id="book" className="marble">
      <div className="container booking-inner reveal" ref={ref}>
        <div className="booking-info">
          <span className="eyebrow">Lock It In</span>
          <h2 className="display metal-text" style={{ marginTop: '1rem' }}>
            Book Your Cut
          </h2>
          <p>
            Booking runs through Square — pick your service, pick your time,
            and you&apos;re locked in. Confirmation and reminders come straight
            to your phone.
          </p>

          <div className="booking-lines">
            <div className="booking-line">
              <span className="k">Location</span>
              <span className="v">
                <a
                  href="https://maps.google.com/?q=6360+Pacific+Ave+Suite+2,+Stockton,+CA+95207"
                  target="_blank"
                  rel="noreferrer"
                >
                  6360 Pacific Ave, Suite 2 · Stockton, CA 95207
                </a>
              </span>
            </div>
            <div className="booking-line">
              <span className="k">Hours</span>
              <span className="v">Tue – Sat · 10am – 6pm</span>
            </div>
            <div className="booking-line">
              <span className="k">Phone</span>
              <span className="v">
                <a href="tel:+12094061061">(209) 406-1061</a>
              </span>
            </div>
            <div className="booking-line">
              <span className="k">Instagram</span>
              <span className="v">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  @jaeblendzzz
                </a>
              </span>
            </div>
            <div className="booking-line">
              <span className="k">House Rules</span>
              <span className="v">
                5-minute grace period, then it&apos;s a no-show. Cancel 24 hours
                ahead — late cancels carry a $45 fee, no-shows charged in full.
              </span>
            </div>
            <div className="booking-line">
              <span className="k">Payment</span>
              <span className="v">
                All major cards, Apple Pay, Google Pay &amp; Cash App.
              </span>
            </div>
          </div>
        </div>

        <div className="slab booking-panel">
          <span className="booking-panel-mark display metal-text" aria-hidden="true">
            JB
          </span>
          <h3 className="display">Ready when you are</h3>
          <p>
            Real-time availability. Takes about a minute — no account needed.
          </p>
          <button type="button" className="btn btn-solid booking-panel-btn" onClick={onBook}>
            Book an Appointment
          </button>
          <a
            className="booking-panel-alt"
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            or open the booking page in a new tab ↗
          </a>
          <span className="booking-panel-powered">Secure booking powered by Square</span>
        </div>
      </div>
    </section>
  )
}
