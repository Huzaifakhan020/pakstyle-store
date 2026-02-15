const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Environment variables ke liye

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection String
// Pehle Vercel ke variables se check karega, warna aapka Atlas link use karega
const dbURI = process.env.MONGO_URI || 'mongodb+srv://huzaifahmedkhan18_db_user:123456789@cluster8.y1pntr6.mongodb.net/pakstyle?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log("Atlas MongoDB Connected Successfully!"))
  .catch(err => {
    console.log("MongoDB Connection Error: ", err);
  });

// Routes Connect Karna
app.use('/api/products', require('./routes/products'));
app.use('/api/checkout', require('./routes/checkout'));

// Base Route (Health Check)
app.get('/', (req, res) => {
    res.send("PakStyle API is running live...");
});

// Port Settings for Vercel
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Vercel ko server export karne ke liye