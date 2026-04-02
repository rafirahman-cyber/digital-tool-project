import React from 'react';

const Navbar = () => {
    return (
        
//             <div className="navbar bg-base-100 shadow-sm justify-around">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-4xl font-bold text-fuchsia-500">DigiTools</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Products</a></li>
//       <li><a>Features</a></li>
//       <li><a>Pricing</a></li>
//       <li><a>Testimonials</a></li>
//       <li><a>FAQ</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//      <a className='btn rounded-4xl border-0'><img src="/src/assets/shopping-cart.png" alt="" />Login</a>   
//     <a className="btn rounded-4xl">Get Started</a>
//   </div>
// </div>
        
    <div>
      <nav class="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
    <div class="text-4xl font-bold text-violet-600">DigiTools</div>
    <div class="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
      <a href="#" class="hover:text-violet-600">Products</a>
      <a href="#" class="hover:text-violet-600">Features</a>
      <a href="#" class="hover:text-violet-600">Pricing</a>
      <a href="#" class="hover:text-violet-600">Testimonials</a>
      <a href="#" class="hover:text-violet-600">FAQ</a>
    </div>
    <div class="flex items-center space-x-5">
      <button class="text-gray-600 hover:text-violet-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
      <a href="#" class="font-semibold text-sm">Login</a>
      <a href="#" class="bg-violet-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-violet-700 transition">Get Started</a>
    </div>
  </nav>

  <section class="max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-600 mb-6">
        <span class="w-2 h-2 bg-violet-500 rounded-full mr-2"></span> New: AI-Powered Tools Available
      </span>
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Supercharge Your <br /> Digital Workflow
      </h1>
      <p class="text-gray-500 text-lg mb-8 max-w-md">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
      </p>
      <div class="flex space-x-4">
        <button class="bg-violet-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-violet-700 transition">Explore Products</button>
        <button class="border border-violet-200 text-violet-600 px-8 py-3.5 rounded-full font-bold flex items-center hover:bg-violet-50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch Demo
        </button>
      </div>
    </div>

    <div class="relative">
      <div class="rounded-3xl overflow-hidden shadow-xl w-125 h-147">
        <img src="/src/assets/banner.png" alt="" />
      </div>
    </div>
  </section>

  <section class="bg-violet-600 py-16">
    <div class="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
      <div class="border-r border-violet-400 last:border-0">
        <div class="text-5xl font-bold mb-2">50K+</div>
        <div class="text-violet-200 uppercase tracking-wider text-sm font-medium">Active Users</div>
      </div>
      <div class="border-r border-violet-400 last:border-0">
        <div class="text-5xl font-bold mb-2">200+</div>
        <div class="text-violet-200 uppercase tracking-wider text-sm font-medium">Premium Tools</div>
      </div>
      <div>
        <div class="text-5xl font-bold mb-2">4.9</div>
        <div class="text-violet-200 uppercase tracking-wider text-sm font-medium">Rating</div>
      </div>
    </div>
  </section>
    </div>

    );
};

export default Navbar;