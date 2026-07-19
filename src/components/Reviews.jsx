import useReveal from '../useReveal'
import { REVIEWS } from '../reviews'

export default function Reviews() {
  const ref = useReveal()

  return (
    <section id="reviews">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">Word travels.</h2>
        </div>

        <div className="reviews-grid reveal" ref={ref}>
          {REVIEWS.slice(0, 3).map((review, i) => (
            <figure className="review-card stagger-item" style={{ '--i': i }} key={review.name}>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
