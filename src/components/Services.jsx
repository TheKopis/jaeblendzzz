import useReveal from '../useReveal'

// Live menu from his Square booking site (jaeblendzzz.square.site)
const PACKAGES = [
  {
    name: 'Royale Platinum',
    desc: 'Shampoo wash, scalp treatment, any haircut, hot towel shave, facial steam, black mask, and a deep-cleansing scrub.',
    price: '$150',
    duration: '60 min',
  },
  {
    name: 'Royale Gold',
    desc: 'Any haircut, straight razor shave, hot towels, facial steam, scalp treatment, black mask, scrub, and clarifying mask.',
    price: '$140',
    duration: '60 min',
  },
  {
    name: 'G-Code Gentlemen’s',
    desc: 'Haircut and beard line up, hot towel razor shave, black mask, full edge and beard enhancement. Eyebrows included.',
    price: '$100',
    duration: '60 min',
  },
]

const MENU = [
  {
    label: 'Cuts',
    items: [
      { name: 'Haircut with beard', desc: 'Any haircut plus full beard work.', price: '$70', duration: '50 min' },
      { name: 'Advanced haircut', desc: 'Tapers and fades, blended from skin.', price: '$50', duration: '40 min' },
      { name: 'Basic haircut', desc: 'Guard on the sides, shears on top.', price: '$50', duration: '30 min' },
      { name: 'Kids advanced', desc: 'Skin fades for 12 and under.', price: '$50', duration: '40 min' },
      { name: 'Kids basic', desc: 'A clean traditional cut.', price: '$50', duration: '35 min' },
    ],
  },
  {
    label: 'Details',
    items: [
      { name: 'Facial treatment', desc: 'Black mask, hot towels, deep scrub.', price: '$80', duration: '45 min' },
      { name: 'Beard line up', desc: 'Straight razor edges.', price: '$40', duration: '20 min' },
      { name: 'Line up', desc: 'Straight razor hairline.', price: '$40', duration: '20 min' },
      { name: 'Eyebrows', desc: 'Quick, clean shaping.', price: '$10', duration: '10 min' },
    ],
  },
]

export default function Services({ onBook }) {
  const packagesRef = useReveal()
  const menuRef = useReveal()

  return (
    <section id="services">
      <div className="container">
        <div className="sec-head">
          <div className="sec-title">
            <span className="sec-num">01</span>
            <h2>Services</h2>
          </div>
          <p className="sec-note">
            Prices as listed in the book. Card, Apple&nbsp;Pay, Google&nbsp;Pay
            and Cash&nbsp;App accepted.
          </p>
        </div>

        <div className="packages reveal" ref={packagesRef}>
          {PACKAGES.map((pkg, i) => (
            <article className="package stagger-item" style={{ '--i': i }} key={pkg.name}>
              <h3>{pkg.name}</h3>
              <p>{pkg.desc}</p>
              <span className="package-price">{pkg.price}</span>
              <span className="package-duration">{pkg.duration}</span>
              <button type="button" className="tlink" onClick={onBook}>
                Book this
              </button>
            </article>
          ))}
        </div>

        <div className="reveal" ref={menuRef}>
          {MENU.map((group) => (
            <div className="menu-group" key={group.label}>
              <span className="small-caps">{group.label}</span>
              {group.items.map((item) => (
                <div className="menu-row" key={item.name}>
                  <div className="menu-main">
                    <div className="menu-name">{item.name}</div>
                    <div className="menu-desc">{item.desc}</div>
                  </div>
                  <span className="menu-duration">{item.duration}</span>
                  <span className="menu-price">{item.price}</span>
                </div>
              ))}
            </div>
          ))}

          <p className="menu-note">
            Running late? Five minutes of grace, then the slot counts as a
            no-show. Cancellations need 24 hours notice — late cancels carry a
            $45 fee.
          </p>
        </div>
      </div>
    </section>
  )
}
