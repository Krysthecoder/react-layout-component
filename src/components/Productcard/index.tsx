import React from 'react';
import ImageCard from './ProductImg/index.tsx';
import ProductContent from './/ProductContent/index.tsx';
import {
  productType,
  productTitle,
  productDetails,
  currentPrice,
  oldPrice,
  buttonContent
} from '../../utils/utilsData.tsx';

function ProductCard() {
  return (
    <div className="product-card mx-auto flex  mt-28">
      <ImageCard />
      <ProductContent
        productType={productType}
        productTitle={productTitle}
        productDetails={productDetails}
        currentPrice={currentPrice}
        oldPrice={oldPrice}
        buttonContent={buttonContent}
      />
    </div>
  );
}

export default ProductCard;
