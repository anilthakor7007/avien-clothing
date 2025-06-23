import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* NEED HELP Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">NEED HELP</h4>
          <ul>
            <li><a href="#contact" className="hover:text-red-500">Contact Us</a></li>
            <li><a href="#track-order" className="hover:text-red-500">Track Order</a></li>
            <li><a href="#returns" className="hover:text-red-500">Returns & Refunds</a></li>
            <li><a href="#faqs" className="hover:text-red-500">FAQs</a></li>
            <li><a href="#account" className="hover:text-red-500">My Account</a></li>
          </ul>
        </div>

        {/* COMPANY Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">COMPANY</h4>
          <ul>
            <li><a href="#about" className="hover:text-red-500">About Us</a></li>
            <li><a href="#careers" className="hover:text-red-500">Careers</a></li>
            <li><a href="#gift" className="hover:text-red-500">Gift Vouchers</a></li>
            <li><a href="#community" className="hover:text-red-500">Community Initiatives</a></li>
            <li><a href="#souled-army" className="hover:text-red-500">Avien Army</a></li>
          </ul>
        </div>

        {/* MORE INFO Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">MORE INFO</h4>
          <ul>
            <li><a href="#terms" className="hover:text-red-500">T&C</a></li>
            <li><a href="#privacy" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#sitemap" className="hover:text-red-500">Sitemap</a></li>
            <li><a href="#blogs" className="hover:text-red-500">Blogs</a></li>
          </ul>
        </div>

        {/* STORE NEAR ME Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">STORE NEAR ME</h4>
          <ul>
            <li><a href="#mumbai" className="hover:text-red-500">Mumbai</a></li>
            <li><a href="#pune" className="hover:text-red-500">Pune</a></li>
            <li><a href="#bengaluru" className="hover:text-red-500">Bengaluru</a></li>
            <li><a href="#indore" className="hover:text-red-500">Indore</a></li>
            <li><a href="#view-more" className="hover:text-red-500">View More</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <p>COD Available</p>
          <p>30 Days Easy Returns</p>
          <div className="flex items-center space-x-4">
            <p>Experience the Avien app:</p>
            <a href="#google-play" className="hover:text-red-500">Google Play</a>
            <a href="#apple-store" className="hover:text-red-500">Apple App Store</a>
          </div>
          <div className="flex items-center space-x-4">
            <p>Follow Us:</p>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm">© Avien Clothing 2024-25</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
