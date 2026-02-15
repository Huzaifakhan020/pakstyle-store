const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const dbURI = process.env.MONGO_URI || 'mongodb+srv://huzaifahmedkhan18_db_user:12345678900@cluster8.y1pntr6.mongodb.net/pakstyle?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log("Atlas MongoDB Connected"))
  .catch(err => console.log("DB Connection Error: ", err));

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/checkout', require('./routes/checkout'));

// Serve Static Frontend (Vercel fix)
// Ensure path is required at the top: const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;