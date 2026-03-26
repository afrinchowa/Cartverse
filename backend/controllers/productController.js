import Product from "../model/productModel";

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
    let image1 = await uploadOnCloudinary(req.files.image1[0].path);
    let image2 = await uploadOnCloudinary(req.files.image2[0].path);
    let image3 = await uploadOnCloudinary(req.files.image3[0].path);
    let image4 = await uploadOnCloudinary(req.files.image4[0].path);
    const productData = {
      name,
      description,
      price:Number(price),
      category,
      subCategory,
      sizes:JSON.parse(sizes),
      bestSeller :bestSeller==="true"?true:false,
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };
   const product= await Product.create(productData);
   return res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.log("Add Product Error")
    return res.status(500).json({ message: `Add Product error ${error}` });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log("Get Products Error")
    return res.status(500).json({ message: `Get Products error ${error}` });
  }
};
