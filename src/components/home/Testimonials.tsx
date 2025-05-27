import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mom of 3",
    image: "/avatars/placeholder.svg",
    quote: "Lumora has transformed how we organize our busy family life. The kids love checking their schedules and it looks beautiful on our wall!"
  },
  {
    name: "Michael Chen",
    role: "Tech-Savvy Dad",
    image: "/avatars/placeholder.svg",
    quote: "Finally, a smart display that's both functional and aesthetically pleasing. The interface is intuitive and the smart home controls are fantastic."
  },
  {
    name: "Emily Rodriguez",
    role: "Working Parent",
    image: "/avatars/placeholder.svg",
    quote: "The shared calendar and reminders have been a game-changer for our family. We're more organized and connected than ever."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Loved by Families
            <span className="gradient-text block mt-2">Around the World</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of happy families who have transformed their homes with Lumora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 py-4 px-6 bg-white rounded-full shadow-lg">
            <img src="/logos/techcrunch.svg" alt="TechCrunch" className="h-6" />
            <img src="/logos/nyt.svg" alt="New York Times" className="h-6" />
            <img src="/logos/house-beautiful.svg" alt="House Beautiful" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}; 