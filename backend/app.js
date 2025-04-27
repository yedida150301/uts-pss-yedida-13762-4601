const express = require('express');
const app = express();
const cors = require('cors');
const itemsRoutes = require('./routes/items'); // Menyambungkan rute items.js

app.use(cors());
app.use(express.json()); // Untuk parsing JSON

// Menambahkan rute untuk items
app.use('/api', itemsRoutes);

// Menentukan port yang digunakan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
