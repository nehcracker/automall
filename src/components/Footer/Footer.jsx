// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.footerLinks}>
          <a href="#">About Auto Mall Drivethru</a>
          <a href="#">Browse Inventory</a>
          <a href="#">Financing Options</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>
        
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook">
            <span className={styles.socialIcon}>📘</span>
          </a>
          <a href="#" aria-label="Instagram">
            <span className={styles.socialIcon}>📸</span>
          </a>
          <a href="#" aria-label="WhatsApp">
            <span className={styles.socialIcon}>📱</span>
          </a>
        </div>
        
        <p className={styles.copyright}>© {new Date().getFullYear()} Auto Mall Drivethru. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
