const db = require('../config/db');

const Item = {
  // Mendapatkan semua items
  getAll: (callback) => {
    db.query('SELECT * FROM Items', callback);
  },

  // Menambahkan item baru
  create: (data, callback) => {
    const sql = `INSERT INTO Items (name, description, price, quantity, category_id, supplier_id, created_by) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [data.name, data.description, data.price, data.quantity, data.category_id, data.supplier_id, data.created_by], callback);
  },

  // Mendapatkan items berdasarkan kategori
  getByCategory: (categoryId, callback) => {
    const sql = 'SELECT * FROM Items WHERE category_id = ?';
    db.query(sql, [categoryId], callback);
  },

  // Mendapatkan items berdasarkan pemasok
  getBySupplier: (supplierId, callback) => {
    const sql = 'SELECT * FROM Items WHERE supplier_id = ?';
    db.query(sql, [supplierId], callback);
  },

  // Mendapatkan items dengan stok dibawah ambang batas tertentu
  getBelowStockThreshold: (threshold, callback) => {
    const sql = 'SELECT * FROM Items WHERE quantity < ?';
    db.query(sql, [threshold], callback);
  },

  // Menampilkan ringkasan stok barang (stok total, nilai stok, dan rata-rata harga)
  getStockSummary: (callback) => {
    const sql = `
      SELECT 
        SUM(quantity) AS total_stock,
        SUM(price * quantity) AS total_stock_value,
        AVG(price) AS avg_price
      FROM Items
    `;
    db.query(sql, callback);
  },

  // Menampilkan ringkasan barang per kategori
  getSummaryByCategory: (callback) => {
    const sql = `
      SELECT 
        category_id,
        COUNT(id) AS total_items,
        SUM(price * quantity) AS total_value,
        AVG(price) AS avg_price
      FROM Items
      GROUP BY category_id
    `;
    db.query(sql, callback);
  },

  // Menampilkan ringkasan barang yang disuplai oleh masing-masing pemasok
  getSummaryBySupplier: (callback) => {
    const sql = `
      SELECT 
        supplier_id,
        COUNT(id) AS total_items,
        SUM(price * quantity) AS total_value
      FROM Items
      GROUP BY supplier_id
    `;
    db.query(sql, callback);
  },

  // Menampilkan ringkasan keseluruhan sistem (jumlah total barang, nilai stok keseluruhan, jumlah kategori, jumlah pemasok)
  getSystemSummary: (callback) => {
    const sql = `
      SELECT 
        (SELECT COUNT(*) FROM Items) AS total_items,
        (SELECT SUM(price * quantity) FROM Items) AS total_stock_value,
        (SELECT COUNT(DISTINCT category_id) FROM Items) AS total_categories,
        (SELECT COUNT(DISTINCT supplier_id) FROM Items) AS total_suppliers
    `;
    db.query(sql, callback);
  }
};

module.exports = Item;
