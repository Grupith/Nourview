import React from 'react'
import { Link } from 'react-router-dom';
import { MdEditOff } from 'react-icons/md';

export default function Signup() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='FormContainer'>
        <div className='HomeIconWrapper'>
            <Link to='/'>
                <MdEditOff className='HomeIcon'/>
            </Link>
        </div>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} className='SignupForm'>
            <label className='LabelInput'>
                Email
                <input type='text' name='email' />
            </label>
            <label className='LabelInput'>
                Password
                <input type='password' name='password' />
            </label>
            <label className='LabelInput'>
                Confirm Password
                <input type='password' name='confirmPassword' />
            </label>
            { /* <div className='ErrorWrapper'>
                <div className='PasswordConfirmationWarning'>Passwords do not match!</div>
  </div> */}
            <button type='submit' className='SignupButton'>Create Account</button>
            <p style={{marginTop: '1rem'}}>Already have an account? <Link to='/Login' style={{textDecoration: 'none', color: '#0077C5', fontWeight: 300 }}>Login</Link></p>
        </form>
    </div>
  )
}
