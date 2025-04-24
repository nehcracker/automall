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
            <img src="/actros-truck.jpg" alt="Mercedes-Benz Actros Truck" className={styles.vehicleImage} />
          </div>
          
          <div className={styles.vehicleCard}>
            <div className={styles.vehicleIcon}>🚐</div>
            <h3>Public Transport Vans</h3>
            <p className={styles.vehicleTypes}>School Runs | Shuttle Services | Commercial Logistics</p>
            <p>Spacious, comfortable, and made for reliability.</p>
            <img src="/transport-van.jpeg" alt="Public Transport Van" className={styles.vehicleImage} />
          </div>
          
          <div className={styles.vehicleCard}>
            <div className={styles.vehicleIcon}>🚑</div>
            <h3>Ambulances (Fully Equipped)</h3>
            <p className={styles.vehicleTypes}>Government | Private | NGO Use</p>
            <p>Fully fitted emergency units – direct import, ready to serve.</p>
            <img src="/ambulance.jpg" alt="Fully Equipped Ambulance" className={styles.vehicleImage} />
          </div>
        </div>
        
        <div className={styles.imageCarousel}>
          <img src="actros-truck1.jpg" alt="Vehicle Gallery" />
          <img src="vehicle-gallery-2.jpg" alt="Vehicle Gallery" />
          <img src="vehicle-gallery-3.jpg" alt="Vehicle Gallery" />
          <img src="vehicle-gallery-4.jpg" alt="Vehicle Gallery" />
          <img src="vehicle-gallery-5.jpg" alt="Vehicle Gallery" />
        </div>
      </div>
    </section>
  );
}

export default VehicleLineup;
