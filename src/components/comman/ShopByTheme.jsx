import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const ShopByTheme = ({themesImages}) => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  // Function to go to the next set of images
  const nextImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= themesImages.length ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous set of images
  const prevImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? themesImages.length - 1 : prevIndex - 1
    );
  };

  // Function to handle the navigation to the clicked image's page
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
    <div className="title"><h1 className='font-bold text-2xl text-center pt-7'>SHOP BY THEMES</h1></div>
    <div className="relative w-full h-[530px] overflow-hidden pt-5">
      {/* Image container showing three images at once */}
      <div className="flex">
        {themesImages.slice(startIndex, startIndex + 3).map((image, index) => (
          <div key={index} className="w-1/3 p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleNavigation(image.link)}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow (for previous images) */}
      <button
        onClick={prevImages}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition">
        &#9664;
      </button>

      {/* Right Arrow (for next images) */}
      <button
        onClick={nextImages}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition">
        &#9654;
      </button>
    </div>
    </>
  );
};


export default ShopByTheme;
