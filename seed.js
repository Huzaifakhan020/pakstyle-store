const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/pakstyle')
.then(async () => {
    console.log("Connected to DB for seeding...");
    
    // Purana data delete karne ke liye
    await Product.deleteMany({});

    const initialProducts = [
        { id: 1, name: "Men's Luxury Shalwar Kameez", category: "clothing", price: 4500, originalPrice: 6000, image: "https://hooraindesignerwear.com/cdn/shop/files/ismailfarid-eastern-wear-new-arrivals_189.jpg", badge: "New" },
        { id: 2, name: "Women's Embroidered Suit", category: "clothing", price: 8500, originalPrice: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrervKChC0l0SFku2jeKdTNarjpaBPeyKpfA&s", badge: "Sale" },
        { id: 3, name: "Traditional Kundan Set", category: "jewellery", price: 3500, originalPrice: 5000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-U-pSWh1qAcXPTCSd6iszsU609TikCb15aw&s" },
        { id: 4, name: "Gold Plated Men's Watch", category: "watches", price: 12000, originalPrice: 15000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvSQoYMBfYjjrxkAUORfM4F5EPCUUPncgWQ&s" }
    ];

    await Product.insertMany(initialProducts);
    console.log("Database Seeded! Ab website refresh karein.");
    process.exit();
}).catch(err => console.log(err));