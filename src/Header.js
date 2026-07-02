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
                 <li className='nav-itme'> <a href='/' >Home</a> </li>

              </ul>

           </nav>
        </div>
       
    </div>
  )
}

export default Header
