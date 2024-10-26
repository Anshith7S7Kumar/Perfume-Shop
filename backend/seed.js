import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js'; 
import fs from 'fs';
import path from 'path';

dotenv.config(); 

const imageToBase64 = (imagePath) => {
    const fullPath = path.join(__dirname, imagePath); 

    const imageData = fs.readFileSync(fullPath);
    return imageData.toString('base64');
  };

const products = [
  {
    name: "Elysian Bloom",
    shortDescription: "A delicate floral fragrance.",
    description: "This enchanting floral fragrance weaves a delicate tapestry of jasmine and honeysuckle, exuding an irresistible sweetness that dances on the skin. The heart of the scent is beautifully enriched with creamy vanilla, adding a warm and comforting undertone. Together, these notes create a harmonious blend that captures the essence of a blooming garden in full spring, evoking feelings of elegance and serenity. Perfect for those who appreciate the allure of soft, romantic fragrances that linger gracefully throughout the day.",
    price: 29.99,
    imageUrl: "assets/Elysian-bloom.jpg",
    images: ["assets/Elysian-bloom.jpg", "assets/Elysian-bloom2.jpg", "assets/Elysian-bloom3.jpg"], 
    sizes: ["50ml", "100ml", "150ml"],
    reviews: [
      { user: "Alice", rating: 5, comment: "Absolutely love this scent!" },
      { user: "John", rating: 4, comment: "Great for daily wear." }
    ]
  },

  {
    name: "Crimson Desire",
    shortDescription: "A passionate floral fragrance.",
    description: "This captivating fragrance is a passionate fusion of ripe red berries, whose vibrant sweetness ignites the senses. It blooms into a heart of velvety rose, adding a luxurious and romantic touch that envelops you in its embrace. The warm vanilla base grounds the scent, infusing it with a comforting richness that lingers on the skin. Together, these notes create a dynamic and alluring fragrance that embodies the spirit of desire, making it perfect for those who seek a bold yet sophisticated scent experience.",
    price: 39.99,
    imageUrl: "assets/Crimson-desire.jpg",
    images: ["assets/Crimson-desire.jpg", "assets/Crimson-desire2.jpg", "assets/Crimson-desire3.jpg"], 
    sizes: ["50ml", "100ml", "150ml"],
    reviews: [
      { user: "Alice", rating: 5, comment: "Absolutely love this scent!" },
      { user: "John", rating: 4, comment: "Great for daily wear." }
    ]
  },

  {
    name: "Celestial Night",
    shortDescription: "A captivating night-inspired scent.",
    description: "This enchanting fragrance opens with the alluring scent of midnight jasmine, creating a captivating floral introduction that evokes a sense of mystery and elegance. As it unfolds, warm sandalwood adds a creamy depth, grounding the scent with its rich, woody undertones. A whisper of spiced vanilla dances through, bringing a touch of sweetness that harmonizes beautifully with the florals and woods, creating a mesmerizing blend that lingers in the night air.",
    price: 49.99,
    imageUrl: "assets/Celestial-night.jpg",
    images: ["assets/Celestial-night.jpg", "assets/Celestial-night2.jpg", "assets/Celestial-night3.jpg"], 
    sizes: ["50ml", "100ml", "150ml"],
    reviews: [
      { user: "Alice", rating: 5, comment: "Absolutely love this scent!" },
      { user: "John", rating: 4, comment: "Great for daily wear." }
    ]
  },

  {
    name: "Urban Aura",
    shortDescription: "A fresh and vibrant fragrance.",
    description: "This refreshing fragrance bursts with a vibrant mix of zesty bergamot, infusing the air with its bright citrus notes that awaken the senses. Fresh mint adds a cool, invigorating twist, enhancing the fragrance's liveliness. Finally, sparkling grapefruit rounds out the composition, contributing a bubbly effervescence that captures the essence of a lively urban atmosphere. Together, these elements create a dynamic and uplifting scent that embodies the energy and vitality of city life.",
    price: 59.99,
    imageUrl: "assets/Urban-aura.jpg",
    images: ["assets/Urban-aura.jpg","assets/Urban-aura2.jpg", "assets/Urban-aura3.jpg"], 
    sizes: ["50ml", "100ml", "150ml"],
    reviews: [
      { user: "Alice", rating: 5, comment: "Absolutely love this scent!" },
      { user: "John", rating: 4, comment: "Great for daily wear." }
    ]
  },

  {
    name: "Mystic Pulse",
    shortDescription: "An edgy and mysterious aroma.",
    description: "This bold fragrance opens with an edgy fusion of smoky vetiver, enveloping you in its mysterious allure and creating a sense of intrigue. The wild berries introduce a burst of juicy sweetness, contrasting beautifully with the depth of the vetiver. An unexpected hint of leather weaves through, adding a rugged sophistication that enhances the overall complexity of the scent. This unique combination results in a daring fragrance that embodies a sense of adventure and individuality.",
    price: 69.99,
    imageUrl: "assets/Mystic-pulse.jpg",
    images: ["assets/Mystic-pulse.jpg", "assets/Mystic-pulse2.jpg", "assets/Mystic-pulse3.jpg"], 
    sizes: ["50ml", "100ml", "150ml"],
    reviews: [
      { user: "Alice", rating: 5, comment: "Absolutely love this scent!" },
      { user: "John", rating: 4, comment: "Great for daily wear." }
    ]
  },
  
];

const seedDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB!");
      
      const result = await Product.deleteMany({});
      console.log("Deleted products:", result.deletedCount);
      
      await Product.insertMany(products);
      console.log("Database seeded!");
    } catch (error) {
      console.error("Error seeding the database:", error);
    } finally {
      mongoose.connection.close();
    }
  };
  
  seedDB();
