import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AccountType from './Components/AccountType';
import Dashboard from './Components/Dashboard';
import { AuthProvider } from './Contexts/AuthContext';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/AccountType' element={<AccountType />} />
            <Route 
              path='/Dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
              />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
