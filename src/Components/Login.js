import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdEditOff } from 'react-icons/md';
import { useAuth } from '../Contexts/AuthContext';

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { login } = useAuth();

  const handleSubmit = async (e) => {
        e.preventDefault()

        try {
          setError('')
          setLoading(true)
          await login(email, password)
          navigate('/Dashboard')
        } catch {
          setError('Failed to login')
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
      <h2>Login</h2>
        <form onSubmit={handleSubmit} className='SignupForm'>
            <label className='LabelInput'>
                Email
                <input type='text' name='email' onChange={e => setEmail(e.target.value)} />
            </label>
            <label className='LabelInput'>
                Password
                <input type='password' name='password' onChange={e => setPassword(e.target.value)} />
            </label>
            {error && error}
            <button type='submit' className='SignupButton' disabled={loading}>Login</button>
            <p style={{margin: '1rem auto'}}>Need an Account? <Link to='/Signup' style={{textDecoration: 'none', color: '#0077C5', fontWeight: 300 }}>Signup</Link></p>
        </form>
    </div>
  )
}
