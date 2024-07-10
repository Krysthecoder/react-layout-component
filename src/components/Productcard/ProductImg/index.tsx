import React from 'react';
import productImg from '../../../assets/ProductImg.jpg';

function ImageCard() {
  return (
    <div className="w-3/6">
      <img
        src={productImg}
        alt="product-image"
        className="product-img w-full rounded-tl-lg rounded-bl-lg"
      />
    </div>
  );
}

export default ImageCard;
