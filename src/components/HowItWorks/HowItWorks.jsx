// components/HowItWorks/HowItWorks.jsx
import React from 'react';
import styles from './HowItWorks.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function HowItWorks() {
  const handleWhatsAppRedirect = () => {
    // WhatsApp number (Kenya format without the + sign)
    const whatsAppNumber = "254758947924";

    // Prepare structured questions in a pre-filled message
    const structuredQuestions = encodeURIComponent(
      "Hi, I'm interested in hire-purchase options."
    );

    // Google Analytics event tracking for WhatsApp
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': 'WhatsApp HowItWorks Button'
      });
    }

    const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${structuredQuestions}`;
    window.open(whatsAppUrl, '_blank');
  };

  return (
    <section className={styles.container} id="howItWorks">
      <h2 className={styles.title}>Simple Steps to Get You Rolling</h2>
      
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.stepIcon}>1</div>
          <h3 className={styles.stepTitle}>Select the Vehicle</h3>
          <p className={styles.stepDescription}>Choose your preferred vehicle from the available options.</p>
        </div>
        
        <div className={styles.connector}></div>
        
        <div className={styles.step}>
          <div className={styles.stepIcon}>2</div>
          <h3 className={styles.stepTitle}>Pay a 30% Deposit</h3>
          <p className={styles.stepDescription}>Make an initial down payment of 30% of the vehicle's value.</p>
        </div>
        
        <div className={styles.connector}></div>
        
        <div className={styles.step}>
          <div className={styles.stepIcon}>3</div>
          <h3 className={styles.stepTitle}>Sign the Hire Purchase Agreement</h3>
          <p className={styles.stepDescription}>Review and sign the official hire purchase contract outlining terms.</p>
        </div>
      </div>
      
      <button className={styles.ctaPrimary} onClick={handleWhatsAppRedirect}>
        <FaWhatsapp className={styles.whatsappIcon} /> Apply for Hire-purchase
      </button>
    </section>
  );
}

export default HowItWorks;
