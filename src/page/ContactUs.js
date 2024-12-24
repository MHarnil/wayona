import React from 'react'
import { motion } from "framer-motion";
import Contact from '../components/ContactUs/Contact'
import ConFill from '../components/ContactUs/ConFill'

const ContactUs = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Contact />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <ConFill />
      </motion.div>

    </>
  )
}

export default ContactUs
