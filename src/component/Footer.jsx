import React from 'react';

const Footer = () => {
    return (
        <div>
            <section class="bg-violet-600 py-20 px-6 text-center text-white">
    <div class="max-w-4xl mx-auto">
      
      <h2 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
        Ready To Transform Your Workflow?
      </h2>
      
      <p class="text-violet-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button class="bg-white text-violet-600 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-violet-50 transition-all w-full sm:w-auto shadow-lg">
          Explore Products
        </button>
        <button class="border border-violet-400 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-violet-500 transition-all w-full sm:w-auto">
          View Pricing
        </button>
      </div>
      
      <p class="text-violet-200 text-sm opacity-80">
        14-day free trial • No credit card required • Cancel anytime
      </p>
      
    </div>
  </section>
        </div>
    );
};

export default Footer;