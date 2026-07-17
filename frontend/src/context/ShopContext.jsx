import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const { serverUrl } = useContext(authDataContext);

  const currency = "$";
  const delivery_fee = 5;

  const getProducts = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/product/list`);
      setProducts(result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    try {
      const result = await axios.get(`${serverUrl}/api/product/list`);
      setProducts(result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }

  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = {
    products,
    setProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    currency,
    delivery_fee,
    getProducts,
  };


  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>

  );
}

export default ShopContext;