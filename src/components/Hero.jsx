import { useEffect, useRef } from 'react'
import { heroFade } from '../patterns'

const FADE_URI = heroFade()

export default function Hero({ onBook }) {
  const innerRef = useRef(null)

  // content gently fades and drifts as you scroll away — nothing more
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = innerRef.current
    if (!el) return

    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      const vh = window.innerHeight
      const p = Math.min(1, y / (vh * 0.6))
      el.style.opacity = String(1 - p * 0.9)
      el.style.transform = `translateY(${y * 0.14}px)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="container hero-inner" ref={innerRef}>
        <span className="hero-brand">jaeblendzzz</span>

        <h1 className="h1 hero-title">Sharp. Every&nbsp;time.</h1>

        <p className="lead hero-sub">
          Precision cuts by Jasiel Escalera. Stockton,&nbsp;CA.
        </p>

        <div className="hero-ctas">
          <button type="button" className="pill" onClick={onBook}>
            Book an appointment
          </button>
          <a href="#services" className="tlink">
            Explore services &rsaquo;
          </a>
        </div>
      </div>

      <div className="hero-fade-band" style={{ backgroundImage: FADE_URI }} aria-hidden="true" />
    </section>
  )
}
