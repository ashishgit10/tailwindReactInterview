import React from 'react'
import Navbar from './components/Navbar'

import Heropage from './components/Heropage'
import CompSection from './components/CompSection'

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
        <CompSection/>
      </div>
    </>
  )
}
