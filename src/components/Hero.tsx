import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F9F7F4] via-white to-[#F9F7F4] min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#003545] to-[#00796B] rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00796B] to-[#003545] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-gradient-to-r from-[#F9F7F4] to-white text-[#003545] px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-[#003545]/10 animate-float" style={{ animationDelay: '0.5s' }}>
              <CheckCircle className="w-4 h-4 mr-2" />
              ✨ Trusted by 20,000+ Families
            </div>
            
            <h1 className="font-sora text-5xl lg:text-7xl font-bold leading-tight text-[#003545]">
              The Smart Display That 
              <span className="block mt-2 bg-gradient-to-r from-[#003545] to-[#00796B] bg-clip-text text-transparent">Brings Your Family Together</span>
            </h1>
            
            <p className="text-xl text-[#003545]/80 leading-relaxed font-medium">
              Transform any wall into a beautiful, interactive family command center. Stay organized with shared calendars, reminders, and smart home controls that everyone loves to use.
            </p>
            
            <div className="flex items-center gap-3 text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              <span className="font-semibold text-[#003545]">4.8/5</span>
              <span className="text-[#003545]/60">from 2,340+ reviews</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#003545] hover:bg-[#003545]/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" asChild>
                <Link to="/shop">
                  Order Now - $79 <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 border-[#003545] text-[#003545] hover:bg-[#003545] hover:text-white transition-all duration-300" asChild>
                <Link to="/demo">Watch Demo</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 text-sm text-[#003545]/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00796B] rounded-full animate-pulse"></div>
                Free shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#003545] rounded-full animate-pulse"></div>
                7-14 day delivery
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00796B] rounded-full animate-pulse"></div>
                Setup in minutes
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/hero/dashboard-preview.jpg"
                alt="Lumora Dashboard Interface"
                className="w-full rounded-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                ✨
              </div>
              <div className="absolute -bottom-4 right-1/4 w-16 h-16 text-2xl animate-float" style={{ animationDelay: '2s' }}>
                ✨
              </div>
              
              {/* Assigned To Card */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#003545]">Assigned to</span>
                  <div className="flex -space-x-2">
                    <img src="/images/avatars/mom.jpg" alt="Mom" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/images/avatars/dad.jpg" alt="Dad" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/images/avatars/kid1.jpg" alt="Kid 1" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/images/avatars/kid2.jpg" alt="Kid 2" className="w-8 h-8 rounded-full border-2 border-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 