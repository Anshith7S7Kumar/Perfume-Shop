import express from 'express'; 
import Product from '../models/Product.js';
const router = express.Router(); 

router.get('/', async(req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(error) {
        res.status(500).json({ message : error.message });
    }
}); 

router.get('/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch(error) {
        res.status(500).json({ message : error.message });
    }
}); 

router.post('/:id/reviews', async (req, res) => {
    const { user, rating, comment } = req.body;
    const productId = req.params.id;
  
   
    if (!user || !rating || !comment) {
      return res.status(400).send('All fields are required');
    }
  
    
    const newReview = { user, rating, comment };
  
    try {
      
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $push: { reviews: newReview } },
        { new: true }
      );
  
      
      res.status(201).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;