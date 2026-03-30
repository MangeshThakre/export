import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Products from '@/components/Products'
import Stats from '@/components/Stats'
import Destinations from '@/components/Destinations'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Products />
      <Stats />
      <Destinations />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
