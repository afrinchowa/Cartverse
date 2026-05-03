import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";

function Lists() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      setLoading(true);
      const result = await axios.get(serverUrl + "/api/products/list");
      setList(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeList = async (id) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/products/remove/${id}`,
        {},
        { withCredentials: true }
      );

      if (result.data?.success) {
        fetchList();
      } else {
        alert("Failed to remove product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#0c2025] text-white">

      <Sidebar />
      <Nav />

      <div className="ml-[18%] pt-24 px-6 md:px-10">

        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-semibold mb-8">
          Product Inventory
        </h1>

        {/* Content */}
        {loading ? (
          <div className="text-gray-400">Loading products...</div>
        ) : list.length > 0 ? (
          <div className="space-y-4">

            {list.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 hover:border-cyan-500 transition"
              >

                {/* Product Info */}
                <div className="flex items-center gap-4">

                  <img
                    src={item.image1}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-400">{item.category}</p>
                    <p className="text-sm text-cyan-400">${item.price}</p>
                  </div>

                </div>

                {/* Delete */}
                <button
                  onClick={() => removeList(item._id)}
                  className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        ) : (
          <div className="text-gray-400 text-center mt-20">
            No products available
          </div>
        )}

      </div>
    </div>
  );
}

export default Lists;