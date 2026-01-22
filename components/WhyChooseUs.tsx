"use client";

import { CheckCircle } from "lucide-react";

const points = [
  "Modern tech stack & clean code",
  "Business-focused development approach",
  "Fast delivery with clear communication",
  "Affordable pricing for startups & local businesses",
  "Long-term support & maintenance"
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Groviar Tech Services?
            </h2>

            <p className="mt-4 text-gray-600">
              We don't just build websites — we build digital systems
              that help your business scale and succeed.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Visual Box */}
          <div className="relative rounded-3xl bg-white p-10 shadow-xl">
            <p className="text-lg font-medium text-gray-900">
              💡 Our Focus
            </p>
            <p className="mt-4 text-gray-600">
              High-quality development, transparent communication,
              and measurable business results.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
