import React from 'react';

const FooterSection = () => {
    return (
        <div>
            <footer class="bg-[#0B1120] text-gray-400 py-16 px-6">
    <div class="max-w-7xl mx-auto">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        <div class="lg:col-span-2">
          <h2 class="text-white text-3xl font-bold mb-6">DigiTools</h2>
          <p class="max-w-xs leading-relaxed text-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6">Product</h3>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-white transition">Features</a></li>
            <li><a href="#" class="hover:text-white transition">Pricing</a></li>
            <li><a href="#" class="hover:text-white transition">Templates</a></li>
            <li><a href="#" class="hover:text-white transition">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6">Company</h3>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-white transition">About</a></li>
            <li><a href="#" class="hover:text-white transition">Blog</a></li>
            <li><a href="#" class="hover:text-white transition">Careers</a></li>
            <li><a href="#" class="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6">Resources</h3>
          <ul class="space-y-4 text-sm mb-8">
            <li><a href="#" class="hover:text-white transition">Documentation</a></li>
            <li><a href="#" class="hover:text-white transition">Help Center</a></li>
            <li><a href="#" class="hover:text-white transition">Community</a></li>
            <li><a href="#" class="hover:text-white transition">Contact</a></li>
          </ul>
          
          <h3 class="text-white font-semibold mb-4">Social Links</h3>
          <div class="flex space-x-4">
            <a href="#" class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.52 4.398-4.52 1.251 0 2.328.093 2.641.135v3.062h-1.812c-1.42 0-1.695.674-1.695 1.666v2.184h3.39l-.441 3.429h-2.949v8.783h6.183c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.487h2.039L6.486 3.24H4.298L17.61 20.64z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="mb-4 md:mb-0">© 2026 Digitools. All rights reserved.</p>
        <div class="flex space-x-6">
          <a href="#" class="hover:text-white transition">Privacy Policy</a>
          <a href="#" class="hover:text-white transition">Terms of Service</a>
          <a href="#" class="hover:text-white transition">Cookies</a>
        </div>
      </div>

    </div>
  </footer>
        </div>
    );
};

export default FooterSection;