const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Banner = require('../models/Banner');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname))
});
const upload = multer({ storage });

// 1. AMBIL BANNER BERDASARKAN PAGE KEY
router.get('/:pageKey', async (req, res) => {
  try {
    const banner = await Banner.findOne({ pageKey: req.params.pageKey });
    if (!banner) {
      return res.status(200).json({ success: false, message: 'Banner belum di-set.' });
    }
    return res.status(200).json({ success: true, data: banner });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 2. UPDATE TEKS & TAMBAH FOTO CAROUSEL BANNER
router.put('/update/:pageKey', upload.array('images', 10), async (req, res) => {
  try {
    const { subTitle, mainTitle, boldTitle, motto, imagesToDelete } = req.body;
    let banner = await Banner.findOne({ pageKey: req.params.pageKey });

    if (!banner) {
      banner = new Banner({ pageKey: req.params.pageKey, mainTitle: mainTitle || "Judul Utama" });
    }

    if (subTitle !== undefined) banner.subTitle = subTitle;
    if (mainTitle !== undefined) banner.mainTitle = mainTitle;
    if (boldTitle !== undefined) banner.boldTitle = boldTitle;
    if (motto !== undefined) banner.motto = motto;

    // Logika hapus gambar tertentu jika dikirim oleh frontend
    if (imagesToDelete) {
      const toDelete = JSON.parse(imagesToDelete); // Array path yang mau dihapus
      banner.images = banner.images.filter(img => !toDelete.includes(img));
    }

    // Jika ada upload gambar baru, gabungkan ke array images
    if (req.files && req.files.length > 0) {
      const newFilePaths = req.files.map(file => `/uploads/${file.filename}`);
      banner.images = [...banner.images, ...newFilePaths];
    }

    await banner.save();
    return res.status(200).json({ success: true, message: 'Banner halaman berhasil diperbarui!', data: banner });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;