import React from 'react';
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
  
  return (
    <>
      <Header />
      {/* <Become/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourproduct" element={<Dealer />} />
        <Route path="/glite" element={<Glite />} />
        <Route path="/gone" element={<Gone />} />
        <Route path="/grazor" element={<Grazor />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
