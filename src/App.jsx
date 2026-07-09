import { useState } from 'react'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Cursor from './components/Cursor'
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
import Lineup from './components/Lineup'
import './App.css'

export default function App() {
  const [bookOpen, setBookOpen] = useState(false)
  const openBooking = () => setBookOpen(true)

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Cursor />
      <Nav onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Services />
        <Lineup />
        <Gallery />
        <Lineup />
        <Reviews />
        <Lineup />
        <About />
        <Booking onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <MobileBookBar onBook={openBooking} />
      <BookModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
