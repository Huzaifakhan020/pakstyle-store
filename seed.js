const mongoose = require('mongoose');
const Product = require('./models/Product'); // Ensure rasta sahi ho

// Aapka Atlas Connection Link
const dbURI = 'mongodb://huzaifahmedkhan18_db_user:12345678900@cluster0-shard-00-00.y1pntr6.mongodb.net:27017,cluster0-shard-00-01.y1pntr6.mongodb.net:27017,cluster0-shard-00-02.y1pntr6.mongodb.net:27017/pakstyle?ssl=true&replicaSet=atlas-xxxxxx-shard-0&authSource=admin&retryWrites=true&w=majority';
const products = [
    {
        name: "Premium Embroidered Lawn Suit",
        price: 4500,
        description: "High-quality 3-piece embroidered lawn suit for festive wear.",
        category: "Women's Fashion",
        image: "https://www.pakstyle.pk/img/products/l/p16215-embroidered-luxury-lawn-suit-with-chiffon-dupatta.jpg",
        stock: 15
    },
    {
        name: "Classic Men's Cotton Kurta",
        price: 2800,
        description: "Elegant white cotton kurta for men, perfect for summer.",
        category: "Men's Fashion",
        image: "https://www.pakstyle.pk/img/products/l/p15432-mens-cotton-kurta-white.jpg",
        stock: 20
    },
    {
        name: "Designer Gold Plated Jewellery Set",
        price: 3500,
        description: "Beautiful gold-plated necklace set with earrings.",
        category: "Jewellery",
        image: "https://www.pakstyle.pk/img/products/l/p14321-gold-plated-jewellery-set.jpg",
        stock: 10
    },
    {
        name: "Luxury Leather Strap Watch",
        price: 1500,
        description: "Stylish black leather strap watch for everyday elegance.",
        category: "Watches",
        image: "https://www.pakstyle.pk/img/products/l/p13210-luxury-leather-watch.jpg",
        stock: 25
    }
];

async function seedDB() {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to Atlas for seeding...");
        
        await Product.deleteMany({});
        await Product.insertMany(products);
        
        console.log("Database Seeded Successfully into Atlas!");
        process.exit();
    } catch (err) {
        console.error("Seeding Error:", err);
        process.exit(1);
    }
}

seedDB();