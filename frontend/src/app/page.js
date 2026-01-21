import React from 'react'
import Banner from './components/Banner'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Intro/>
      <Footer/>
    </div>
  )
}

export default page