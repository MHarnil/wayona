import React from 'react'
import { motion } from "framer-motion";
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

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Slider />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Saveing />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Video />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <GLitePage />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <LightIntro />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <GOnePage />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <OneIntro />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <GRazorPage />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <RazorIntro />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <BikeAbout />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Testimonials />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Verified />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Faq />
      </motion.div>

    </>
  )
}

export default Home
