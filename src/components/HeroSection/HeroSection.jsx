// components/HeroSection/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Auto Mall Drivethru | Hire Purchase | Cash Payments</h1>
        <p className={styles.subheadline}>
          Fresh Import Mercedes-Benz Actros Trucks, Public Transport Vans & Fully Equipped Ambulances – Available on Low Deposit Hire-Purchase or Full Cash Purchase.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaPrimary}>Browse Vehicles</button>
          <button className={styles.ctaSecondary}>Apply for Hire-Purchase</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
