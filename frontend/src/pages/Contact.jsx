import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px] w-full">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-gray-200 max-w-2xl text-lg">
            We would love to hear from you. Reach out to us for any
            questions, support, or collaboration opportunities.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">
        {/* Left Side */}
        <div>
          <p className="text-sm uppercase tracking-[5px] text-gray-500 mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Let’s Start a Conversation
          </h2>

          <p className="text-gray-600 leading-8 mb-10">
            Have questions about our collections, delivery, or services?
            Our team is always ready to assist you with the best
            customer experience.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-5 bg-white p-5 rounded-2xl shadow-sm">
              <div className="bg-black text-white p-4 rounded-xl">
                <Mail size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Email Address
                </h3>

                <p className="text-gray-500 mt-1">
                  support@fashionstore.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 bg-white p-5 rounded-2xl shadow-sm">
              <div className="bg-black text-white p-4 rounded-xl">
                <Phone size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Phone Number
                </h3>

                <p className="text-gray-500 mt-1">
                  +880 1234-567890
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-5 bg-white p-5 rounded-2xl shadow-sm">
              <div className="bg-black text-white p-4 rounded-xl">
                <MapPin size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Office Location
                </h3>

                <p className="text-gray-500 mt-1">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-5 bg-white p-5 rounded-2xl shadow-sm">
              <div className="bg-black text-white p-4 rounded-xl">
                <Clock size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Working Hours
                </h3>

                <p className="text-gray-500 mt-1">
                  Sat - Thu : 9 AM - 8 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Send Message
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8972121448115!2d90.37498967594258!3d23.810332986421587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c751b7b5c57d%3A0x7fbb4c6e97ed9866!2sDhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;