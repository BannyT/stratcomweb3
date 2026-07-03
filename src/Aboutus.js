import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions' },
    { title: 'Excellence', desc: 'Delivering quality in every service we provide' },
    { title: 'Integrity', desc: 'Building trust through transparency and honesty' },
    { title: 'Global Impact', desc: 'Empowering professionals worldwide' }
  ];

  const stats = [
    { number: '5+', label: 'Years of Excellence' },
    { number: '2k+', label: 'Students Trained' },
    { number: '50+', label: 'Certified Instructors' },
    { number: '98%', label: 'Success Rate' }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Hero / Header */}
        <div className="about-header">
          <span className="about-badge">Our Story</span>
          <h2 className="about-title">About <span className="highlight">StratCom</span></h2>
          <p className="about-subtitle">
            Empowering the next generation of tech professionals with world-class training and certifications
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              Founded in 2018, <strong>StratCom</strong> has grown into a premier training and certification hub for 
              aspiring IT professionals. We bridge the gap between theoretical knowledge and real-world application, 
              offering hands-on bootcamps, networking courses, hardware repair training, and industry-recognized 
              Cisco certifications.
            </p>
            <p>
              Our mission is simple: to equip learners with the skills they need to thrive in a digital-first economy. 
              Whether you're starting from scratch or advancing your career, StratCom provides the roadmap to success.
            </p>
            <div className="mission-vision">
              <div className="mission">
                <h4>🎯 Our Mission</h4>
                <p>Democratize tech education and create job-ready professionals through immersive, practical training.</p>
              </div>
              <div className="vision">
                <h4>🌟 Our Vision</h4>
                <p>To be Africa's leading tech training ecosystem, recognized globally for excellence and innovation.</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2h8ZW58MHx8MHx8fDA%3D" 
              alt="Team collaboration"
            />
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default AboutUs;