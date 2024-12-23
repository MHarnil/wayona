import React from 'react'
import Slider from '../components/home/Slider'
import LightIntro from '../components/home/LightIntro'
import OneIntro from '../components/home/OneIntro'
import RazorIntro from '../components/home/RazorIntro'
import Testimonials from '../components/home/Testimonials'
import Verified from '../components/home/Verified'
import Faq from '../components/home/Faq'
import Saveing from '../components/home/Saveing'
import GLitePage from '../components/home/GLitePage'
import Video from '../components/home/Video'
import GOnePage from '../components/home/GOnePage'
import GRazorPage from '../components/home/GRazon'
import BikeAbout from '../components/home/BikeAbot'

const Home = () => {
  return (
    <>
      <Slider />
      <Saveing />
      <Video />
      <GLitePage />
      <LightIntro />
      <GOnePage />
      <OneIntro />
      <GRazorPage />
      <RazorIntro />
      <BikeAbout />
      <Testimonials />
      <Verified />
      <Faq />
    </>
  )
}

export default Home
