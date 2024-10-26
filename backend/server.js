import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js'; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api/products', productRoutes);


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
    res.send('Welcome to the Perfume Shop API!'); 
  });


app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Sample Express route to handle reviews
app.post('/api/products/:id/reviews', async (req, res) => {
  const { user, rating, comment } = req.body;
  const productId = req.params.id;

  // Validate input
  if (!user || !rating || !comment) {
    return res.status(400).send('All fields are required');
  }

  // Add the review to the database (assuming you have a Review model)
  const newReview = { user, rating, comment, createdAt: new Date() };
  await Product.findByIdAndUpdate(productId, {
    $push: { reviews: newReview }
  });

  // Send back the new review
  res.status(201).json(newReview);
});

