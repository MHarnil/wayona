import React from 'react'
import { motion } from "framer-motion";
import AboutIntro from '../components/AboutUs/AboutIntro'
import WeAre from '../components/AboutUs/WeAre'
import MeetTeam from '../components/AboutUs/MeetTeam'
import Journey from '../components/AboutUs/Journey'
import Leadership from '../components/AboutUs/Leadership'

const AboutUs = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <AboutIntro />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <WeAre />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Leadership />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <MeetTeam />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Journey />
      </motion.div>

    </>
  )
}

export default AboutUs
