// ContactSection.jsx
import { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './ContactSection.module.css';

function ContactSection() {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Let's Help You Own Your Next Mercedes-Benz</h2>
      
      <div className={styles.contentWrapper}>
        {/* Map container */}
        <div className={styles.mapContainer}>
          <div className={styles.loadingOverlay} style={{ display: mapLoaded ? 'none' : 'flex' }}>
            <span>Loading map...</span>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254715.3743449602!2d39.50145010316051!3d-4.035172110722726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa!5e0!3m2!1sen!2ske!4v1745526501408!5m2!1sen!2ske"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            title="Auto Mall Drivethru Location"
          ></iframe>
        </div>

        {/* Contact info */}
        <div className={styles.contactInfo}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          
          <div className={styles.contactGrid}>
            {/* Phone */}
            <a 
              href="tel:+254736033581" 
              className={styles.contactItem}
              aria-label="Call us"
            >
              <div className={`${styles.contactIcon} ${styles.phoneIcon}`}>
                <FaPhone />
              </div>
              <div className={styles.contactText}>
                <h4>Call Us</h4>
                <p>+254 736 033 581</p>
              </div>
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/254758947924" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactItem}
              aria-label="Contact us on WhatsApp"
            >
              <div className={`${styles.contactIcon} ${styles.whatsappIcon}`}>
                <FaWhatsapp />
              </div>
              <div className={styles.contactText}>
                <h4>WhatsApp</h4>
                <p>+254 758 947 924</p>
              </div>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:sales@automallkenya.com" 
              className={styles.contactItem}
              aria-label="Email us"
            >
              <div className={`${styles.contactIcon} ${styles.emailIcon}`}>
                <FaEnvelope />
              </div>
              <div className={styles.contactText}>
                <h4>Email Us</h4>
                <p>sales@automallkenya.com</p>
              </div>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/automallkenya/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactItem}
              aria-label="Visit our Facebook page"
            >
              <div className={`${styles.contactIcon} ${styles.facebookIcon}`}>
                <FaFacebook />
              </div>
              <div className={styles.contactText}>
                <h4>Facebook</h4>
                <p>Follow us for updates</p>
              </div>
            </a>
            

           
            {/* Visit Us */}
            {/* Uncomment if you want to show the location icon
            <div className={styles.contactItem}>
              <div className={`${styles.contactIcon} ${styles.locationIcon}`}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.contactText}>
                <h4>Visit Our Yard</h4>
                <p>Auto Mall Kenya, Nairobi</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
