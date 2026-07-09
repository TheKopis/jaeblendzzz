import useReveal from '../useReveal'

// Section divider that "lines itself up" — the razor line draws across
// when it scrolls into view, with a bright leading edge.
export default function Lineup() {
  const ref = useReveal()

  return (
    <div className="lineup reveal" ref={ref} aria-hidden="true">
      <span className="lineup-line" />
      <span className="lineup-spark" />
    </div>
  )
}
