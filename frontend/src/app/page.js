import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Intro from './components/Intro'

function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Intro/>
    </div>
  )
}

export default page