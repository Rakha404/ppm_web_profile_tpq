const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Content = require('../models/Content');

// Kontrol Penyimpanan File Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// 1. GET DATA KONTEN
router.get('/', async (req, res) => {
  try {
    let content = await Content.findOne();
    if (!content) {
      content = new Content();
      await content.save();
    }
    return res.status(200).json({ success: true, data: content });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 2. PUT UPDATE KONTEN
router.put('/update', upload.any(), async (req, res) => {
  try {
    let content = await Content.findOne();
    if (!content) {
      content = new Content();
    }

    // Assign semua input text body
    Object.assign(content, req.body);

    // Cek upload single file untuk background quote
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        if (file.fieldname === 'quote_bg') {
          content.quote_bg_url = `/uploads/${file.filename}`;
        }
      });
    }

    await content.save();
    return res.status(200).json({ 
      success: true, 
      message: 'Konten CMS berhasil diperbarui!', 
      data: content 
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;