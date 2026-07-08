import useReveal from '../useReveal'

const STATS = [
  { value: '2016', label: 'In the Game Since' },
  { value: '12', label: 'Services on the Menu' },
  { value: '60 min', label: 'Full Royale Experience' },
  { value: '100%', label: 'Walk-Out Fresh' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about">
      <div className="container about-inner reveal" ref={ref}>
        <div className="about-copy">
          <span className="eyebrow">The Barber</span>
          <h2 className="display metal-text" style={{ marginTop: '1rem' }}>
            Jasiel Escalera
          </h2>
          <p>
            The man behind Jaeblendzzz. Cutting since 2016, Jasiel built
            his chair on one idea: your image and style is everything. Every
            fade is blended to nothing, every line is cut with intent, and no
            two heads get the same template.
          </p>
          <p>
            From traditional gentleman&apos;s cuts to the full Blendzzz Royale
            treatment — hot towels, straight razor, facials, the works — the
            goal never changes. We&apos;ll leave you looking and feeling famous.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map((stat) => (
            <div className="slab stat" key={stat.label}>
              <span className="value metal-text">{stat.value}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
