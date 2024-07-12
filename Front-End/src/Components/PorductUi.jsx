import React from "react";

function PorductUi({ productImage, productName, price, category }) {
  return (
    <div>
      {
        <div className="mr-5 bg-white border-black border-1 mb-5 w-[20rem] shadow-sm shadow-black rounded-xl p-1">
          <a className="block w-full h-full relative  rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover bg-cover border-black border-1 object-center h-[20rem]  rounded-md"
              src={productImage}
            />
          </a>
          <div className="mt-4 flex flex-col justify-center items-start ml-5">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {productName}
            </h2>
            <p className="mt-1">Rs.{price}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default PorductUi;
