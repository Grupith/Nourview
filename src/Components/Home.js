import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='Home'>
        <div className='Title'>Nourview</div>
        <h2>Company Status Board Software</h2>
        <h3>View active jobs, Organize information and display a dashboard to your employees. </h3>
        <div className='ButtonWrapper'>
            <Link to='/Login' className='Button'>Login</Link>
            <Link to='/Signup' className='Med-Button'>Signup</Link>
        </div>
    </div>
  )
}
