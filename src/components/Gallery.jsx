import useReveal from '../useReveal'

const TILES = [
  'Skin Fade',
  'Taper + Beard',
  'Burst Fade',
  'Textured Crop',
  'Waves Lineup',
  'Freestyle Design',
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery" className="marble">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Work</span>
          <h2 className="display metal-text">Gallery</h2>
          <p>A look at the craft. Swap these tiles for real cuts when the photos land.</p>
        </div>

        <div className="gallery-grid reveal" ref={ref}>
          {TILES.map((label) => (
            <a
              className="slab gallery-tile"
              key={label}
              href="https://www.instagram.com/jaeblendzzz/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="tag">{label}</span>
            </a>
          ))}
        </div>

        <p className="gallery-note">
          Full portfolio on Instagram —{' '}
          <a href="https://www.instagram.com/jaeblendzzz/" target="_blank" rel="noreferrer">
            @jaeblendzzz
          </a>
        </p>
      </div>
    </section>
  )
}
