import React from "react";
import { Users, Target, Award, Truck } from "lucide-react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-5xl font-bold text-white mb-4">
            About Us
          </h1>

          <p className="text-gray-200 max-w-2xl text-lg">
            We create premium fashion experiences that blend elegance,
            comfort, and modern lifestyle trends into one destination.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
            alt="Our Story"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[5px] text-gray-500 mb-3">
            Our Story
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Fashion That Inspires Confidence
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            Our brand started with a simple vision — to deliver stylish,
            affordable, and premium-quality fashion for everyone. We
            believe clothing is more than just style; it reflects
            personality, confidence, and self-expression.
          </p>

          <p className="text-gray-600 leading-8">
            Over the years, we have built a strong community of fashion
            lovers who value creativity, quality craftsmanship, and
            timeless aesthetics.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800">
              Why Choose Us
            </h2>

            <p className="text-gray-500 mt-4">
              Delivering excellence through quality, innovation, and trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="bg-black text-white w-14 h-14 flex items-center justify-center rounded-2xl mb-5">
                <Award size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-600 leading-7">
                Carefully crafted materials and attention to detail in
                every collection.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="bg-black text-white w-14 h-14 flex items-center justify-center rounded-2xl mb-5">
                <Truck size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600 leading-7">
                Reliable and fast shipping services for smooth customer
                experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="bg-black text-white w-14 h-14 flex items-center justify-center rounded-2xl mb-5">
                <Users size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                Trusted Community
              </h3>

              <p className="text-gray-600 leading-7">
                Thousands of happy customers trust our brand and fashion
                collections.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="bg-black text-white w-14 h-14 flex items-center justify-center rounded-2xl mb-5">
                <Target size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                Modern Vision
              </h3>

              <p className="text-gray-600 leading-7">
                Blending innovation and modern fashion trends into every
                design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Meet Our Team
          </h2>

          <p className="text-gray-500 mt-4">
            Passionate people behind our growing fashion brand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Sophia Carter",
              role: "Creative Director",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            },
            {
              name: "James Walker",
              role: "Fashion Designer",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            },
            {
              name: "Emily Johnson",
              role: "Marketing Head",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
            >
              <img
                src={`${member.image}?auto=format&fit=crop&w=800&q=80`}
                alt={member.name}
                className="w-full h-[350px] object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-gray-500 mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-5">
          Join Our Fashion Journey
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 leading-8 mb-8">
          Discover collections designed with passion, elegance, and
          innovation to redefine your style statement.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Explore Collections
        </button>
      </div>
    </div>
  );
}

export default About;