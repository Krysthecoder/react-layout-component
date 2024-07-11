import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import { productProps } from '../../../customTypes';

const ProductContent: React.FC<productProps> = ({
  productType,
  productTitle,
  productDetails,
  currentPrice,
  oldPrice,
  buttonContent
}) => {
  return (
    <div className="bg-white h-[300px] flex gap-4 w-5/6 sm:w-3/6 flex-col justify-center pl-4 pr-10 pb-4 rounded-bl-lg rounded-br-lg sm:rounded-bl-none sm:rounded-tr-lg">
      <p className="text-start font-serif text-sm uppercase mt-3">
        {productType}
      </p>

      <p className="capitalize font-channelFont font-black text-2xl lg:text-4xl md:text-4xl sm:text-4xl">
        {productTitle}
      </p>

      <p className="text-sm font-thin">{productDetails}</p>

      <div className="flex w-full justify-between pr-4">
        <p className="font-channelFont text-2xl text-orange-700 font-black italic">
          ${currentPrice}
        </p>
        <p className="text-sm line-through pt-1 text-gray-400 font-channelFont">
          ${oldPrice}
        </p>
      </div>

      <button className="bg-orange-600 hover:bg-orange-950 hover:text-white transition-all duration-300 ease-in-out font-channelFont font-semibold w-full mx-auto p-2 rounded-lg flex items-center place-content-center gap-2">
        <FaOpencart />
        {buttonContent}
      </button>
    </div>
  );
};

export default ProductContent;
