import React from 'react'
import Specification from '../components/global/Specification'
import ScooterDetails from '../components/G-lite/ScooterDetails'
import BookScooter from '../components/G-lite/BookScooter'
import BikeSlider from '../components/G-lite/BikeSlider'
import Features from '../components/global/Features'
import Headlight from '../components/global/Headlight'

const Glite = () => {
  return (
    <>
     <ScooterDetails/> 
     <Features/>
     <BikeSlider/> 
     <Headlight/>
     <Specification/> 
     <BookScooter/>
    </>
  )
}

export default Glite
