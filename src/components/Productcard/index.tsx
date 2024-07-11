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
    <div className="product-card flex mx-auto mt-8 flex-col sm:flex-row sm:mt-24">
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
