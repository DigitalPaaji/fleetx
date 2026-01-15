import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Intro from './components/Intro'
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