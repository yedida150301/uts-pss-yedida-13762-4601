UTS - PSS Yedida 13762 - Inventory Management System
Deskripsi Proyek
Proyek ini merupakan pengembangan sistem manajemen inventaris yang dapat mengelola barang, kategori, pemasok, serta melakukan transaksi stok barang. Tujuan dari proyek ini adalah untuk membuat aplikasi berbasis web yang dapat mempermudah pengelolaan persediaan barang, serta memungkinkan admin untuk memantau stok dan melakukan transaksi seperti penambahan atau pengurangan stok barang.

Aplikasi ini terdiri dari dua bagian utama:

Frontend: Dibangun menggunakan ReactJS dan TailwindCSS untuk tampilan yang responsif dan interaktif.

Backend: Dibangun menggunakan Node.js dengan Express untuk menangani API yang berhubungan dengan pengelolaan data barang, kategori, pemasok, dan transaksi. MySQL digunakan sebagai database untuk menyimpan data.

Alur Pengerjaan Proyek
1. Inisialisasi Proyek
Pada awalnya, proyek ini diinisialisasi dengan membuat dua bagian utama:

Frontend: Menggunakan ReactJS dan TailwindCSS untuk antarmuka pengguna yang responsif.

Backend: Menggunakan Node.js dan Express untuk membuat API dan menangani koneksi ke database MySQL.

Pada tahap ini, dilakukan pengaturan folder untuk kedua bagian tersebut, dan juga pengaturan dasar untuk menghubungkan frontend dengan backend.

2. Pengaturan Database (MySQL)
Database: Dibuat dengan nama inventory_db, yang digunakan untuk menyimpan data barang, kategori, pemasok, dan transaksi.

Tabel: Beberapa tabel penting yang dibuat adalah:

Items: Menyimpan data barang.

Categories: Menyimpan data kategori barang.

Suppliers: Menyimpan data pemasok.

Transactions: Menyimpan catatan transaksi masuk dan keluar barang.

Relasi: Relasi antar tabel dibuat untuk menghubungkan barang dengan kategori dan pemasok.

3. Backend Development
Dibangun menggunakan Express dan MySQL untuk membuat API.

API pertama yang dibangun adalah API untuk Create dan Read data barang, kategori, dan pemasok.

Implementasi logika API seperti:

Menambahkan barang baru ke dalam database.

Menampilkan daftar barang.

Menampilkan laporan berdasarkan kategori dan pemasok.

Pengujian API dilakukan menggunakan Postman untuk memastikan bahwa data dapat disalin, diubah, dan dihapus dengan benar dari database.

4. Frontend Development
ReactJS digunakan untuk membangun antarmuka pengguna.

Menggunakan TailwindCSS untuk styling agar tampilan menjadi responsif dan menarik.

Menambahkan fungsionalitas berikut pada frontend:

Dashboard untuk menampilkan total stok, nilai stok, dan kategori.

Item List untuk menampilkan semua barang yang ada di database.

Menambahkan Detail View untuk menampilkan informasi lengkap dari setiap barang, serta memungkinkan admin untuk mengubah stok.

Menambahkan Add New Item untuk menambah barang baru ke dalam database.

5. Implementasi Fitur Tambahan
Ringkasan Stok Barang: Menampilkan total stok barang, total nilai stok (harga x jumlah), dan rata-rata harga barang.

Barang di Bawah Ambang Batas: Menampilkan daftar barang yang stoknya berada di bawah ambang batas tertentu (misalnya di bawah 5 unit).

Laporan Berdasarkan Kategori: Menampilkan laporan berdasarkan kategori barang.

Ringkasan Per Kategori: Menampilkan ringkasan setiap kategori, termasuk jumlah barang per kategori, total nilai stok, dan rata-rata harga barang.

Ringkasan Pemasok: Menampilkan ringkasan barang yang disuplai oleh setiap pemasok, termasuk jumlah barang dan total nilai barang yang disuplai.

6. Dockerization
Docker Compose digunakan untuk mengelola container frontend, backend, dan database (MySQL).

Setiap bagian aplikasi dijalankan dalam container Docker, yang memungkinkan pengelolaan dan pengaturan yang lebih mudah.

7. Pengujian
Pengujian dilakukan pada bagian API menggunakan Postman dan frontend menggunakan browser.

Pastikan API dapat menangani permintaan GET, POST, PUT, dan DELETE dengan baik.

Tampilan frontend diuji di berbagai ukuran layar untuk memastikan aplikasi responsif dan mudah digunakan.

8. Penyelesaian
Setelah semua fitur utama berhasil diterapkan dan diuji, proyek ini selesai dan siap untuk digunakan. Semua bagian telah terintegrasi dengan baik, dan aplikasi siap digunakan untuk memanage inventaris barang.

Fitur Utama Aplikasi
Dashboard: Menampilkan informasi total stok, total nilai stok, kategori, dan pemasok.

Item List: Daftar semua barang dengan SKU, Nama, Kategori, Stok, dan Harga.

Stock Management: Menambah atau mengurangi stok barang.

Reports: Laporan stok barang berdasarkan kategori atau pemasok.
