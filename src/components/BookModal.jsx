import { useEffect, useState } from 'react'
import { SQUARE_BOOKING_URL } from '../config'

export default function BookModal({ open, onClose }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!open) return

    setLoaded(false)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')

    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Book an appointment">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-bar">
          <span className="modal-title">Book with Jaeblendzzz</span>
          <div className="modal-actions">
            <a href={SQUARE_BOOKING_URL} target="_blank" rel="noreferrer" className="modal-newtab">
              Open in new tab ↗
            </a>
            <button className="modal-close" onClick={onClose} aria-label="Close booking window">
              ✕
            </button>
          </div>
        </div>

        {!loaded && (
          <div className="modal-loading">
            <span className="modal-spinner" aria-hidden="true" />
            <span>Loading booking…</span>
          </div>
        )}

        <iframe
          src={SQUARE_BOOKING_URL}
          title="Jaeblendzzz booking — powered by Square"
          className={`modal-frame ${loaded ? 'loaded' : ''}`}
          onLoad={() => setLoaded(true)}
          allow="payment"
        />
      </div>
    </div>
  )
}
