import React from 'react';
import ImageCard from './ProductImg/index.tsx';
import ProductContent from './/ProductContent/index.tsx';
import { productData } from '../../utils/utilsData.tsx';

const ProductCard = () => {
  return (
    <div className="sm:bg-white w-[500px] h-auto  sm:w-[600px] sm:h-[420px]  flex mx-auto items-center justify-center mt-8 flex-col sm:flex-row sm:mt-24 rounded-bl-lg rounded-br-lg sm:rounded-bl-none sm:rounded-tr-lg">
      <ImageCard />
      <ProductContent {...productData} />
    </div>
  );
};

export default ProductCard;
