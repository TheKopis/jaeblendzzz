import useReveal from '../useReveal'

// Live menu pulled from his Square booking site (jaeblendzzz.square.site)
const SERVICES = [
  {
    name: 'Blendzzz Royale Platinum Package',
    desc: 'The ultimate experience — shampoo wash, scalp treatment, haircut of your choice, hot towel shave, facial steamer, black mask, and a facial scrub to deep-cleanse pores and balance the skin.',
    price: '$150',
    duration: '60 min',
    featured: true,
  },
  {
    name: 'Blendzzz Royale Gold Package',
    desc: 'Haircut of choice, straight razor shave, hot towels, facial steamer, scalp treatment, black mask, facial scrub, moisture cream, and clarifying mask.',
    price: '$140',
    duration: '60 min',
    featured: true,
  },
  {
    name: 'G-Code Gentlemen’s Package',
    desc: 'The full gentlemen’s service — haircut and beard line up with hot towel straight razor shave, black mask, complete edge and beard enhancement, eyebrows included. Walk out looking famous.',
    price: '$100',
    duration: '60 min',
    featured: true,
  },
  {
    name: 'Facial Treatment',
    desc: 'Cleansing black mask to extract blackheads, gentle facial cleanse with hot towels, and a deep scrub to lift dead skin — leaving you looking and feeling new.',
    price: '$80',
    duration: '45 min',
  },
  {
    name: 'Men’s Haircut w/ Beard',
    desc: 'Choice of any haircut plus full beard work.',
    price: '$70',
    duration: '50 min',
  },
  {
    name: 'Men’s Advanced Haircut',
    desc: 'Tapers, fades, and any style taken down to zero or skin — blended from bald to hair for a modern look.',
    price: '$50',
    duration: '40 min',
  },
  {
    name: 'Men’s Basic Haircut',
    desc: 'The gentleman’s cut — guard number on the sides with shear work on top for a clean, traditional look.',
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
    desc: 'Guard number on the sides, shear cut on top. A clean traditional cut.',
    price: '$50',
    duration: '35 min',
  },
  {
    name: 'Beard Line Up w/ Straight Razor',
    desc: 'Sharp beard edges cut with a straight razor.',
    price: '$40',
    duration: '20 min',
  },
  {
    name: 'Line Up w/ Straight Razor',
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
]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Menu</span>
          <h2 className="display metal-text">Services</h2>
          <p>Real prices, straight from the book. Every service ends with you looking right.</p>
        </div>

        <div className="services-grid reveal" ref={ref}>
          {SERVICES.map((service, i) => (
            <article
              className={`slab service-card ${service.featured ? 'featured' : ''}`}
              key={service.name}
            >
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              <div className="service-meta">
                <span className="price metal-text">{service.price}</span>
                <span className="duration">{service.duration}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="services-note">
          Accepted: Visa · Mastercard · Amex · Discover · Apple&nbsp;Pay · Google&nbsp;Pay · Cash&nbsp;App
        </p>
      </div>
    </section>
  )
}
