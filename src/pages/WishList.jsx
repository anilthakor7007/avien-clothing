import React from 'react';
import EmptyWishlist from '../components/comman/EmptyWishlist'; 

const Wishlist = ({ products, moveToCart }) => {
  return (
    <>
      {/* <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>
        {products.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-bold text-red-600">₹{product.price}</p>
                </div>
                <button
                  onClick={() => moveToCart(product.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Move to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <EmptyWishlist /> 
        )}
      </div> */}


    </>
  );
};

export default Wishlist;
