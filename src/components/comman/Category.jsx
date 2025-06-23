import React from 'react';
import { useNavigate } from 'react-router-dom';



const Category = ({categoriesImages}) => {
  const navigate = useNavigate();

  // Function to handle navigation on image click
  const handleNavigation = (link) => {
    navigate(link);
  };
    
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">CATEGORIES</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesImages.map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => handleNavigation(category.link)}
          >
            <img
              src={category.src}
              alt={category.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="text-white font-semibold text-lg">{category.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
