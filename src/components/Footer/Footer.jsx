// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.footerLinks}>
          <a href="www.automallkenya.com">About Auto Mall Drivethru</a>
          <a href="www.automallkenya.com">Browse Inventory</a>
          <a href="www.automallkenya.com">Financing Options</a>
          <a href="www.automallkenya.com">Contact Us</a>
        </div>
        
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/automallkenya/" aria-label="Facebook">
            <span className={styles.socialIcon}>📘</span>
          </a>
          <a href="https://wa.me/254758947924" aria-label="WhatsApp">
            <span className={styles.socialIcon}>📱</span>
          </a>
        </div>
        
        <p className={styles.copyright}>© {new Date().getFullYear()} Auto Mall Drivethru. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
