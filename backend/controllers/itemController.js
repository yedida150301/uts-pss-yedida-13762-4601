// backend/controllers/itemController.js
const Item = require('../models/itemModel');

// Mendapatkan semua items
const getItems = async (req, res) => {
  try {
    const items = await Item.find(); // Mencari semua items di database
    res.json(items); // Mengembalikan data item dalam format JSON
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items' });
  }
};

// Menambahkan item baru
const addItem = async (req, res) => {
  const { name, sku, category, stock, price } = req.body;
  try {
    const newItem = new Item({ name, sku, category, stock, price });
    await newItem.save(); // Menyimpan item baru ke database
    res.status(201).json(newItem); // Mengembalikan item yang baru ditambahkan
  } catch (error) {
    res.status(500).json({ message: 'Error adding item' });
  }
};

module.exports = { getItems, addItem };
