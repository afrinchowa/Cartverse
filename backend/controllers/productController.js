export const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes,bestSeller } = req.body;
        const newProduct = new Product({    name, image1, image2, image3, image4, description, price, category, subCategory, sizes });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }   
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};