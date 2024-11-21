import React, { useEffect } from 'react';

const ProductCard = ({ listProducts, UserRole }) => {
  const imageUrl =
    typeof listProducts.images === "string"
      ? listProducts.images
      : URL.createObjectURL(listProducts.images);

  useEffect(() => {
    return () => {
      if (typeof listProducts.images !== "string") {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [listProducts.images, imageUrl]);

  return (
    <div className="productEl w-full relative rounded-xl ">
      <div className="product-image-container">  {/* New class for styling */}
        <img
          src={imageUrl}
          alt="product"
          className="object-cover w-full min-h-full rounded-xl brightness-50"
        />
      </div>
      <div className="product-content absolute top-0 left-0 flex flex-col justify-around p-4 h-[80%]">  {/* New class and position */}
        <div className="w-full z-10 text-white font-bold">
          <p className="text-4xl font-mono">{listProducts.name}</p>
          <p className="text-lg font-mono">{listProducts.entryDate}</p>
        </div>
        <div className="flex flex-col gap-2 items-start text-white font-bold">
          <p>Price: {listProducts.price} $</p>
          <div className="flex gap-2">
            <p>Number Units: </p>
            {UserRole.Role === 'admin' && <p>+</p>}
            <p>{listProducts.number}</p>
            {UserRole.Role === 'admin' && <p>-</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;