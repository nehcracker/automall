// components/PaymentOptions/PaymentOptions.jsx
import React from 'react';
import styles from './PaymentOptions.module.css';

function PaymentOptions() {
  return (
    <section className={styles.paymentOptions}>
      <div className={styles.container}>
        <h2 className={styles.title}>💰 Hire-Purchase or Cash? We've Got You Covered</h2>
        
        <div className={styles.paymentColumns}>
          <div className={styles.paymentColumn}>
            <h3>Hire-Purchase</h3>
            <ul className={styles.benefitsList}>
              <li>Low upfront deposit</li>
              <li>Fast-track approval</li>
              <li>Easy monthly payments</li>
              <li>Zero collateral</li>
            </ul>
          </div>
          
          <div className={styles.paymentColumn}>
            <h3>100% Cash Sales</h3>
            <ul className={styles.benefitsList}>
              <li>Instant ownership</li>
              <li>Discounted pricing</li>
              <li>Priority processing</li>
              <li>Drive-away ready</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.ctaButtons}>
          <button className={styles.ctaPrimary}>Apply Now</button>
          <button className={styles.ctaSecondary}>Request Invoice</button>
        </div>
      </div>
    </section>
  );
}

export default PaymentOptions;
