import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

  const { logout } = useAuth()
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
      try {
        await logout()
        navigate('/')
        
      } catch {
        setError('failed to logout')
      }
    }

  return (
    <div className='Sidebar'>
      <div className='SidebarMain'>
        <h1>Nourview</h1>
        <h2>Company Name</h2>
        <ul className='SidebarButtonContainer'>
          <li className='SidebarButton'>Dashboard</li>
          <li className='SidebarButton'>Employees</li>
          <li className='SidebarButton'>Messages</li>
          <br />
          <li className='SidebarButton'>Create Board</li>
        </ul>
      </div>
      <div className='SidebarFooterWrapper'>
        <div className='SidebarFooter'>
          <span className='LogoutButton' onClick={handleLogout}>Logout</span>
          <FontAwesomeIcon icon="fa-solid fa-bars" size='2x' className='BarsIcon'/>
        </div>
      </div>
    </div>
  )
}
 