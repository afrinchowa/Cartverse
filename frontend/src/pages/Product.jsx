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
