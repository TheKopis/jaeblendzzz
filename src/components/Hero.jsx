import { useEffect, useRef } from 'react'
import { INSTAGRAM_URL } from '../config'
import { heroFade } from '../patterns'
import ClipperSVG from './ClipperSVG'

const TITLE = 'JAEBLENDZZZ'
const FADE_URI = heroFade()

export default function Hero({ onBook }) {
  const sectionRef = useRef(null)

  // reflective glint follows the mouse across the marble — desktop only
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = sectionRef.current
    if (!el) return

    let raf = 0
    let mx = 0
    let my = 0
    const apply = () => {
      raf = 0
      el.style.setProperty('--gx', `${mx}px`)
      el.style.setProperty('--gy', `${my}px`)
    }
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      mx = e.clientX - rect.left
      my = e.clientY - rect.top
      if (!raf) raf = requestAnimationFrame(apply)
    }
    el.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      el.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero marble" id="top" ref={sectionRef}>
      <div className="hero-fadedots" style={{ backgroundImage: FADE_URI }} aria-hidden="true" />
      <div className="hero-glint" aria-hidden="true" />

      <div className="container hero-inner">
        <span className="eyebrow">Precision · Craft · Clean Fades</span>

        <h1 className="display hero-title metal-text" aria-label={TITLE}>
          {TITLE.split('').map((ch, i) => (
            <span className="ltr" key={i} style={{ '--li': i }} aria-hidden="true">
              {ch}
            </span>
          ))}
        </h1>

        {/* the clipper cuts the lineup under the name */}
        <div className="hero-lineup" aria-hidden="true">
          <span className="hero-lineup-line" />
          <span className="hero-lineup-carrier">
            <ClipperSVG className="hero-lineup-clipper" buzzing />
          </span>
        </div>

        <p className="hero-sub">
          Every cut carved like stone. Sharp lines, seamless fades, and a finish
          polished to a mirror shine.
        </p>

        <div className="hero-ctas">
          <button type="button" className="btn btn-solid" onClick={onBook}>
            Book a Cut
          </button>
          <a href="#gallery" className="btn btn-ghost">View Work</a>
        </div>

        <a className="hero-handle" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          @jaeblendzzz
        </a>
      </div>

      <div className="hero-scroll" aria-hidden="true" />
    </section>
  )
}
