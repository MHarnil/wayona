import React from 'react'
import ScooterDetails from '../components/G-razor/ScooterDetails'
import BikeSlider from '../components/G-razor/BikeSlider'
import Specification from '../components/global/Specification'
import BookScooter from '../components/G-razor/BookScooter'
import Features from '../components/global/Features'
import Headlight from '../components/global/Headlight'

const Grazor = () => {
    return (
        <>
            <ScooterDetails />
            <Features />
            <BikeSlider />
            <Headlight/>
            <Specification />
            <BookScooter />
        </>
    )
}

export default Grazor
