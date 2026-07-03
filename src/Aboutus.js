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
         </div>
    </div>
  )
}

export default Aboutus
