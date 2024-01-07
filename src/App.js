import './App.css';
import './index.css';
import { Routes, Route,} from "react-router-dom";
import Pages from './pages/Page';
import Dining from './pages/Dining';
import Delivery from './pages/Delivery';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className='bg-[#fff0d4]'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Pages />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
