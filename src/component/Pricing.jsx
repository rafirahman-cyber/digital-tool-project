import React from 'react';

const Pricing = () => {
    return (
        <div>
           

  <section id="pricing" class="bg-slate-50 py-20 px-6">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p class="text-gray-500">Upgrade or downgrade anytime.</p>
    </div>
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col">
        <h3 class="text-xl font-bold">Starter</h3>
        <p class="text-gray-400 text-sm mb-6">Perfect for getting started</p>
        <div class="text-4xl font-bold mb-8">$0<span class="text-sm font-normal text-gray-400">/Month</span></div>
        <ul class="space-y-4 mb-10 text-sm text-gray-600 flex-grow">
          <li> Access to 10 free tools</li>
          <li> Basic templates</li>
          <li> Community support</li>
        </ul>
        <button class="w-full bg-violet-600 text-white py-3 rounded-2xl">Get Started Free</button>
      </div>
      <div class="bg-violet-600 p-8 rounded-3xl text-white relative shadow-xl transform scale-105">
        <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-[10px] font-bold px-4 py-1 rounded-full uppercase">Most Popular</span>
        <h3 class="text-xl font-bold">Pro</h3>
        <p class="text-violet-200 text-sm mb-6">Best for professionals</p>
        <div class="text-4xl font-bold mb-8">$29<span class="text-sm font-normal opacity-70">/Month</span></div>
        <ul class="space-y-4 mb-10 text-sm flex-grow">
          <li> Access to all premium tools</li>
          <li> Priority support</li>
          <li> Advanced analytics</li>
        </ul>
        <button class="w-full bg-white text-violet-600 py-3 rounded-2xl">Start Pro Trial</button>
      </div>
      <div class="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col">
        <h3 class="text-xl font-bold">Enterprise</h3>
        <p class="text-gray-400 text-sm mb-6">For teams and businesses</p>
        <div class="text-4xl font-bold mb-8">$99<span class="text-sm font-normal text-gray-400">/Month</span></div>
        <ul class="space-y-4 mb-10 text-sm text-gray-600 flex-grow">
          <li> Everything in Pro</li>
          <li> Custom integrations</li>
          <li> Dedicated support</li>
        </ul>
        <button class="w-full bg-violet-600 text-white py-3 rounded-2xl">Contact Sales</button>
      </div>
    </div>
  </section>
        </div>
    );
};

export default Pricing;