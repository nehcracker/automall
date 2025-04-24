// components/HowItWorks/HowItWorks.jsx
import React from 'react';
import styles from './HowItWorks.module.css';

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.title}>📝 Simple Steps to Get You Rolling</h2>
        
        <div className={styles.stepsTimeline}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Choose Your Vehicle</h3>
              <p>Browse our inventory and select the perfect Mercedes-Benz for your needs.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Apply for Hire-Purchase or Select Cash Purchase</h3>
              <p>Decide on your preferred payment method and complete the simple application.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Get Approval Within 24–48 Hours</h3>
              <p>Our team processes your application quickly to minimize wait time.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Sign Paperwork & Schedule Delivery</h3>
              <p>Complete the necessary documentation and arrange for vehicle handover.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3>Drive Away & Enjoy After-Sales Support</h3>
              <p>Start using your vehicle with the confidence of our continued support.</p>
            </div>
          </div>
        </div>
        
        <button className={styles.ctaPrimary}>Get Started Today</button>
      </div>
    </section>
  );
}

export default HowItWorks;
