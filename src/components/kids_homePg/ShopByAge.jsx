import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ageImages = [
  {
    src: "src/assets/images/kids/kidsShopByAge/SBA1.PNG ",
    link: "/shop/kids",
    alt: "0-2 years",
  },
  {
    src: "src/assets/images/kids/kidsShopByAge/SBA2.PNG",
    link: "/shop/kids",
    alt: "2-8 years",
  },
  {
    src: "src/assets/images/kids/kidsShopByAge/SBA3.PNG",
    link: "/shop/kids",
    alt: "8-14 years",
  },
  
];

const ShopByAge = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  // Function to go to the next set of images
  // const nextImages = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex + (window.innerWidth < 640 ? 1 : 3) >= ageImages.length
  //       ? 0
  //       : prevIndex + (window.innerWidth < 640 ? 1 : 3)
  //   );
  // };

  // Function to go to the previous set of images
  // const prevImages = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex === 0
  //       ? ageImages.length - (window.innerWidth < 640 ? 1 : 3)
  //       : prevIndex - (window.innerWidth < 640 ? 1 : 3)
  //   );
  // };

  // Function to handle the navigation to the clicked image's page
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="title">
        <h1 className="font-bold text-2xl text-center pt-7">SHOP BY AGE</h1>
      </div>
      <div className="relative w-full h-[530px] overflow-hidden pt-5">
        {/* Image container: shows 1 image on small screens, 3 on larger screens */}
        <div className="flex">
          {ageImages
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
       
        {/* Right Arrow (for next images) */}
        {/* <button
          onClick={nextImages}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
        >
          &#9654;
        </button> */}
      </div>
    </>
  );
};

export default ShopByAge;
