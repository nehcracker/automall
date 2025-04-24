// App.jsx
import React from 'react';
import styles from './App.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import VehicleLineup from './components/VehicleLineup/VehicleLineup';
import PaymentOptions from './components/PaymentOptions/PaymentOptions';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <HeroSection />
      <VehicleLineup />
      <PaymentOptions />
      <WhyChooseUs />
      <HowItWorks />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;