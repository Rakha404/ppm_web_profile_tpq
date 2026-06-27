const express = require('express');
const router = express.Router();
const ProfilFull = require('../models/ProfilFull');

// 1. GET DATA
router.get('/', async (req, res) => {
  try {
    let profil = await ProfilFull.findOne();
    if (!profil) {
      profil = new ProfilFull({
        paragraphs: ["Yayasan TPQ & MDTA Raudlatul Ma'arif didirikan..."],
        pointGroups: [
          {
            pointsTitle: "Visi & Misi Utama",
            items: [{ title: "Generasi Qur'ani", desc: "Membentuk santri mahir membaca Al-Qur'an." }]
          }
        ]
      });
      await profil.save();
    }
    return res.status(200).json({ success: true, data: profil });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 2. UPDATE DATA
router.put('/update', async (req, res) => {
  try {
    const { titleH1, titleH2, paragraphs, pointGroups } = req.body;
    let profil = await ProfilFull.findOne();
    if (!profil) profil = new ProfilFull();

    if (titleH1 !== undefined) profil.titleH1 = titleH1;
    if (titleH2 !== undefined) profil.titleH2 = titleH2;
    if (paragraphs !== undefined) profil.paragraphs = paragraphs;
    if (pointGroups !== undefined) profil.pointGroups = pointGroups;

    await profil.save();
    return res.status(200).json({ success: true, message: 'Konten profil berhasil diperbarui!', data: profil });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;