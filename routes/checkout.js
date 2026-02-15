const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.json({ success: true, orderId: newOrder._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;