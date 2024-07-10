import React from 'react';
import { FaOpencart } from 'react-icons/fa';

type productProps = {
  productType: string;
  productTitle: string;
  productDetails: string;
  currentPrice: string;
  oldPrice: string;
  buttonContent: string;
};

export default function ProductContent({
  productType,
  productTitle,
  productDetails,
  currentPrice,
  oldPrice,
  buttonContent
}: productProps) {
  return (
    <div className="flex w-3/6 flex-col bg-white justify-evenly rounded-tr-lg rounded-br-lg pl-4 pr-10">
      <p className="product-type text-start font-serif text-sm">
        {productType}
      </p>

      <p className="product-title capitalize text-4xl font-channelFont font-black">
        {productTitle}
      </p>

      <p className="text-sm font-thin">{productDetails}</p>

      <div className="flex w-full justify-between pr-4">
        <p className="font-channelFont text-2xl text-orange-700 font-black italic">
          {currentPrice}
        </p>
        <p className="text-sm line-through pt-1 text-gray-400 font-channelFont">
          {oldPrice}
        </p>
      </div>

      <button className="bg-orange-600 font-channelFont font-semibold w-5/6 mx-auto p-2 rounded-lg flex items-center place-content-center gap-2">
        <FaOpencart />
        {buttonContent}
      </button>
    </div>
  );
}
