const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
// Purani local line ko hata dein aur Atlas wali line add karein
const dbURI = 'mongodb+srv://huzaifahmedkhan18_db_user:123456789@cluster8.y1pntr6.mongodb.net/pakstyle?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log("Atlas MongoDB Connected"))
  .catch(err => console.log(err));
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ROUTES CONNECT KARNA
app.use('/api/products', require('./routes/products'));
app.use('/api/checkout', require('./routes/checkout'));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});