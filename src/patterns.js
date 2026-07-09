// Procedural "fade" patterns — each gallery tile gets artwork generated from
// the geometry of the actual cut: a fade is literally a density gradient.
// Rendered once into data-URI SVGs so the DOM stays light.

const W = 300
const H = 380
const INK = '%23cfcfd6' // url-encoded #cfcfd6

// deterministic pseudo-random so builds are stable
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function wrap(body) {
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${W} ${H}'%3E${body}%3C/svg%3E")`
}

function circle(x, y, r) {
  return `%3Ccircle cx='${x.toFixed(1)}' cy='${y.toFixed(1)}' r='${r.toFixed(2)}' fill='${INK}'/%3E`
}

// Skin fade — dense on top, vanishing to skin at the bottom
function skinFade() {
  const rnd = seeded(7)
  let out = ''
  for (let y = 10; y < H; y += 13) {
    const t = y / H
    const r = 2.6 * Math.pow(1 - t, 2.2)
    if (r < 0.3) continue
    for (let x = 8 + (y % 26 === 10 % 26 ? 0 : 6.5); x < W; x += 13) {
      out += circle(x + (rnd() - 0.5) * 3, y + (rnd() - 0.5) * 2, r)
    }
  }
  return wrap(out)
}

// Taper — diagonal density falloff, like a taper following the hairline
function taper() {
  const rnd = seeded(23)
  let out = ''
  for (let y = 10; y < H; y += 14) {
    for (let x = 8; x < W; x += 14) {
      const t = (x / W + y / H) / 2
      const r = 2.5 * Math.pow(1 - t, 2)
      if (r < 0.3) continue
      out += circle(x + (rnd() - 0.5) * 4, y + (rnd() - 0.5) * 3, r)
    }
  }
  return wrap(out)
}

// Burst fade — dots on arcs radiating from the ear (bottom-left corner)
function burst() {
  let out = ''
  for (let R = 24; R < 480; R += 22) {
    const r = Math.max(0.4, 2.7 * (1 - R / 480))
    const steps = Math.floor(R / 9)
    for (let i = 0; i <= steps; i++) {
      const a = (i / steps) * Math.PI * 0.5
      const x = Math.cos(a) * R
      const y = H - Math.sin(a) * R
      if (x > W + 4 || y < -4) continue
      out += circle(x, y, r)
    }
  }
  return wrap(out)
}

// Textured crop — even, choppy texture with seeded jitter
function crop() {
  const rnd = seeded(51)
  let out = ''
  for (let y = 12; y < H; y += 16) {
    for (let x = 10; x < W; x += 16) {
      const r = 1.1 + rnd() * 1.2
      out += circle(x + (rnd() - 0.5) * 9, y + (rnd() - 0.5) * 9, r)
    }
  }
  return wrap(out)
}

// Waves — concentric arcs rolling from the crown (top-right)
function waves() {
  let out = ''
  for (let R = 26; R < 560; R += 26) {
    const o = Math.max(0.1, 0.85 - R / 620)
    out += `%3Ccircle cx='${W}' cy='0' r='${R}' fill='none' stroke='${INK}' stroke-opacity='${o.toFixed(2)}' stroke-width='2.4'/%3E`
  }
  return wrap(out)
}

// Freestyle design — carved part lines, sharp angles like a razor design
function freestyle() {
  const paths = [
    'M-10 90 L120 118 L70 176 L230 210',
    'M-10 150 L100 178 L52 232 L200 262 L160 320 L320 352',
    'M40 -10 L150 40 L110 96 L310 150',
    'M180 -10 L250 60 L210 110 L340 160',
  ]
  let out = ''
  paths.forEach((d, i) => {
    out += `%3Cpath d='${d}' fill='none' stroke='${INK}' stroke-opacity='${(0.75 - i * 0.12).toFixed(2)}' stroke-width='${(3 - i * 0.4).toFixed(1)}' stroke-linecap='round' stroke-linejoin='round'/%3E`
  })
  return wrap(out)
}

// Hero backdrop — a huge, ultra-sparse skin fade behind the title
export function heroFade() {
  let out = ''
  for (let y = 8; y < 520; y += 17) {
    const t = y / 520
    const r = 2.2 * Math.pow(1 - t, 2.4)
    if (r < 0.25) continue
    for (let x = 8; x < 800; x += 17) {
      out += `%3Ccircle cx='${x}' cy='${y}' r='${r.toFixed(2)}' fill='%23ffffff'/%3E`
    }
  }
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 520'%3E${out}%3C/svg%3E")`
}

export const TILE_PATTERNS = {
  'Skin Fade': skinFade(),
  'Taper + Beard': taper(),
  'Burst Fade': burst(),
  'Textured Crop': crop(),
  'Waves Lineup': waves(),
  'Freestyle Design': freestyle(),
}
