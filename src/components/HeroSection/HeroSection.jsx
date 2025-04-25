// components/HeroSection/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function HeroSection() {
  // WhatsApp number (Kenya format without the + sign)
  const whatsAppNumber = "254758947924";

  // Prepare structured questions in a pre-filled message
  const structuredQuestions = encodeURIComponent(
    "Hello Auto mall Kenya!\n\n" +
    "I'm interested in applying for Hire-purchase. Here's some information about my requirements:\n" +
    "1. How much deposit do you have available?\n" +
    "2. When are you looking to make the purchase?\n" +
    "3. Is this your first truck/vehicle purchase?\n" +
    "4. What type of vehicle are you interested in? (Actros Truck/ Transport Van/Ambulance)\n" +
    "What will you be using the vehicle for?"
  );

  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${structuredQuestions}`;
  
  const handleWhatsAppRedirect = () => {
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Auto mall Drivethru | Hire purchase | Cash payments</h1>
        <p className={styles.subheadline}>
          Fresh Import Mercedes-Benz Actros Trucks, Public Transport Vans & Fully Equipped Ambulances – Available on Low Deposit Hire-Purchase or Full Cash Purchase.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaPrimary} onClick={handleWhatsAppRedirect}>
            <FaWhatsapp className={styles.whatsappIcon} /> Apply for Hire-purchase
          </button>
          <a href="tel:+254736033581" className={styles.ctaSecondary}>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;