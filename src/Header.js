import React from 'react'
import './Header.css'

function Header() {
    // javascript lives here

    
  return (
    <div className='header'>
        <div className='container headercontainer'>
           <div className='logo'>
                  <span className='logotext'>StratCom Ug</span>
           </div>
           <nav className='nav-menu'>
              <ul className='nav-list'>
                 <li className='nav-item'> <a href='/' >Home</a> </li>
                 <li className='nav-item'> <a href='/aboutus' >About Us</a> </li>
                 <li className='nav-item'> <a href='/services' >Services</a> </li>
                 <li className='nav-item'> <a href='/signup' >Signup</a> </li>
                 <li className='nav-item'> <a href='/login' >Login</a> </li>
                 

              </ul>

           </nav>
        </div>
       
    </div>
  )
}

export default Header
