import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='Home'>
        <img src='images/nourview.png' alt='logo' className='Logo'/>
        <h2>Board Based Project Management Software</h2>
        <h3>View active jobs, Organize information and Display a dashboard to your employees/clients. </h3>
        <div className='ButtonWrapper'>
            <Link to='/Login' className='Button'>Login</Link>
            <Link to='/Signup' className='Med-Button'>Signup</Link>
        </div>
    </div>
  )
}
