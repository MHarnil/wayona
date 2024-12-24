import React from 'react';
import { motion } from "framer-motion";
import Home from './page/Home';
import AboutUs from './page/AboutUs';
import Dealer from './page/Dealer';
import Glite from './page/Glite';
import Gone from './page/Gone';
import Grazor from './page/Grazor';
import { Route, Routes } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import ContactUs from './page/ContactUs';
import Become from './components/Dealer/Become';

const App = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Header />
      </motion.div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dealerlocator" element={<Dealer />} />
        <Route path="/becomedealer" element={<Become />} />
        <Route path="/glite" element={<Glite />} />
        <Route path="/gone" element={<Gone />} />
        <Route path="/grazor" element={<Grazor />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
