import React,{useState} from 'react'
import {auth,createUserWithEmailAndPassword,updateProfile} from './firebase'
import './Signup.css'
import {useNavigate} from 'react-router-dom'

function Signup() {
//      javacscript happens here
const [password,setPassword]=useState('')
const [username, setUserName]=useState('')
const [email,setEmail]=useState('')
const [loading,setLoading]=useState(false)

const navigation =useNavigate()

     const createAccount=()=>{
         
     }

     

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
                    <input value={username} onChange={(e)=>setUserName(e.target.value)} type='text' placeholder="e.g Tumusiime" />
              </div>
              <div className='signup-form-group'>
                    <label>Email Address</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder="e.g tom@gmail.com" />
              </div>
              <div className='signup-form-group'>
                    <label>Password</label>
                    <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="*******" />
              </div>
              <button className='signup-button'>Create Account</button>
           </div>
           <p className='signup-switch'>
                Already Have an Account ? <a href='/login' >Login</a>
           </p>

        </div>
    </div>
  )
}

export default Signup
