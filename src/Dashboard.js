import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-container'>
         <div className='dashboardtopbar'>
                <div className='topleft'>        
                    <span className='logo'> STratcom</span>
                    <span className='greetings'>Hello STRACOM USER</span>
                </div>
                <button className='logout'>Logout</button>
          </div> 
    </div>
  )
}

export default Dashboard
