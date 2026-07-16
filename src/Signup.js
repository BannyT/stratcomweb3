import React,{useState} from 'react'
import {auth,createUserWithEmailAndPassword,updateProfile} from './firebase'
import './Signup.css'
import {useNavigate} from 'react-router-dom'
import { async } from '@firebase/util'

function Signup() {
//      javacscript happens here
const [password,setPassword]=useState('')
const [username, setUserName]=useState('')
const [email,setEmail]=useState('')
const [loading,setLoading]=useState(false)
const [error, setError]=useState('')

const navigation =useNavigate()

     const createAccount= async()=>{
            setError('')
            if(password.length<6){
                  setError('Password Must Have more than 6 characters')
                  return;
            }
            setLoading(true)
            try{
                  const userCredential = await createUserWithEmailAndPassword(auth,email,password)
                  const user =userCredential.user;
                  await updateProfile(user,{displayName:username})
                  alert('Account Created Successfully')
            }   
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
