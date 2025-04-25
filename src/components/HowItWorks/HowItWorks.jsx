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
      "Hello Auto mall Kenya!\n\n" +
      "I'm interested in applying for Hire-purchase. Here's some information about my requirements:\n" +
      "1. How much deposit do you have available?\n" +
      "2. When are you looking to make the purchase?\n" +
      "3. Is this your first truck/vehicle purchase?\n" +
      "4. What type of vehicle are you interested in? (Actros Truck/ Transport Van/Ambulance)\n" +
      "What will you be using the vehicle for?"
    );

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
