import { INSTAGRAM_URL } from '../config'
import Crown from './Crown'

export default function Footer({ onBook }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <span className="footer-logo">
            <Crown className="footer-crown" solid />
            Jaeblendzzz
          </span>
          <div className="footer-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <button type="button" onClick={onBook}>
              Book
            </button>
            <a href="#services">Services</a>
            <a href="#top">Top</a>
          </div>
        </div>
        <p className="footer-fine">
          © {new Date().getFullYear()} JaeBlendzzz LLC — 6360 Pacific Ave, Suite 2, Stockton, CA 95207
        </p>
      </div>
    </footer>
  )
}
