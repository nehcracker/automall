// components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import styles from './WhyChooseUs.module.css';

function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>✅ We Keep You on the Road with Confidence</h2>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <p>Fresh Imports Only</p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <p>Mercedes-Benz Specialists</p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <p>Quick Financing Process</p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <p>Nationwide Delivery</p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <p>Transparent Terms</p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.checkIcon}>✓</span>
            <p>Excellent After-Sales Service</p>
          </div>
        </div>
        
        <div className={styles.testimonial}>
          <blockquote>
            "Auto Mall Drivethru helped me get my first Actros on hire-purchase without stress. The whole process was transparent and fast!"
          </blockquote>
          <cite>– Michael O.</cite>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
