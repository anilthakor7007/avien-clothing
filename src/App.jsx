import './styles/index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import TrackOrder from './pages/TrackOrder';
import Contact from './pages/Contact';
import DownloadApp from './pages/DownloadApp';
import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import BrandTitle from './components/comman/BrandTitle';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="content-container"> 
            <Routes>
              <Route path="/women" element={<Women />} />
              <Route path="/men" element={<Men />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/download-app" element={<DownloadApp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/productList" element={<ProductList />} />
              <Route path="/" element={<Women />} />
            </Routes>
          </div>
        </div>
        <BrandTitle />
        <Footer />
      </Router>
    </>
  );
}

export default App;
