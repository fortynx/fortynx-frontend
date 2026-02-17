import { Phone } from "lucide-react";

import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-10">
          Ready to start your project? Call us directly and let’s build something amazing.
        </p>

        {/* Phone Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-4 hover:shadow-xl transition">

          <div className="p-4 rounded-full bg-blue-100">
            <Phone className="text-blue-600" size={32} />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            Call Us Now
          </h3>

          <a
            href="tel:+917901247450"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
          >
            +91 7901247450
          </a>

          <p className="text-gray-500 text-sm">
            Available Monday – Saturday | 9:00 AM – 7:00 PM
          </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;
