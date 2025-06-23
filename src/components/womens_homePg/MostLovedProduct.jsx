import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const colourImages = [
  {
    src: "src/assets/images/womens/mostLovedProduct/ML1.jpg",
    link: "/shop/ProductId",
    alt: "loved product",
  },
  {
    src: "src/assets/images/womens/mostLovedProduct/ML2.jpg",
    link: "/shop/ProductId",
    alt: "loved product",
  },
  {
    src: "src/assets/images/womens/mostLovedProduct/ML3.jpg",
    link: "/shop/ProductId",
    alt: "loved product",
  },
  {
    src: "src/assets/images/womens/mostLovedProduct/ML4.jpg",
    link: "/shop/ProductId",
    alt: "loved product",
  }
];

const MostLovedProduct = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1); // Default to 1 item on mobile
  const navigate = useNavigate();

  // Function to handle window resize and set items to show accordingly
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setItemsToShow(1); // Mobile
    } else if (window.innerWidth < 1024) {
      setItemsToShow(2); // Tablet
    } else {
      setItemsToShow(3); // Desktop
    }
  };

  useEffect(() => {
    handleResize(); // Set initial items to show on component mount
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
    };
  }, []);

  // Function to go to the next set of images
  const nextImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= colourImages.length ? 0 : prevIndex + itemsToShow
    );
  };

  // Function to go to the previous set of images
  const prevImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? colourImages.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  // Function to handle the navigation to the clicked image's page
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="title">
        <h1 className="font-bold text-2xl text-center pt-7">MOST LOVED PRODUCT</h1>
      </div>
      <div className="relative w-full h-[430px] overflow-hidden pt-5">
        {/* Image container: shows images based on the number to show */}
        <div className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(startIndex / itemsToShow) * (100 / Math.min(colourImages.length, itemsToShow))}%)`,
          }}>
          {colourImages.map((image, index) => (
            <div key={index} className={`w-full ${itemsToShow === 1 ? 'sm:w-1/2' : 'sm:w-1/3'} p-2`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-200 transform hover:scale-105"
                onClick={() => handleNavigation(image.link)}
              />
            </div>
          ))}
        </div>

        {/* Left Arrow (for previous images) */}
        <button
          onClick={prevImages}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
        >
          &#9664;
        </button>

        {/* Right Arrow (for next images) */}
        <button
          onClick={nextImages}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
        >
          &#9654;
        </button>
      </div>
    </>
  );
};

export default MostLovedProduct;
