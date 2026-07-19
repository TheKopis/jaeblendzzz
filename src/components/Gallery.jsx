import useReveal from '../useReveal'
import { INSTAGRAM_URL } from '../config'
import { TILE_PATTERNS } from '../patterns'

// Tile artwork is generated from the geometry of each cut — print
// halftones. Swap for photos when they land.
const TILES = [
  { label: 'Skin fade', sub: 'Blended to nothing', key: 'Skin Fade' },
  { label: 'Taper + beard', sub: 'Follows the hairline', key: 'Taper + Beard' },
  { label: 'Burst fade', sub: 'Radiates from the ear', key: 'Burst Fade' },
  { label: 'Textured crop', sub: 'Choppy on top', key: 'Textured Crop' },
  { label: 'Waves lineup', sub: 'Rolling from the crown', key: 'Waves Lineup' },
  { label: 'Freestyle design', sub: 'Carved with the razor', key: 'Freestyle Design' },
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery">
      <div className="container">
        <div className="sec-head">
          <div className="sec-title">
            <span className="sec-num">02</span>
            <h2>Work</h2>
          </div>
          <p className="sec-note">
            Each pattern is drawn from the geometry of the cut it names. The
            real thing is on Instagram.
          </p>
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
                style={{ backgroundImage: TILE_PATTERNS[tile.key] }}
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
          Full portfolio —{' '}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="tlink">
            @jaeblendzzz on Instagram
          </a>
        </p>
      </div>
    </section>
  )
}
