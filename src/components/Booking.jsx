import useReveal from '../useReveal'
import { INSTAGRAM_URL, SQUARE_BOOKING_URL } from '../config'

const FACTS = [
  {
    k: 'Location',
    v: (
      <a
        href="https://maps.google.com/?q=6360+Pacific+Ave+Suite+2,+Stockton,+CA+95207"
        target="_blank"
        rel="noreferrer"
      >
        6360 Pacific Ave, Suite 2, Stockton, CA
      </a>
    ),
  },
  { k: 'Hours', v: 'Tue – Sat, 10am – 6pm' },
  { k: 'Phone', v: <a href="tel:+12094061061">(209) 406-1061</a> },
  {
    k: 'Instagram',
    v: (
      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
        @jaeblendzzz
      </a>
    ),
  },
  {
    k: 'Running late',
    v: '5-minute grace period, then it counts as a no-show.',
  },
  {
    k: 'Cancelling',
    v: '24 hours notice. Late cancels carry a $45 fee.',
  },
]

export default function Booking({ onBook }) {
  const ref = useReveal()

  return (
    <section id="book">
      <div className="container reveal" ref={ref}>
        <div className="book-cta">
          <h2 className="h2">Book your cut.</h2>
          <p className="lead">
            Real-time availability through Square. Takes about a minute — no
            account needed.
          </p>
          <button type="button" className="pill" onClick={onBook}>
            Book an appointment
          </button>
          <span className="book-alt">
            or{' '}
            <a href={SQUARE_BOOKING_URL} target="_blank" rel="noreferrer">
              open the booking page in a new tab
            </a>
          </span>
        </div>

        <div className="book-facts">
          {FACTS.map((fact) => (
            <div className="book-fact" key={fact.k}>
              <span className="label k">{fact.k}</span>
              <span className="v">{fact.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
