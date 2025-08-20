import React from "react";
import Navbar from "../components/Navbar";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MediCAL</h1>
          <p>Your trusted partner in modern healthcare</p>
          <button className="hero-btn">Book Appointment</button>
        </div>
      </section>

      {/* Services Section */}
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
          <div className="feature-card">
            <h3>Payment Process</h3>
            <p>Secure and easy online payments for consultations and services.</p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors">
        <h2>Our Doctor</h2>
        <div className="doctor-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
            alt="Doctor"
            className="doctor-img"
          />
          <h3>Dr. Huzaifah Benito Maruhom</h3>
          <p>Internist</p>
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
