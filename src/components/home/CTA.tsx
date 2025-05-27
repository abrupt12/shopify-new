import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-[#003545] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#00796B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FFD5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block mt-2 bg-gradient-to-r from-[#00FFD5] to-white bg-clip-text text-transparent">
              Family's Digital Life?
            </span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of families who have already discovered the magic of Lumora. Order now and get free shipping!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#00FFD5] hover:bg-[#00FFD5]/90 text-[#003545] font-bold px-8 py-6 text-lg" asChild>
              <Link to="/shop">
                Order Your Lumora <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#003545] px-8 py-6 text-lg" asChild>
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              30-day money back
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Free shipping
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              1-year warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 