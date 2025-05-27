import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-24 bg-[#F9F7F4]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#003545]">
            Everything You Need to
            <span className="block mt-2 bg-gradient-to-r from-[#003545] to-[#00796B] bg-clip-text text-transparent">
              Keep Your Family Connected
            </span>
          </h2>
          <p className="text-xl text-[#003545]/80">
            Designed for modern families, packed with features that make staying organized effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Calendar",
              description: "Keep everyone in sync with shared calendars and automated reminders.",
              icon: "📅"
            },
            {
              title: "Task Management",
              description: "Create and assign tasks to family members with easy tracking.",
              icon: "✓"
            },
            {
              title: "Smart Home Controls",
              description: "Control your smart home devices directly from the display.",
              icon: "🏠"
            },
            {
              title: "Family Chat",
              description: "Stay connected with built-in messaging and photo sharing.",
              icon: "💬"
            },
            {
              title: "Voice Control",
              description: "Hands-free operation with voice commands and responses.",
              icon: "🎤"
            },
            {
              title: "Weather Updates",
              description: "Real-time weather forecasts to plan your family activities.",
              icon: "🌤"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-[#003545]/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-[#F9F7F4] flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#003545]">{feature.title}</h3>
              <p className="text-[#003545]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 