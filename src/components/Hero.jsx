import { INSTAGRAM_URL } from '../config'

export default function Hero({ onBook }) {
  return (
    <section className="hero marble" id="top">
      <div className="container hero-inner">
        <span className="eyebrow">Precision · Craft · Clean Fades</span>

        <h1 className="display hero-title metal-text">Jaeblendzzz</h1>

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
