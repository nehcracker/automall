// components/VehicleLineup/VehicleLineup.jsx
import React from 'react';
import styles from './VehicleLineup.module.css';

function VehicleLineup() {
  return (
    <section className={styles.vehicleLineup}>
      <div className={styles.container}>
        <h2 className={styles.title}>🚗 Choose the Right Mercedes-Benz for Your Business</h2>
        
        <div className={styles.vehicleCategories}>
          <div className={styles.vehicleCard}>
            <div className={styles.vehicleIcon}>🚛</div>
            <h3>Mercedes-Benz Actros Trucks</h3>
            <p className={styles.vehicleTypes}>Long-haul | Tipper | Flatbed | Container Trucks | Refrigerated Units</p>
            <p>Heavy-duty, fuel-efficient, and built for serious business.</p>
            <img src="/actros-truck.jpg" alt="Mercedes-Benz Actros Truck for sale Mombasa" width="800" height="600" loading="lazy" className={styles.vehicleImage} />
          </div>
          
          <div className={styles.vehicleCard}>
            <div className={styles.vehicleIcon}>🚐</div>
            <h3>Public Transport Vans</h3>
            <p className={styles.vehicleTypes}>School Runs | Shuttle Services | Commercial Logistics</p>
            <p>Spacious, comfortable, and made for reliability.</p>
            <img src="/transport-van.jpeg" width="800" height="600" loading="lazy" alt="Public Transport Van for Sale" className={styles.vehicleImage} />
          </div>
          
          <div className={styles.vehicleCard}>
            <div className={styles.vehicleIcon}>🚑</div>
            <h3>Ambulances (Fully Equipped)</h3>
            <p className={styles.vehicleTypes}>Government | Private | NGO Use</p>
            <p>Fully fitted emergency units – direct import, ready to serve.</p>
            <img src="/ambulance.jpg" alt="Fully Equipped Ambulance for sale" width="800" height="600" loading="lazy" className={styles.vehicleImage} />
          </div>
        </div>
        
        <div className={styles.imageCarousel}>
          <img src="actros-truck1.jpg" alt="Mercedes-Benz Actros for sale at Auto Mall Kenya" />
          <img src="vehicle-gallery-2.jpg" alt="Mercedes-Benz Actros 2543" width="800" height="600" loading="lazy"/>
          <img src="vehicle-gallery-3.jpg" alt="Mercedes-Benz Actros 2546" width="800" height="600" loading="lazy" />
          <img src="vehicle-gallery-4.jpg" alt="Mercedes-Benz Actros 2544" width="800" height="600" loading="lazy"/>
          <img src="vehicle-gallery-5.jpg" alt="Mercedes-Benz Actros 1840" width="800" height="600" loading="lazy"/>
        </div>
      </div>
    </section>
  );
}

export default VehicleLineup;
