import React from 'react'
import ScooterDetails from '../components/G-one/ScooterDetails'
import Specification from '../components/global/Specification'
import BookScooter from '../components/G-lite/BookScooter'
import BikeSlider from '../components/G-one/BikeSlider'
import Features from '../components/global/Features'
import Headlight from '../components/global/Headlight'

const Gone = () => {
    return (
        <>
            <ScooterDetails />
            <Features />
            {/* <BikeSlider /> */}
            <Headlight/>
            <Specification />
            <BookScooter />
        </>
    )
}

export default Gone
