import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="max-w-7xl mx-auto text-center mb-12">
    <h1 class="text-4xl font-bold text-gray-900 mt-20">Premium Digital Tools</h1>
    <p class="text-gray-500 max-w-2xl mx-auto mb-8">
      Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
    </p>
    
    <div class="inline-flex bg-white p-1 rounded-full border border-gray-100 shadow-sm">
      <button class="bg-violet-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Products</button>
      <button class="text-gray-600 px-6 py-2 rounded-full text-sm font-semibold">Cart</button>
    </div>
  </div>

  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-md transition">
      <span class="absolute top-4 right-4 bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Best Seller</span>
      <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-2xl"><img src="/src/assets/writing_2327400 1.png" alt="" /></div>
      <h3 class="text-xl font-bold mb-3">AI Writing Pro</h3>
      <p class="text-gray-500 text-sm mb-6 leading-relaxed">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
      <div class="mb-6">
        <span class="text-2xl font-bold">$29</span><span class="text-gray-400 text-sm">/Mo</span>
      </div>
      <ul class="space-y-3 mb-8 text-sm text-gray-600">
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Unlimited AI generations</li>
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 50+ writing templates</li>
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Grammar checker</li>
      </ul>
      <button class="w-full bg-violet-600 text-white py-3 rounded-2xl font-bold hover:bg-violet-700 transition">Buy Now</button>
    </div>

    <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-md transition">
      <span class="absolute top-4 right-4 bg-violet-100 text-violet-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Popular</span>
      <div class="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-6 text-2xl"><img src="/src/assets/design-tool.png" alt="" /></div>
      <h3 class="text-xl font-bold mb-3">Design Templates Pack</h3>
      <p class="text-gray-500 text-sm mb-6 leading-relaxed">2000+ premium templates for social media, presentations, and marketing materials.</p>
      <div class="mb-6">
        <span class="text-2xl font-bold">$49</span><span class="text-gray-400 text-sm">/One-Time</span>
      </div>
      <ul class="space-y-3 mb-8 text-sm text-gray-600">
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 2000+ templates</li>
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Monthly updates</li>
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Commercial license</li>
      </ul>
      <button class="w-full bg-violet-600 text-white py-3 rounded-2xl font-bold hover:bg-violet-700 transition">Buy Now</button>
    </div>

    <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-md transition">
      <span class="absolute top-4 right-4 bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">New</span>
      <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-2xl"></div>
      <h3 class="text-xl font-bold mb-3">Premium Stock Assets</h3>
      <p class="text-gray-500 text-sm mb-6 leading-relaxed">Access millions of royalty-free photos, videos, and graphics for your projects.</p>
      <div class="mb-6">
        <span class="text-2xl font-bold">$19</span><span class="text-gray-400 text-sm">/Mo</span>
      </div>
      <ul class="space-y-3 mb-8 text-sm text-gray-600">
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> 10M+ assets</li>
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Commercial use</li>
        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> No attribution</li>
      </ul>
      <button class="w-full bg-violet-600 text-white py-3 rounded-2xl font-bold hover:bg-violet-700 transition">Buy Now</button>
    </div>

    </div>
        </div>
    );
};

export default Banner;