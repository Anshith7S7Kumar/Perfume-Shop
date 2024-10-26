import mongoose from 'mongoose';


const reviewSchema = new mongoose.Schema({
    user: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    shortDescription: { type: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    images: [String],
    sizes: [String],
    reviews: [reviewSchema]
});

const Product = mongoose.model('Product', productSchema);

export default Product;
