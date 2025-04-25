// App.jsx
import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import VehicleLineup from './components/VehicleLineup/VehicleLineup';
import PaymentOptions from './components/PaymentOptions/PaymentOptions';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';

function App() {
  return (
    <HelmetProvider>
    <Helmet>
        <title>Auto Mall Kenya | Premium Used Cars in Mombasa | Hire-Purchase terms</title>
        <meta name="description" content="Auto Mall KenyaFresh Import Mercedes-Benz Actros Trucks, Public Transport Vans & Fully Equipped Ambulances – Available on Low Deposit Hire-Purchase or Full Cash Purchase." />
        <meta name="keywords" content="used cars, Hire-purchase, car loans, low deposit cars, car for sale, Mercedes-benz Actros, pre-owned vehicles, car financing, auto mall, Mombasa Kenya" />
        <link rel="canonical" href="https://automallkenya.com" />
        <meta property="og:image" content="https://automallkenya.com/automall1.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="en_KE" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="H1pPkgJ0IRXmB7-LRAdeivnL-j9qgZCUnAf7aS3g34I" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="application-name" content="Auto Mall Kenya" />
        <meta name="apple-mobile-web-app-title" content="Auto Mall Kenya" />
        <meta name="description" content="Quality pre-owned vehicles & Trucks with flexible financing hire-purchase options in Mombasa." />
        <meta name="keywords" content="used cars, Hire-purchase, car loans, Actros 2543, Actros 2545, Actros 2546, low deposit cars, car for sale, Mercedes-benz Actros, pre-owned vehicles, car financing, auto mall, Mombasa Kenya" />
        <meta name="author" content="Auto Mall Kenya" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="H1pPkgJ0IRXmB7-LRAdeivnL-j9qgZCUnAf7aS3g34I" />
        <meta name="twitter:site" content="@automallkenya" />
        <meta name="twitter:creator" content="@automallkenya" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Mall Kenya | Premium Used Cars & Trucks for hire purchase" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automallkenya.com" />
        <meta property="og:title" content="Auto Mall Kenya | Premium Used Cars" />
        <meta property="og:description" content="Quality pre-owned vehicles & Trucks with flexible financing hire-purchase options in Mombasa." />
        <meta property="og:image" content="https://automallkenya.com/automall1.jpg" />
        <meta property="og:image:alt" content="Auto Mall Kenya | Premium Used Cars in Mombasa | Hire-Purchase terms" />
        <meta property="og:site_name" content="Auto Mall Kenya" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:locale:alternate" content="en_UG" />
        <meta property="og:locale:alternate" content="en_TZ" />
        <meta property="og:locale:alternate" content="en_RW" />
        <meta property="og:locale:alternate" content="en_BW" />
        <meta property="og:locale:alternate" content="en_ZA" />


        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://automallkenya.com" />
        <meta property="twitter:title" content="Auto Mall Kenya | Premium Used Cars" />
        <meta property="twitter:description" content="Quality pre-owned vehicles with flexible financing options in Nairobi." />
        <meta property="twitter:image" content="https://automallkenya.com/twitter-image.jpg" />
      </Helmet>
    <div className={styles.app}>
      <Navbar />
      <div className={styles.backToTop} id="top"></div>
      {/* Hero Section */}
      <HeroSection />
      {/* Main Content */}
      <VehicleLineup />

      <PaymentOptions />
      <WhyChooseUs />
      <HowItWorks />
      <ContactSection />
      <Footer />
      <SocialSidebar />
      <div className={styles.backToTop}>
        <a href="#top" backToTopLink>Back to Top</a>
      </div>
    </div>
    </HelmetProvider>
  );
}

export default App;