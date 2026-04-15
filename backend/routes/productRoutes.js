import express from 'express'
import upload from '../middleware/multer'
import adminAuth from "../middleware/adminAuth.js";
 const productRoutes = express.Router()

 productRoutes.get('/', (req, res) => {
    res.send("Get Products")
 })

productRoutes.post('/addproduct', upload.fields([
   {name:"image1", maxCount:1},
    {name:"image2", maxCount:1},
     {name:"image3", maxCount:1},
      {name:"image4", maxCount:1}]), addProduct)

productRoutes.get('/getproducts', getProducts)

productRoutes.get('/list', listProduct)  
productRoutes.post('/remove/:id', adminAuth , removeProduct)

export default productRoutes