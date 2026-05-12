import React from 'react'

function Product() {
  return (
    <div>
      <h1>Product</h1>
      <p>This is the product page.</p>
      import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  SlidersHorizontal,
} from "lucide-react";

function Product() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Classic Black Hoodie",
      price: "$85",
      category: "Hoodie",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      name: "Modern Street Jacket",
      price: "$120",
      category: "Jacket",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    },
    {
      id: 3,
      name: "Premium White Sneakers",
      price: "$150",
      category: "Shoes",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 4,
      name: "Minimal Casual Shirt",
      price: "$65",
      category: "Shirt",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
      id: 5,
      name: "Luxury Hand Bag",
      price: "$200",
      category: "Bag",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    },
    {
      id: 6,
      name: "Smart Watch Edition",
      price: "$250",
      category: "Watch",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 7,
      name: "Elegant Sunglasses",
      price: "$55",
      category: "Accessories",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
      id: 8,
      name: "Denim Blue Jeans",
      price: "$90",
      category: "Jeans",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
 return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80"
          alt="Products Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our Products
          </h1>

          <p className="text-gray-200 text-lg max-w-2xl">
            Explore premium quality fashion products designed for
            comfort, elegance, and modern lifestyle.
          </p>
        </div>
      </div>
         {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-5 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-[400px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          <SlidersHorizontal size={18} />
          Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={`${product.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={product.name}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Wishlist */}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition">
                  <Heart size={18} />
                </button>

                {/* Category */}
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
