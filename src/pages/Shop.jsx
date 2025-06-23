import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$30', image: 'https://example.com/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$45', image: 'https://example.com/product2.jpg' },
  // Add more products here...
];

const Shop = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Shop Our Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-lg font-semibold text-gray-600">{product.price}</p>
              <a href={`/product/${product.id}`} className="block mt-4 bg-blue-600 text-white text-center py-2 rounded">View Product</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
