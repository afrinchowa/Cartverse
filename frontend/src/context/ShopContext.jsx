import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";


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

      if (result.data.success) {
        setProducts(result.data.products);
      } else {
        console.log(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (serverUrl) {
      getProducts();
    }
  }, [serverUrl]);

  const value = {
    products,
    setProducts,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    getProducts,
  };

  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
}

export default ShopContext;