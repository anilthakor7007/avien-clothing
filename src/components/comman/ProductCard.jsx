import React from "react";

const ProductCard = ({ product }) => {
  const { name, description, images, sizes, isMostLoved } = product;

  // Get the minimum price for display
  const minPrice = Math.min(...sizes.map((size) => size.price));

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      {/* Product Image */}
      <img
        src={images[0]?.url}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-lg font-bold mb-2">{name}</h3>

        {/* Product Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Product Price */}
        <div className="mb-2">
          <span className="text-xl font-semibold">₹{minPrice}</span>
        </div>

        {/* Available Sizes */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">Available Sizes:</p>
          <div className="flex space-x-2">
            {sizes.map((size) => (
              <span key={size._id} className="px-2 py-1 border rounded">
                {size.size}
              </span>
            ))}
          </div>
        </div>

        {/* Most Loved Badge */}
        {isMostLoved && (
          <div className="bg-red-500 text-white text-xs rounded px-2 py-1 inline-block">
            Most Loved
          </div>
        )}

        {/* Add to Cart Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
