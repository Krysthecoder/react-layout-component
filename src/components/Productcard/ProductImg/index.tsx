import React from 'react';
import productImg from '../../../assets/ProductImg.jpg';

function ImageCard() {
  return (
    <div className=" w-5/6 sm:w-3/6">
      <img
        src={productImg}
        alt="product-image"
        className="product-img w-full rounded-tl-lg rounded-tr-lg sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none"
      />
    </div>
  );
}

export default ImageCard;
