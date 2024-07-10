import React from 'react';
import ImageCard from '../ProductImg/index.tsx';
import ProductContent from '../ProductContent/index.tsx';

function ProductCard() {
  return (
    <div className="product-card mx-auto flex  mt-28">
      <ImageCard />
      <ProductContent />
    </div>
  );
}

export default ProductCard;
