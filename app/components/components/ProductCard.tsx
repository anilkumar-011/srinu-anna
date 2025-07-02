'use client';
import React from 'react';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  learnMoreLink: string;
};

type Props = {
  product: Product;
 
};

const ProductCard = ({ product }: Props) => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in delay-500"
    style={{ animationDelay: `${500 + product.id * 100}ms` }}
  >
    <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover object-center" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
        <a href={product.learnMoreLink} className="text-blue-600 hover:text-blue-800 font-medium">
          Learn More &rarr;
        </a>
      </div>
      <button className="w-full bg-gray-900 hover:bg-gray-700 text-white py-2.5 rounded-lg font-medium mb-2">
        Add to Cart
      </button>
     
    </div>
  </div>
);

export default ProductCard;
