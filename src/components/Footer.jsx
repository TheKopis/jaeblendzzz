import { INSTAGRAM_URL } from '../config'

export default function Footer({ onBook }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo metal-text">JAEBLENDZZZ</span>

        <div className="footer-socials">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <button type="button" className="footer-book" onClick={onBook}>
            Book
          </button>
          <a href="#services">Services</a>
        </div>

        <p className="footer-fine">
          © {new Date().getFullYear()} Jaeblendzzz. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
