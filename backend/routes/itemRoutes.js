// backend/routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel'); // Impor model item

// Mendapatkan semua items
router.get('/items', (req, res) => {
  Item.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching items', error: err });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
