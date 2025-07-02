'use client';
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import CertificationSection from './components/CertificationSection';
import AnimationStyles from './components/AnimationStyles';
import { Product } from './components/ProductCard';

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      description: 'The ultimate iPhone experience. Pro camera system, Dynamic Island, and Always-On display.',
      price: '$999',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=iPhone+14+Pro+Max',
      learnMoreLink: '#',
      
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      description: 'Supercharged by M2. Strikingly thin design. Liquid Retina display. All-day battery life.',
      price: '$1099',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=MacBook+Air+M2',
      learnMoreLink: '#',
      
    },
    {
      id: 3,
      name: 'Apple Watch Series 8',
      description: 'A healthy leap ahead. Advanced health sensors. Innovative safety features.',
      price: '$399',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Apple+Watch+Series+8',
      learnMoreLink: '#',
      
    },
    {
      id: 4,
      name: 'AirPods Pro (2nd Gen)',
      description: 'Rebuilt for even richer audio. Up to 2x more Active Noise Cancellation.',
      price: '$249',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=AirPods+Pro+2nd+Gen',
      learnMoreLink: '#',
      
    },
  ]);

  const generateDescription = async (productId: number, productName: string, currentDescription: string) => {
    setProducts(prev =>
      prev.map(p => (p.id === productId ? { ...p, isGenerating: true } : p))
    );

    try {
      const prompt = `Generate a detailed and engaging product description for a pre-owned ${productName}. Highlight its key features and benefits for a potential buyer, building upon these existing details: "${currentDescription}". Keep it concise, around 50-70 words.`;

      const chatHistory = [{ role: 'user', parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        setProducts(prev =>
          prev.map(p => (p.id === productId ? { ...p, description: text } : p))
        );
      } else {
        console.warn('No description generated.');
      }
    } catch (e) {
      console.error('Error generating description:', e);
    } finally {
      setProducts(prev =>
        prev.map(p => (p.id === productId ? { ...p, isGenerating: false } : p))
      );
    }
  };

  return (
    <div className="font-['Inter'] antialiased bg-gray-50 text-gray-900 min-h-screen">
      <HeroSection />
      <FeaturedProducts products={products} />
      <CertificationSection />
      <AnimationStyles />
    </div>
  );
};

export default Homepage;
