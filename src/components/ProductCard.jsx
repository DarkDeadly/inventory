import React, { useEffect } from 'react'

const ProductCard = ({ listProducts , UserRole }) => {
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
    <div className="productEl w-[30%] h-full relative  rounded-xl">
      <div>
        <img src={imageUrl} alt="product" className='w-full  brightness-50 rounded-xl' />
      </div>
      <div className='absolute top-0 flex flex-col justify-around h-full'>
        <div className=" w-full  z-10 text-white font-bold pt-6">
          <p className='text-2xl font-mono pl-5 '> {listProducts.name}</p>
          <p className='text-xl font-mono pl-5'>{listProducts.entryDate}</p>
        </div>


        <div className="flex flex-col gap-2 items-between text-white font-bold w-full">
          <p className='pl-5 text-2xl'>price : {listProducts.price} $</p>
          <div className="pl-5  text-2xl flex gap-2">
            <p>Number Units : </p>
            {UserRole.Role=='admin'&&<p>+</p>}
            <p>{listProducts.number}</p>
            {UserRole.Role=='admin'&&<p>-</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
