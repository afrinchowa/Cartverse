import Product from "../model/productModel.js";
import uploadOnCloudinary from "../config/cloudinary.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files?.image1
      ? await uploadOnCloudinary(req.files.image1[0].path)
      : "";

    const image2 = req.files?.image2
      ? await uploadOnCloudinary(req.files.image2[0].path)
      : "";

    const image3 = req.files?.image3
      ? await uploadOnCloudinary(req.files.image3[0].path)
      : "";

    const image4 = req.files?.image4
      ? await uploadOnCloudinary(req.files.image4[0].path)
      : "";

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);

    return res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Add Product Error:", error);
    return res.status(500).json({
      message: "Add Product Error",
      error: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    console.error("Get Products Error:", error);
    return res.status(500).json({
      message: "Get Products Error",
      error: error.message,
    });
  }
};

export const listProduct = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(200).json(products);
  } catch (error) {
    console.error("List Product Error:", error);
    return res.status(500).json({
      message: "List Product Error",
      error: error.message,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product removed successfully",
    });
  } catch (error) {
    console.error("Remove Product Error:", error);
    return res.status(500).json({
      message: "Remove Product Error",
      error: error.message,
    });
  }
};