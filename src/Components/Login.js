import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <FontAwesomeIcon icon="fa-solid fa-xmark" size='2x' className='HomeIcon'/>
          </Link>
      </div>
      <h2>Login</h2>
        <form onSubmit={handleSubmit} className='SignupForm'>
            <label className='LabelInput'>
                Email
                <input required type='email' name='email' onChange={e => setEmail(e.target.value)} />
            </label>
            <label className='LabelInput'>
                Password
                <input required type='password' name='password' onChange={e => setPassword(e.target.value)} />
            </label>
            {error && <div className='ErrorWrapper'><div className='ErrorStatus'>{error}</div></div>}
            <button type='submit' className='SignupButton' disabled={loading}>Login</button>
            <p style={{margin: '1rem auto'}}>Need an Account? <Link to='/Signup' style={{textDecoration: 'none', color: '#0077C5', fontWeight: 300 }}>Signup</Link></p>
        </form>
    </div>
  )
}
