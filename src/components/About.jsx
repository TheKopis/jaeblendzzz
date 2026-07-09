import { useEffect, useRef, useState } from 'react'
import useReveal from '../useReveal'
import BarberPole from './BarberPole'

const STATS = [
  { end: 2016, from: 1990, label: 'In the Game Since' },
  { end: 12, from: 0, label: 'Services on the Menu' },
  { end: 60, from: 0, suffix: ' min', label: 'Full Royale Experience' },
  { end: 100, from: 0, suffix: '%', label: 'Walk-Out Fresh' },
]

function CountUp({ from, end, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(from)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return
    }

    let raf = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const t0 = performance.now()
        const dur = 1400
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(from + (end - from) * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [from, end])

  return (
    <span className="value metal-text" ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

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
            The man behind Jaeblendzzz. Cutting since 2016, Jasiel built his
            chair on one idea: your image and style is everything. Every fade
            is blended to nothing, every line is cut with intent, and no two
            heads get the same template.
          </p>
          <p>
            From traditional gentleman&apos;s cuts to the full Blendzzz Royale
            treatment — hot towels, straight razor, facials, the works — the
            goal never changes. We&apos;ll leave you looking and feeling famous.
          </p>
        </div>

        <div className="about-side">
          <BarberPole className="about-pole" />
          <div className="about-stats">
            {STATS.map((stat, i) => (
              <div className="slab stat stagger-item" style={{ '--i': i }} key={stat.label}>
                <CountUp from={stat.from} end={stat.end} suffix={stat.suffix} />
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
