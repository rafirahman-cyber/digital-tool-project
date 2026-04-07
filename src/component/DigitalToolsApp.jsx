import React,{useState} from 'react';

const DigitalToolsApp = () => {
    const [showCart, setShowCart] = useState(false);
    
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center py-30 px-40">
        <h1 className="text-4xl font-bold mb-4">Premium Digital Tools</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        {/* --- TOGGLE BUTTONS --- */}
        <div className="inline-flex items-center bg-gray-50 p-1 rounded-full border border-gray-100 shadow-sm">
          <button 
            onClick={() => setShowCart(false)}
            className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              !showCart ? 'bg-violet-600 text-white shadow-md' : 'text-gray-600'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setShowCart(true)}
            className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              showCart ? 'bg-violet-600 text-white shadow-md' : 'text-gray-600'
            }`}
          >
            Cart (2)
          </button>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {!showCart ? (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard name="AI Writing Pro" price="29" badge="Best Seller" icon= "" />
            <ProductCard name="Design Templates Pack" price="49" badge="Popular" icon="" />
            <ProductCard name="Premium Stock Assets" price="19" badge="New" icon="" />
          </div>
        ) : (
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-left">Your Cart</h2>
            <div className="space-y-4">
              <CartItem name="AI Writing Pro" price="29" icon="" />
              <CartItem name="Design Templates Pack" price="49" icon="" />
            </div>
            
            <div className="mt-10 border-t pt-6 flex justify-between items-center">
              <span className="text-gray-500 font-medium">Total:</span>
              <span className="text-2xl font-bold text-gray-900">$78</span>
            </div>
            
            <button className="w-full mt-8 bg-violet-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-violet-700 transition-colors shadow-lg">
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};



const ProductCard = ({ name, price, badge, icon }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
    <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
      {badge}
    </span>
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">High-quality content, tools, and assets for your creative workflow.</p>
    <div className="text-2xl font-bold mb-8">${price}<span className="text-sm font-normal text-gray-400">/Mo</span></div>
    <button className="w-full bg-violet-600 text-white py-3 rounded-2xl font-bold hover:bg-violet-700 transition">Buy Now</button>
  </div>
);

const CartItem = ({ name, price, icon }) => (
  <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="flex items-center space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-400">${price}</p>
      </div>
    </div>
    <button className="text-rose-500 font-semibold text-sm hover:text-rose-600">Remove</button>
  </div>
);



export default DigitalToolsApp;