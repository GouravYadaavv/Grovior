"use client";

import { Code2, Globe, Database, Shield } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Website Development",
    desc: "Fast, responsive and SEO-friendly websites for businesses."
  },
  {
    icon: <Code2 className="w-8 h-8 text-green-600" />,
    title: "Web App Development",
    desc: "Scalable web applications using modern technologies."
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Backend & APIs",
    desc: "Secure, high-performance APIs and database systems."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Security & Maintenance",
    desc: "Ongoing support, security updates and performance monitoring."
  }
];

const ServicesOverview = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Tech Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            End-to-end digital solutions to help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
