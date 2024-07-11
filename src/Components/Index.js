import React from 'react'
import Header from './Nav'
import Hero from './hero/hero'
import Footer from './footer/footer'
import Services from './services/service'
import Faith from './faith/faith'
import Packages from './packages/package'
import Inquiry from './inquriy/inquriy'
import FAQ from './FAQ/faq'
import Process from './process/proces'
import News from './news/news'
import '../../node_modules/aos/dist/aos.css'

function Pages() {
  return (
    <>
  <Header />
  <div style={{ height: '95px', padding: '0px' }}>
            </div>
  <Hero />
  <Packages />
  <Services />
  <Process />
  <Faith />
  <News />
  <Inquiry />
  <FAQ />
  <Footer />
    </>
  )
}

export default Pages