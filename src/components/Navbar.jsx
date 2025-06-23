import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isStickyMobile, setIsStickyMobile] = useState(false);
  const [isStickyDesktop, setIsStickyDesktop] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const isDesktop = window.innerWidth > 768;

      if (isMobile && window.scrollY > 100) {
        setIsStickyMobile(true);
      } else {
        setIsStickyMobile(false);
      }

      if (isDesktop && window.scrollY > 200) {
        setIsStickyDesktop(true);
      } else {
        setIsStickyDesktop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path ? 'text-white-600 font-bold' : 'text-black hover:text-white-600';
  const isActiveBottom = (path) => location.pathname === path ? 'text-red-600 font-bold' : 'text-black hover:text-white-600';

  return (
    <nav className="bg-red-600 text-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-center py-4 text-2xl">
        <ul className="flex space-x-10">
          <li><Link to="/women" className={isActive('/women')}>WOMEN</Link></li>
          <li><Link to="/men" className={isActive('/men')}>MEN</Link></li>
          <li><Link to="/kids" className={isActive('/kids')}>KIDS</Link></li>
          <li className="flex px-10 font-normal"></li>
          <li><Link to="/track-order" className={isActive('/track-order')}>TRACK ORDER</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>CONTACT US</Link></li>
          <li><Link to="/download-app" className={`text-lg flex items-center ${isActive('/download-app')}`}><PhoneIphoneOutlinedIcon fontSize="small" /> DOWNLOAD APP</Link></li>
        </ul>
      </div>

      {/* Bottom Bar for larger screens */}
      <div className={`bg-white ${isStickyDesktop ? 'fixed top-0' : 'relative'} w-full z-10 text-lg pt-5 hidden md:block`}>
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          <ul className="flex space-x-6 items-start ml-8">
            <li className="px-12">
              <div className="text-2xl font-bold text-gray-800">
                <Link to="/women">
                  <img src="src/assets/images/brand_logo/avien.png" alt="Avien.in" className="h-8" />
                </Link>
              </div>
            </li>
            <li><Link to="/topwear" className={isActiveBottom('/topwear')}>TOPWEAR</Link></li>
            <li><Link to="/bottomwear" className={isActiveBottom('/bottomwear')}>BOTTOMWEAR</Link></li>
            <li><Link to="/bestsellers" className={isActiveBottom('/bestsellers')}>BESTSELLER</Link></li>
          </ul>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none px-2 py-1 text-gray-600"
              />
              <SearchIcon className="text-gray-600" />
            </div>
            <Link to="/login" aria-label="Login" className={`hover:text-gray-800 ${isActiveBottom('/login')}`}>
              <PersonOutlineOutlinedIcon fontSize="large" />
            </Link>
            <Link to="/wishlist" aria-label="Wishlist" className={`hover:text-gray-800 ${isActiveBottom('/wishlist')}`}>
              <FavoriteBorderIcon fontSize="large" />
            </Link>
            <Link to="/cart" aria-label="Cart" className={`hover:text-gray-800 ${isActiveBottom('/cart')}`}>
              <ShoppingBagOutlinedIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive Navbar for smaller screens */}
      <div className="md:hidden flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="./assets/brand_logo/avien.png" alt="Avien.in" className="h-8" />
          </Link>
        </div>

        <button onClick={toggleSidebar} className="text-white">
          {sidebarOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-20">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-30">
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-600" aria-label="Close Sidebar">
              <CloseIcon fontSize="large" />
            </button>
            <ul className="flex flex-col space-y-4 mt-8">
              <li><Link to="/women" className={`text-lg font-bold ${isActive('/women')}`}>WOMEN</Link></li>
              <li><Link to="/men" className={`text-lg font-bold ${isActive('/men')}`}>MEN</Link></li>
              <li><Link to="/kids" className={`text-lg font-bold ${isActive('/kids')}`}>KIDS</Link></li>
            </ul>
            <hr className="my-4" />
            <div className="flex items-center border border-gray-300 rounded-md py-1 mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow outline-none px-2 py-1 text-gray-600"
              />
              <SearchIcon className="text-gray-600" />
            </div>
            <ul className="space-y-4">
              <li>
                <Link to="/login" className={`text-lg font-semibold flex items-center ${isActive('/login')}`}>
                  <PersonOutlineOutlinedIcon /> Login
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className={`text-lg font-semibold flex items-center ${isActive('/wishlist')}`}>
                  <FavoriteBorderIcon /> Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className={`text-lg font-semibold flex items-center ${isActive('/cart')}`}>
                  <ShoppingBagOutlinedIcon /> Cart
                </Link>
              </li>
              <li><Link to="/track-order" className={isActive('/track-order')}>Track Order</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
              <li><Link to="/download-app" className={`flex items-center ${isActive('/download-app')}`}>
                <PhoneIphoneOutlinedIcon fontSize="small" /> Download App
              </Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar for mobile */}
      <div className={`bg-white ${isStickyMobile ? 'fixed bottom-0' : 'relative'} w-full z-10 text-lg py-2 md:hidden`}>
        <div className="container mx-auto grid grid-cols-3 gap-4 text-center">
          <Link to="/women" className={isActiveBottom('/women')}>WOMEN</Link>
          <Link to="/men" className={isActiveBottom('/men')}>MEN</Link>
          <Link to="/kids" className={isActiveBottom('/kids')}>KIDS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
