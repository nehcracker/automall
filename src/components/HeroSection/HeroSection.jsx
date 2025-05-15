// components/HeroSection/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function HeroSection() {
  // WhatsApp number (Kenya format without the + sign)
  const whatsAppNumber = "254758947924";

  // Updated structured message with hire-purchase requirements
  const structuredQuestions = encodeURIComponent(
    "Hi, I'm interested in hire-purchase options."
  );

  // Modified WhatsApp URL to use API endpoint instead of wa.me
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${structuredQuestions}`;
  
  const handleWhatsAppRedirect = () => {
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Auto mall Drivethru | Hire purchase | Cash payments
        </h1>
        <p className={styles.subheadline}>
          Fresh Import Mercedes-Benz Actros Trucks, Public Transport Vans & Fully Equipped Ambulances – Available on Low Deposit Hire-Purchase or Full Cash Purchase.
        </p>
        <div className={styles.ctaButtons}>
          <button 
            className={styles.ctaPrimary} 
            onClick={handleWhatsAppRedirect}
          >
            <FaWhatsapp className={styles.whatsappIcon} /> Apply for Hire-purchase
          </button>
          <a 
            href="tel:+254736033581" 
            className={styles.ctaSecondary}
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;