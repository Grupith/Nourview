import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const { currentUser, logout } = useAuth()
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      navigate('/Login')
      
    } catch {
      setError('failed to logout')
    }

  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{currentUser && currentUser.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
