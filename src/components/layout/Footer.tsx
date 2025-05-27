import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold gradient-text">
              Lumora
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Transform your home into a smart, organized haven with our beautiful digital display.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-sky-600">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-sky-600">Pricing</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-sky-600">Shop</Link></li>
              <li><Link to="/app" className="text-gray-600 hover:text-sky-600">Mobile App</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-sky-600">About</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-sky-600">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-sky-600">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-sky-600">Press</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-sky-600">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-sky-600">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-sky-600">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-sky-600">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/guides" className="text-gray-600 hover:text-sky-600">Guides</Link></li>
              <li><Link to="/docs" className="text-gray-600 hover:text-sky-600">Documentation</Link></li>
              <li><Link to="/api" className="text-gray-600 hover:text-sky-600">API</Link></li>
              <li><Link to="/status" className="text-gray-600 hover:text-sky-600">Status</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Lumora. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-sky-600 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-sky-600 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-sky-600 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 