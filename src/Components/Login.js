import React from 'react'
import { Link } from 'react-router-dom';
import { MdEditOff } from 'react-icons/md';

export default function Login() {
  return (
    <div className='FormContainer'>
      <div className='HomeIconWrapper'>
        <Link to='/'>
              <MdEditOff className='HomeIcon'/>
          </Link>
      </div>
      <h2>Login</h2>
        <form className='SignupForm'>
            <label className='LabelInput'>
                Email
                <input type='text' name='email' />
            </label>
            <label className='LabelInput'>
                Password
                <input type='password' name='password' />
            </label>
            <button type='submit' className='SignupButton'>Login</button>
            <p style={{margin: '1rem auto'}}>Need an Account? <Link to='/Signup' style={{textDecoration: 'none', color: '#0077C5', fontWeight: 300 }}>Signup</Link></p>
        </form>
    </div>
  )
}
