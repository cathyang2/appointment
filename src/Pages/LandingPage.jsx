import React from "react";
import Navbar from "../components/Navbar";
import "./LandingPage.css";
import zaiDoctor from "../assets/doctor/zai.jpg";


export default function LandingPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MediCAL</h1>
          <p>Your trusted partner in modern healthcare</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="features">
  <h2>Services</h2>
  <div className="features-container">

    {/* General Medicine & Family Care */}
    <div className="feature-category">
      <h3>General Medicine & Family Care</h3>
      <div className="service-grid">
        <div className="service-card">
          <p>Consultation</p>
          <span>1 Doctor Available</span>
        </div>
        <div className="service-card">
          <p>General Checkup</p>
          <span>1 Doctor Available</span>
        </div>
      </div>
    </div>

    {/* Psychology Services */}
    <div className="feature-category">
      <h3>Psychology Services</h3>
      <div className="service-grid">
        <div className="service-card">
          <p>50-Minute Session</p>
          <span>1 Doctor Available</span>
        </div>
      </div>
    </div>

    {/* General Dentistry */}
    <div className="feature-category">
      <h3>General Dentistry</h3>
      <div className="service-grid">
        <div className="service-card">
          <p>Cosmetic Dentistry</p>
          <span>1 Doctor Available</span>
        </div>
        <div className="service-card">
          <p>Teeth Whitening</p>
          <span>1 Doctor Available</span>
        </div>
        <div className="service-card">
          <p>Braces & Invisalign</p>
          <span>1 Doctor Available</span>
        </div>
      </div>
    </div>

    {/* Dermatology & Cosmetic Treatments */}
    <div className="feature-category">
      <h3>Dermatology & Cosmetic Treatments</h3>
      <div className="service-grid">
        <div className="service-card">
          <p>Skin Whitening</p>
          <span>1 Doctor Available</span>
        </div>
        <div className="service-card">
          <p>Hydration</p>
          <span>1 Doctor Available</span>
        </div>
        <div className="service-card">
          <p>Skin Cleaner</p>
          <span>1 Doctor Available</span>
        </div>
        <div className="service-card">
          <p>Testing</p>
          <span>1 Doctor Available</span>
        </div>
        <div className="service-card">
          <p>General Checkups</p>
          <span>1 Doctor Available</span>
        </div>
      </div>
    </div>

  </div>
</section>




      {/* Doctors Section */}
      <section className="doctors">
  <h2>Doctor</h2>
  <div className="doctor-card">
    <img
      src={zaiDoctor}
      alt="Dr. Zai"
      className="doctor-img"
    />
    <h3>Dr. Huzaifah Benito Maruhom</h3>
    <p className="doctor-info">
      Internist, Medical Doctor MD at Polymedic Limketkai Medical Clinic,
      Internist, Medical Doctor MD at Capitol University Medical Center and
      Resident Physician, Internal Medicine at Capitol University Medical Center
    </p>
    <button className="doctor-btn">Book with Doctor</button>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MediCAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
