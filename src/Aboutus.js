import React from 'react'
import './Aboutus.css'

function Aboutus() {

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
    <div className='about-section'>
         <div className='about-container'>
              <div className='about-header'>
                   <span className='about-badge'>Our Story</span>
                   <h2 className='about-title'> About Stratcom</h2>
                   <p className='about-subtitle'> Empowering the next generation of Tech Programmers</p>
              </div>
              <div className='about-content'>
                  <div className='about-text'>
                        <h3>Who We are</h3>
                        <p>Stratcom is a full-service strategic communications and marketing company dedicated to helping businesses, organizations, and institutions build meaningful connections with their audiences. We specialize in branding, public relations, digital marketing, corporate communications, media relations, content creation, and reputation management. By combining creative storytelling with data-driven strategies, we develop tailored communication solutions that enhance brand visibility, strengthen stakeholder engagement, and drive sustainable growth. Whether launching a new brand, managing corporate communications, or executing impactful marketing campaigns, Stratcom partners with clients to deliver measurable results and lastin</p>
                        <p>Mission Statement

To empower organizations with innovative strategic communication, branding, and marketing solutions that inspire trust, foster meaningful engagement, and drive sustainable growth through creativity, integrity, and measurable impact.</p>
                  </div>

              </div>
         </div>
    </div>
  )
}

export default Aboutus
