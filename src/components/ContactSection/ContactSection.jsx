// components/ContactSection/ContactSection.jsx
import React from 'react';
import styles from './ContactSection.module.css';

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Help You Own Your Next Mercedes-Benz</h2>
        
        <div className={styles.contactLayout}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <p>Call Us: [Your Phone Number]</p>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <p>Email: [Your Email Address]</p>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <p>Visit Our Yard: [Your Address]</p>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>💬</span>
              <p>WhatsApp Available</p>
            </div>
          </div>
          
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="vehicleType">Vehicle Type</label>
              <select id="vehicleType" name="vehicleType" required>
                <option value="">Select Vehicle Type</option>
                <option value="actros">Mercedes-Benz Actros Truck</option>
                <option value="van">Public Transport Van</option>
                <option value="ambulance">Ambulance</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="paymentMethod">Payment Method</label>
              <select id="paymentMethod" name="paymentMethod" required>
                <option value="">Select Payment Method</option>
                <option value="hirePurchase">Hire-Purchase</option>
                <option value="cash">Cash Purchase</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            
            <button type="submit" className={styles.ctaPrimary}>Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
