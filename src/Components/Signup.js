import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdEditOff } from 'react-icons/md';
import { useAuth } from '../Contexts/AuthContext';

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(email, password)
            navigate('/Dashboard')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
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
                <input required type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='LabelInput'>
                Password
                <input required type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label className='LabelInput'>
                Confirm Password
                <input required type='password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            {error && <div className='ErrorWrapper'><div className='ErrorStatus'>{error}</div></div>}
            <button type='submit' className='SignupButton' disabled={loading}>Create Account</button>
            <p style={{marginTop: '1rem'}}>Already have an account? <Link to='/Login' style={{textDecoration: 'none', color: '#0077C5', fontWeight: 300 }}>Login</Link></p>
        </form>
    </div>
  )
}
