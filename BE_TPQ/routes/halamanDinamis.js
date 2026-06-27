const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const HalamanProfil = require('../models/HalamanProfil');
const HalamanPendidikan = require('../models/HalamanPendidikan');

// Konfigurasi storage multer (Gunakan yang sudah ada atau samakan dengan server.js)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, 'dinamis-' + Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

// ================= ROUTE 1: HALAMAN PROFIL =================
// ➔ GET: Ambil data profil
router.get('/profil', async (req, res) => {
  try {
    let data = await HalamanProfil.findOne();
    if (!data) { data = new HalamanProfil(); await data.save(); }
    return res.status(200).json({ success: true, data });
  } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
});

// ➔ PUT: Update data pendidikan + Multi-upload untuk data pilar dinamis
router.put('/pendidikan/update', upload.any(), async (req, res) => {
  try {
    const { titleH1, titleH2, paragraphs, isLogo, kurikulum_points, pilar_cards } = req.body;
    let data = await HalamanPendidikan.findOne() || new HalamanPendidikan();
    
    data.titleH1 = titleH1;
    data.titleH2 = titleH2;
    if (paragraphs) data.paragraphs = JSON.parse(paragraphs);
    if (isLogo !== undefined) data.isLogo = isLogo === 'true';

    // File gambar utama halaman pendidikan (jika ada)
    const mainFile = req.files.find(f => f.fieldname === 'foto_pendidikan');
    if (mainFile) data.imageSrc = `/uploads/${mainFile.filename}`;

    // Parsing data kurikulum points
    if (kurikulum_points) data.kurikulum_points = JSON.parse(kurikulum_points);

    // Parsing data pilar cards & map file gambarnya sesuai indeks baris
    if (pilar_cards) {
      const parsedPilar = JSON.parse(pilar_cards);
      
      data.pilar_cards = parsedPilar.map((card, idx) => {
        const cardFile = req.files.find(f => f.fieldname === `pilar_image_${idx}`);
        return {
          category: card.category,
          title: card.title,
          desc: card.desc,
          iconType: card.iconType || "school", // ➕ IKUT PETAKAN FIELD IKON DI SINI
          image: cardFile ? `/uploads/${cardFile.filename}` : card.image
        };
      });
    }
    
    await data.save();
    return res.status(200).json({ success: true, message: 'Halaman Pendidikan & Pilar Berhasil diperbarui!', data });
  } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
});

// ================= ROUTE 2: HALAMAN PENDIDIKAN =================
// ➔ GET: Ambil data pendidikan
router.get('/pendidikan', async (req, res) => {
  try {
    let data = await HalamanPendidikan.findOne();
    if (!data) { data = new HalamanPendidikan(); await data.save(); }
    return res.status(200).json({ success: true, data });
  } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
});

// ➔ PUT: Update data pendidikan + Upload single foto
router.put('/pendidikan/update', upload.single('foto_pendidikan'), async (req, res) => {
  try {
    const { titleH1, titleH2, paragraphs, isLogo } = req.body;
    let data = await HalamanPendidikan.findOne() || new HalamanPendidikan();
    
    data.titleH1 = titleH1;
    data.titleH2 = titleH2;
    if (paragraphs) data.paragraphs = JSON.parse(paragraphs);
    if (isLogo !== undefined) data.isLogo = isLogo === 'true';
    if (req.file) data.imageSrc = `/uploads/${req.file.filename}`;
    
    await data.save();
    return res.status(200).json({ success: true, message: 'Halaman Pendidikan berhasil diperbarui!', data });
  } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
});

module.exports = router;