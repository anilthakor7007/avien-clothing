import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const colourImages = [
  {
    src: "src/assets/images/womens/womensShopByColour/Blue.jpg",
    link: "/shop/blue",
    alt: "Shop Blue",
  },
  {
    src: "src/assets/images/womens/womensShopByColour/WHITE.jpg",
    link: "/shop/white",
    alt: "Shop White",
  },
  {
    src: "src/assets/images/womens/womensShopByColour/Pink.jpg",
    link: "/shop/pink",
    alt: "Shop Pink",
  },
  {
    src: "src/assets/images/womens/womensShopByColour/Black.jpg",
    link: "/shop/black",
    alt: "Shop Black",
  },
  {
    src: "src/assets/images/womens/womensShopByColour/Purple.jpg",
    link: "/shop/purple",
    alt: "Shop Purple",
  },
  {
    src: "src/assets/images/womens/womensShopByColour/lm.jpg",
    link: "/shop/lemon-lime",
    alt: "Shop Lemon Lime",
  },
];

const ShopByColour = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  // Function to go to the next set of images
  const nextImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex + (window.innerWidth < 640 ? 1 : 3) >= colourImages.length
        ? 0
        : prevIndex + (window.innerWidth < 640 ? 1 : 3)
    );
  };

  // Function to go to the previous set of images
  const prevImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? colourImages.length - (window.innerWidth < 640 ? 1 : 3)
        : prevIndex - (window.innerWidth < 640 ? 1 : 3)
    );
  };

  // Function to handle the navigation to the clicked image's page
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="title">
        <h1 className="font-bold text-2xl text-center pt-7">SHOP BY COLOUR</h1>
      </div>
      <div className="relative w-full h-[530px] overflow-hidden pt-5">
        {/* Image container: shows 1 image on small screens, 3 on larger screens */}
        <div className="flex">
          {colourImages
            .slice(startIndex, startIndex + (window.innerWidth < 640 ? 1 : 3))
            .map((image, index) => (
              <div key={index} className="w-full sm:w-1/3 p-2">
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

export default ShopByColour;
