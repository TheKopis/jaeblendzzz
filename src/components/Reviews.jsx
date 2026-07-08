import { REVIEWS } from '../reviews'

function Stars({ count }) {
  return (
    <span className="review-stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
      <span className="review-stars-dim">{'★'.repeat(5 - count)}</span>
    </span>
  )
}

export default function Reviews() {
  // list rendered twice for a seamless marquee loop
  const loop = [...REVIEWS, ...REVIEWS]

  return (
    <section id="reviews" className="reviews">
      <div className="container section-head">
        <span className="eyebrow">Word on the Street</span>
        <h2 className="display metal-text">Client Reviews</h2>
      </div>

      <div className="reviews-marquee" aria-label="Client reviews">
        <div className="reviews-track">
          {loop.map((review, i) => (
            <figure
              className="slab review-card"
              key={`${review.name}-${i}`}
              aria-hidden={i >= REVIEWS.length}
            >
              <Stars count={review.stars} />
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>— {review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
