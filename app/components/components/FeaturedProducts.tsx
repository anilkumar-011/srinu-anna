'use client';
import React from 'react';
import ProductCard, { Product } from './ProductCard';

type Props = {
  products: Product[];
};

const FeaturedProducts = ({ products }: Props) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
