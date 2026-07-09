import useReveal from '../useReveal'
import { INSTAGRAM_URL } from '../config'
import { TILE_PATTERNS } from '../patterns'

// Each tile's artwork is generated from the geometry of the cut itself —
// a fade is a density gradient, a burst fade radiates from the ear,
// waves roll from the crown. Swap tiles for photos when they land.
const TILES = [
  { label: 'Skin Fade', sub: 'Blended to nothing' },
  { label: 'Taper + Beard', sub: 'Follow the hairline' },
  { label: 'Burst Fade', sub: 'Radiating from the ear' },
  { label: 'Textured Crop', sub: 'Choppy on top' },
  { label: 'Waves Lineup', sub: 'Rolling from the crown' },
  { label: 'Freestyle Design', sub: 'Carved with the razor' },
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery" className="marble">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Work</span>
          <h2 className="display metal-text">Gallery</h2>
          <p>The anatomy of a cut — each pattern drawn from the fade it represents.</p>
        </div>

        <div className="gallery-grid reveal" ref={ref}>
          {TILES.map((tile, i) => (
            <a
              className="slab gallery-tile stagger-item"
              style={{ '--i': i }}
              key={tile.label}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="gallery-art"
                style={{ backgroundImage: TILE_PATTERNS[tile.label] }}
                aria-hidden="true"
              />
              <span className="gallery-caption">
                <span className="tag">{tile.label}</span>
                <span className="sub">{tile.sub}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="gallery-note">
          Full portfolio on Instagram —{' '}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @jaeblendzzz
          </a>
        </p>
      </div>
    </section>
  )
}
