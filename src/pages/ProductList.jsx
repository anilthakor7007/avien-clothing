import React from 'react';
import { useParams } from 'react-router-dom';  // If using React Router

const ProductList = () => {
  const { id } = useParams();  // Get product ID from URL
  // Fetch product data based on ID (mock or API)
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={`https://example.com/product${id}.jpg`} alt={`Product ${id}`} className="w-full h-96 object-cover" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Product Name</h2>
            <p className="text-xl mb-4">Price: $45</p>
            <p className="mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
