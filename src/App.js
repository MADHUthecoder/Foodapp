import './App.css';
import './index.css';
import { Routes, Route,} from "react-router-dom";
import Pages from './pages/Page';
import Dining from './pages/Dining';
import Delivery from './pages/Delivery';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='bg-[#fff0d4] h-full'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Pages />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/delivery" element={<Delivery />} />

  
      </Routes>
    </div>
  );
}

export default App;
