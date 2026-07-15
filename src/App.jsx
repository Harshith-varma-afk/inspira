import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import About from './components/About'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import AcquisitionNotice from './components/AcquisitionNotice'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-card"
      >
        Skip to content
      </a>
      <AcquisitionNotice />
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <WhyUs />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
