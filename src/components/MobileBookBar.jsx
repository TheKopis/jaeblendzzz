import { useEffect, useState } from 'react'

export default function MobileBookBar({ onBook }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`mobile-book-bar ${visible ? 'show' : ''}`}>
      <div className="mobile-book-copy">
        <span className="mobile-book-brand">Jaeblendzzz</span>
        <span className="mobile-book-price">Cuts from $40 · Stockton, CA</span>
      </div>
      <button type="button" className="pill mobile-book-btn" onClick={onBook}>
        Book
      </button>
    </div>
  )
}
