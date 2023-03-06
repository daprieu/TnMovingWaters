import React from 'react'
import { Route, Routes } from 'react-router'
import Boats from './Boats'
import ContactUs from './ContactUs'
// import FishingReports from './FishingReports'
import FishingTripOptions from './FishingTripOptions'
import Footer from './Footer'
import Guides from './Guides'
import Home from './Home'
import { MWNavBar } from './NavBar'
import Sponsors from './Sponsors'

const TnMovingWatersViews = () => {
  return (
  <>
  <MWNavBar/>
  <div style={{height: "100%"}}>
  <Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="/fishing-trip-options" element={<FishingTripOptions />} />
  {/* <Route path="/fishing-reports" element={<FishingReports />} /> */}
  <Route path="/boats" element={<Boats />} />
  <Route path="/guides" element={<Guides />} />
  <Route path="/contact-us" element={<ContactUs />} />
  
  </Routes>
  <Sponsors/>
  <Footer/>
  </div>
  </>
  )
}

export default TnMovingWatersViews