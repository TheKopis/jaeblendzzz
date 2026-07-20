import useReveal from '../useReveal'
import { INSTAGRAM_URL } from '../config'

const SPECS = [
  {
    k: 'Address',
    v: (
      <a
        href="https://maps.google.com/?q=6360+Pacific+Ave+Suite+2,+Stockton,+CA+95207"
        target="_blank"
        rel="noreferrer"
      >
        6360 Pacific Ave, Suite 2, Stockton, CA 95207
      </a>
    ),
  },
  { k: 'Hours', v: 'Tuesday – Saturday, 10am – 6pm' },
  { k: 'Phone', v: <a href="tel:+12094061061">(209) 406-1061</a> },
  {
    k: 'Instagram',
    v: (
      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
        @jaeblendzzz
      </a>
    ),
  },
  { k: 'Payment', v: 'Card, Apple Pay, Google Pay, Cash App' },
  { k: 'Parking', v: 'Lot on site' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about">
      <div className="container">
        <div className="sec-head">
          <div className="sec-title">
            <span className="sec-num">IV.</span>
            <h2>Info</h2>
          </div>
        </div>

        <div className="info-grid reveal" ref={ref}>
          <div className="info-copy">
            <p>
              <strong>Jasiel Escalera</strong> has been cutting since 2016.
              Jaeblendzzz runs on one rule — no templates. Every head is
              mapped, every fade is blended from skin, and nothing leaves the
              chair unfinished.
            </p>
            <p>
              The shop works by appointment through Square. Book a slot, show
              up, leave right. That&apos;s the whole system.
            </p>
          </div>

          <div className="spec-list">
            {SPECS.map((spec) => (
              <div className="spec" key={spec.k}>
                <span className="small-caps k">{spec.k}</span>
                <span className="v">{spec.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
