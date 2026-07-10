import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signup-page'>
        <div className='signup-card'>
           <div className='signup-header'>
                 <span className='signup-brand'><a href='/'>Stratcom</a> </span>
                 <h2>Create Account</h2>
                 <p> Create Your Account</p>
           </div>
           <div className='signup-form'>
           <div className='signup-form-group'>
                    <label>User Name</label>
                    <input type='text' placeholder="e.g Tumusiime" />
              </div>
              <div className='signup-form-group'>
                    <label>Email Address</label>
                    <input type='text' placeholder="e.g tom@gmail.com" />
              </div>
              <div className='signup-form-group'>
                    <label>Password</label>
                    <input type='password' placeholder="*******" />
              </div>
              <button className='signup-button'>Sign In</button>
           </div>
           <p className='signup-switch'>
                Already Have an Account ? <a href='/login' >Login</a>
           </p>

        </div>
    </div>
  )
}

export default Signup
