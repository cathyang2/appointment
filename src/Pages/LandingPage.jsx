import React from "react";
import Navbar from "../components/Navbar";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
     
      <Navbar />

      
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MediCAL</h1>
          <p>Your trusted partner in modern healthcare</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      
      {/* Features Section */}
<section className="features">
  <h2>Our Services</h2>
  <div className="features-container">
    <div className="feature-card">
      <h3>Appointments</h3>
      <p>Book and manage your medical appointments online.</p>
    </div>
    <div className="feature-card">
      <h3>E-Prescriptions</h3>
      <p>Access and track your prescriptions anytime.</p>
    </div>
    <div className="feature-card">
      <h3>Patient Records</h3>
      <p>Keep all your health records in one secure place.</p>
    </div>
    {/* ✅ New Payment Process Card */}
    <div className="feature-card">
      <h3>Payment Process</h3>
      <p>Secure and easy online payments for consultations and services.</p>
    </div>
  </div>
</section>

  {/* Footer */}
  <footer className="footer">
        <p>© 2025 MediCAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
