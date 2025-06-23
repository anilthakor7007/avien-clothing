import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topSellingProducts = [
  {
    src: "src/assets/images/womens/womensShopByColour/Blue.jpg",
    link: "/shop/blue",
    alt: "Shop Blue",
    name: "Blue Dress",
    description: "Elegant blue dress with a modern cut.",
    price: "₹499"
  },
  {
    src: "src/assets/images/womens/womensShopByColour/WHITE.jpg",
    link: "/shop/white",
    alt: "Shop White",
    name: "White Dress",
    description: "Stylish white dress for all occasions.",
    price: "₹999"
  },
  {
    src: "src/assets/images/womens/womensShopByColour/Pink.jpg",
    link: "/shop/pink",
    alt: "Shop Pink",
    name: "Pink Dress",
    description: "Charming pink dress with floral patterns.",
    price: "₹599"
  },
  {
    src: "src/assets/images/womens/womensShopByColour/Black.jpg",
    link: "/shop/black",
    alt: "Shop Black",
    name: "Black Dress",
    description: "Classic black dress for formal events.",
    price: "₹699"
  },
  {
    src: "src/assets/images/womens/womensShopByColour/Purple.jpg",
    link: "/shop/purple",
    alt: "Shop Purple",
    name: "Purple Dress",
    description: "Graceful purple dress with a unique design.",
    price: "₹599"
  },
  {
    src: "src/assets/images/womens/womensShopByColour/lm.jpg",
    link: "/shop/lemon-lime",
    alt: "Shop Lemon Lime",
    name: "Lemon Lime Dress",
    description: "Bright and refreshing lemon lime dress.",
    price: "₹499"
  },
];

const NewArrival = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const nextProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 4 >= topSellingProducts.length ? 0 : prevIndex + 4
    );
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? topSellingProducts.length - 4 : prevIndex - 4
    );
  };

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="title">
        <h1 className="font-bold text-2xl text-center pt-7">TOP SELLING PRODUCTS</h1>
      </div>
      <div className="relative w-full h-[600px] overflow-hidden pt-5">
        <div className="flex">
          {topSellingProducts.slice(startIndex, startIndex + 4).map((product, index) => (
            <div
              key={index}
              className="w-1/4 p-2 cursor-pointer"
              onClick={() => handleNavigation(product.link)}
            >
              <div className="border border-gray-300 rounded-lg shadow-lg p-4 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-96 object-cover rounded-lg transform transition duration-300 hover:scale-110"
                  />
                </div>
                <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-xl font-semibold text-gray-800">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow (for previous products) */}
        <button
          onClick={prevProducts}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition">
          &#9664;
        </button>

        {/* Right Arrow (for next products) */}
        <button
          onClick={nextProducts}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition">
          &#9654;
        </button>
      </div>
    </>
  );
};

export default NewArrival;
