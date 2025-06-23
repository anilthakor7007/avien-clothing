import React from "react";
import { useNavigate } from "react-router-dom"; 

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const handleBannerClick = () => {
   
    navigate("/productList");
  };

  return (
    <section className="bg-white-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose Us?</h2>
    

        <div
          className="relative w-full h-full cursor-pointer "
          onClick={handleBannerClick}
        >
          <img
            src="src/assets/images/womens/whyChooseUs/W_whyChooseUs.jpg" 
            alt="Why Choose Us Banner"
            className="w-full h-full object-cover rounded-lg"
          />
      
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
