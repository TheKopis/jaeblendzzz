import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import About from './components/About'
import Booking from './components/Booking'
import Footer from './components/Footer'
import BookModal from './components/BookModal'
import MobileBookBar from './components/MobileBookBar'
import './App.css'

export default function App() {
  const [bookOpen, setBookOpen] = useState(false)
  const openBooking = () => setBookOpen(true)

  return (
    <>
      <Nav onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <div className="ribbon" aria-hidden="true" />
        <Services onBook={openBooking} />
        <Gallery />
        <Reviews />
        <About />
        <div className="ribbon" aria-hidden="true" />
        <Booking onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <MobileBookBar onBook={openBooking} />
      <BookModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
