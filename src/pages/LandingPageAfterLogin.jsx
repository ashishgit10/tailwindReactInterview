import React from 'react'
import Navbar from './components/Navbar'

import Heropage from './components/Heropage'
import CompSection from './components/CompSection'
import Resource from './components/Resource'
import EventSection from './components/EventSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export const LandingPageAfterLogin = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Heropage />
      </div>
      <div>
        <CompSection />
      </div>
      <div>
        <Resource />
      </div>
      <div className='drop-shadow-xl bg-white'>
        <EventSection />
      </div>
      <div>
        <EmailSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
