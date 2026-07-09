import { useEffect, useRef, useState } from 'react'

// Trailing cursor ring — desktop / fine-pointer only. The native cursor stays;
// this is a soft metallic halo that leans into links and buttons.
export default function Cursor() {
  const [enabled] = useState(
    () =>
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const ringRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    const ring = ringRef.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let scale = 1
    let tScale = 1
    let visible = false
    let raf = 0

    const loop = () => {
      x += (tx - x) * 0.16
      y += (ty - y) * 0.16
      scale += (tScale - scale) * 0.18
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!visible) {
        visible = true
        ring.style.opacity = '1'
      }
    }
    const onOver = (e) => {
      tScale = e.target.closest('a, button, [role="button"]') ? 2.1 : 1
    }
    const onLeave = () => {
      visible = false
      ring.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
}
