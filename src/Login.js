import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-page'>
        <div className='login-card'>
           <div className='login-header'>
                 <span className='login-brand'> Stratcom</span>
                 <h2>Welcome Back</h2>
                 <p> Sign In to Access Your Account</p>
           </div>
           <div className='login-form'>
              <div className='login-form-group'>
                    <label>Email Address</label>
                    <input type='text' placeholder="e.g tom@gmail.com" />
              </div>
              <div className='login-form-group'>
                    <label>Password</label>
                    <input type='password' placeholder="*******" />
              </div>
           </div>

        </div>
    </div>
  )
}

export default Login
