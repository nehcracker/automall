// SocialSidebar.jsx
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sidebar after user scrolls down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const trackWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': 'WhatsApp Sidebar Button'
      });
    }
  };

  const trackPhoneCall = () => {
    if (window.gtag) {
      window.gtag('event', 'phone_call', {
        'event_category': 'engagement',
        'event_label': 'Phone Sidebar Button'
      });
    }
  };

  return (
    <div className={`social-sidebar ${visible ? 'visible' : ''}`}>
      <a 
        href="https://wa.me/254758947924" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon whatsapp"
        aria-label="Contact us on WhatsApp"
        onClick={trackWhatsAppClick}
      >
        <FaWhatsapp />
        <span className="tooltip">WhatsApp: +254 758 947 924</span>
      </a>
      
      <a 
        href="https://www.facebook.com/automallkenya/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon facebook"
        aria-label="Visit our Facebook page"
      >
        <FaFacebook />
        <span className="tooltip">Facebook</span>
      </a>
      
      <a 
        href="tel:+254736033581" 
        className="social-icon phone"
        aria-label="Call us"
        onClick={trackPhoneCall}
      >
        <FaPhone />
        <span className="tooltip">Call: +254 736 033 581</span>
      </a>
      
      <a 
        href="mailto:sales@automallkenya.com" 
        className="social-icon email"
        aria-label="Email us"
      >
        <FaEnvelope />
        <span className="tooltip">Email: sales@automallkenya.com</span>
      </a>
    </div>
  );
};

export default SocialSidebar;
