import useReveal from '../useReveal'

// Live menu pulled from his Square booking site (jaeblendzzz.square.site),
// arranged the way a barber reads it: packages, cuts, then detail work.
const GROUPS = [
  {
    label: 'The Royale Packages',
    note: 'The full-service experience',
    size: 'large',
    items: [
      {
        name: 'Blendzzz Royale Platinum',
        desc: 'The ultimate experience — shampoo wash, scalp treatment, haircut of your choice, hot towel shave, facial steamer, black mask, and a deep-cleansing facial scrub.',
        price: '$150',
        duration: '60 min',
      },
      {
        name: 'Blendzzz Royale Gold',
        desc: 'Haircut of choice, straight razor shave, hot towels, facial steamer, scalp treatment, black mask, facial scrub, moisture cream, and clarifying mask.',
        price: '$140',
        duration: '60 min',
      },
      {
        name: 'G-Code Gentlemen’s',
        desc: 'Haircut and beard line up with hot towel straight razor shave, black mask, complete edge and beard enhancement — eyebrows included. Walk out looking famous.',
        price: '$100',
        duration: '60 min',
      },
    ],
  },
  {
    label: 'The Cuts',
    note: 'Tapers, fades & traditionals',
    size: 'compact',
    items: [
      {
        name: 'Men’s Haircut w/ Beard',
        desc: 'Choice of any haircut plus full beard work.',
        price: '$70',
        duration: '50 min',
      },
      {
        name: 'Men’s Advanced Haircut',
        desc: 'Tapers, fades, and any style taken down to zero or skin — blended from bald to hair.',
        price: '$50',
        duration: '40 min',
      },
      {
        name: 'Men’s Basic Haircut',
        desc: 'The gentleman’s cut — guard on the sides, shear work on top. Clean and traditional.',
        price: '$50',
        duration: '30 min',
      },
      {
        name: 'Kids Advanced Haircut',
        desc: 'Any style taken down to skin and blended up — the modern look, kid-sized.',
        price: '$50',
        duration: '40 min',
      },
      {
        name: 'Kids Basic Haircut',
        desc: 'Guard on the sides, shear cut on top. A clean traditional cut.',
        price: '$50',
        duration: '35 min',
      },
    ],
  },
  {
    label: 'The Details',
    note: 'Razor work & finishing touches',
    size: 'medium',
    items: [
      {
        name: 'Facial Treatment',
        desc: 'Cleansing black mask, gentle facial cleanse with hot towels, and a deep scrub — looking and feeling new.',
        price: '$80',
        duration: '45 min',
      },
      {
        name: 'Beard Line Up w/ Razor',
        desc: 'Sharp beard edges cut with a straight razor.',
        price: '$40',
        duration: '20 min',
      },
      {
        name: 'Line Up w/ Razor',
        desc: 'Crisp hairline edge-up with a straight razor finish.',
        price: '$40',
        duration: '20 min',
      },
      {
        name: 'Eyebrows',
        desc: 'Quick, clean eyebrow shaping.',
        price: '$10',
        duration: '10 min',
      },
    ],
  },
]

// assign stable menu numbers once, at module load
{
  let n = 0
  GROUPS.forEach((g) => g.items.forEach((item) => (item.num = ++n)))
}

function ServiceGroup({ group }) {
  const ref = useReveal()

  return (
    <div className="service-group reveal" ref={ref}>
      <div className="service-group-head">
        <h3 className="display">{group.label}</h3>
        <span className="service-group-note">{group.note}</span>
        <span className="service-group-rule" />
      </div>

      <div className={`services-grid grid-${group.size}`}>
        {group.items.map((service, i) => (
          <article className="slab service-card stagger-item" style={{ '--i': i }} key={service.name}>
            <div className="service-top">
              <span className="guard-chip">
                <span className="guard-teeth" aria-hidden="true" />
                {String(service.num).padStart(2, '0')}
              </span>
              <span className="duration">{service.duration}</span>
            </div>
            <h4>{service.name}</h4>
            <p>{service.desc}</p>
            <span className="price metal-text">{service.price}</span>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Menu</span>
          <h2 className="display metal-text">Services</h2>
          <p>Real prices, straight from the book. Every service ends with you looking right.</p>
        </div>

        {GROUPS.map((group) => (
          <ServiceGroup group={group} key={group.label} />
        ))}

        <p className="services-note">
          Accepted: Visa · Mastercard · Amex · Discover · Apple&nbsp;Pay · Google&nbsp;Pay · Cash&nbsp;App
        </p>
      </div>
    </section>
  )
}
