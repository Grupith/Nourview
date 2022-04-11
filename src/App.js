import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AccountType from './Components/AccountType';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/AccountType' element={<AccountType />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
