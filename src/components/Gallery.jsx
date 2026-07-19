import useReveal from '../useReveal'
import { INSTAGRAM_URL } from '../config'
import { TILE_PATTERNS } from '../patterns'

// Tile artwork is generated from the geometry of each cut.
// Swap for photos when they land.
const TILES = [
  { label: 'Skin fade', sub: 'Blended to nothing' },
  { label: 'Taper + beard', sub: 'Follows the hairline' },
  { label: 'Burst fade', sub: 'Radiates from the ear' },
  { label: 'Textured crop', sub: 'Choppy on top' },
  { label: 'Waves lineup', sub: 'Rolling from the crown' },
  { label: 'Freestyle design', sub: 'Carved with the razor' },
]

const PATTERN_KEYS = {
  'Skin fade': 'Skin Fade',
  'Taper + beard': 'Taper + Beard',
  'Burst fade': 'Burst Fade',
  'Textured crop': 'Textured Crop',
  'Waves lineup': 'Waves Lineup',
  'Freestyle design': 'Freestyle Design',
}

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">The craft.</h2>
          <p className="lead">The anatomy of a cut — each pattern drawn from the fade it represents.</p>
        </div>

        <div className="gallery-grid reveal" ref={ref}>
          {TILES.map((tile, i) => (
            <a
              className="gallery-tile stagger-item"
              style={{ '--i': i }}
              key={tile.label}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="gallery-art"
                style={{ backgroundImage: TILE_PATTERNS[PATTERN_KEYS[tile.label]] }}
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
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="tlink">
            @jaeblendzzz &rsaquo;
          </a>
        </p>
      </div>
    </section>
  )
}
