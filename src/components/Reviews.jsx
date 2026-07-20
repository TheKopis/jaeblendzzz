import useReveal from '../useReveal'
import { REVIEWS } from '../reviews'

export default function Reviews() {
  const ref = useReveal()

  return (
    <section id="reviews">
      <div className="container">
        <div className="sec-head">
          <div className="sec-title">
            <span className="sec-num">III.</span>
            <h2>Words</h2>
          </div>
        </div>

        <div className="quote-list reveal" ref={ref}>
          {REVIEWS.slice(0, 3).map((review, i) => (
            <figure className="quote stagger-item" style={{ '--i': i }} key={review.name}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{review.quote}</blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
