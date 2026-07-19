import useReveal from '../useReveal'

const FACTS = [
  { value: '2016', label: 'Cutting since' },
  { value: '12', label: 'Services on the menu' },
  { value: 'Tue–Sat', label: 'Behind the chair' },
  { value: 'Stockton', label: 'California' },
]

export default function About() {
  const copyRef = useReveal()
  const factsRef = useReveal()

  return (
    <section id="about">
      <div className="container">
        <div className="about-copy reveal" ref={copyRef}>
          <h2 className="h2">Behind the chair.</h2>
          <p>
            Jasiel Escalera has been cutting since 2016, building Jaeblendzzz
            on a simple idea — your image is everything. No templates. No
            rushed fades. Every appointment gets the full attention of the
            chair.
          </p>
          <p>
            From traditional gentleman&apos;s cuts to the full Royale
            treatment, the goal never changes: you leave looking and feeling
            famous.
          </p>
        </div>

        <div className="about-facts reveal" ref={factsRef}>
          {FACTS.map((fact, i) => (
            <div className="fact stagger-item" style={{ '--i': i }} key={fact.label}>
              <span className="value">{fact.value}</span>
              <span className="label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
