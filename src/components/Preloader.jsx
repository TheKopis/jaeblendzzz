import { useEffect, useState } from 'react'

// Monogram splash on first load of the session. Adds `preloading` to <body>
// so the hero entrance holds until the curtain lifts.
export default function Preloader() {
  const [phase, setPhase] = useState(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const seen = sessionStorage.getItem('jb-preloaded')
    return reduced || seen ? 'gone' : 'showing'
  })

  useEffect(() => {
    if (phase === 'gone') return

    document.body.classList.add('preloading')
    sessionStorage.setItem('jb-preloaded', '1')

    const lift = setTimeout(() => {
      setPhase('lifting')
      document.body.classList.remove('preloading')
    }, 1350)
    const gone = setTimeout(() => setPhase('gone'), 2100)

    return () => {
      clearTimeout(lift)
      clearTimeout(gone)
      document.body.classList.remove('preloading')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase === 'gone') return null

  return (
    <div className={`preloader ${phase === 'lifting' ? 'lifting' : ''}`} aria-hidden="true">
      <div className="preloader-mark">
        <span className="preloader-jb display metal-text">JB</span>
        <span className="preloader-name">JAEBLENDZZZ</span>
        <span className="preloader-line" />
      </div>
    </div>
  )
}
