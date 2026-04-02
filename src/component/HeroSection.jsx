import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div class="max-w-7xl mx-auto text-center mb-16">
    <h2 class="text-4xl font-bold text-gray-900 mt-20">Get Started In 3 Steps</h2>
    <p class="text-gray-400 text-lg">Start using premium digital tools in minutes, not hours.</p>
  </div>

  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
    
    <div class="bg-white p-10 rounded-[14px] border border-gray-100 shadow-sm relative text-center hover:shadow-md transition">
      <span class="absolute top-6 right-6 bg-violet-600 text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">01</span>
      
      <div class="w-20 h-20 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Create Account</h3>
      <p class="text-gray-500 text-sm leading-relaxed">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

    <div class="bg-white p-10 rounded-[14px] border border-gray-100 shadow-sm relative text-center hover:shadow-md transition">
      <span class="absolute top-6 right-6 bg-violet-600 text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">02</span>
      
      <div class="w-20 h-20 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Choose Products</h3>
      <p class="text-gray-500 text-sm leading-relaxed">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>

    <div class="bg-white p-10 rounded-[14px] border border-gray-100 shadow-sm relative text-center hover:shadow-md transition">
      <span class="absolute top-6 right-6 bg-violet-600 text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">03</span>
      
      <div class="w-20 h-20 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Start Creating</h3>
      <p class="text-gray-500 text-sm leading-relaxed">
        Download and start using your premium tools immediately.
      </p>
    </div>

  </div>
        </div>
    );
};

export default HeroSection;