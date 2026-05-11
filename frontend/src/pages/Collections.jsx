import React, { useState } from "react";
import { Search, Heart, ShoppingBag, Star } from "lucide-react";

function Collections() {
  const [search, setSearch] = useState("");

  const collectionsData = [
    {
      id: 1,
      title: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      price: "$120",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Street Style",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      price: "$95",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Casual Wear",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      price: "$80",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Luxury Fashion",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
      price: "$210",
      rating: 4.9,
    },
    {
      id: 5,
      title: "Winter Essentials",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      price: "$150",
      rating: 4.8,
    },
    {
      id: 6,
      title: "Minimal Outfit",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      price: "$99",
      rating: 4.5,
    },
  ];

  const filteredCollections = collectionsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Our Collections
          </h1>
          <p className="text-gray-500 mt-2">
            Discover premium fashion collections curated for modern style.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-[320px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search collections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCollections.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Wishlist */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition">
                <Heart size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm text-gray-700">
                    {item.rating}
                  </span>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-4">
                Premium quality outfit with trendy modern aesthetics.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {item.price}
                </span>

                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
                  <ShoppingBag size={18} />
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCollections.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Collection Found
          </h2>
          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>
          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>
          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>
          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>

        </div>
      )}
    </div>
  );
}

export default Collections;