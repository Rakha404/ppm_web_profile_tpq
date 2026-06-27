const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Galeri = require('../models/Galeri');

// Setup Multer Storage (Sama seperti kemarin, disimpan di folder uploads)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname))
});

const upload = multer({ storage });

// 1. AMBIL SEMUA DATA GALERI (Untuk Halaman Utama)
router.get('/', async (req, res) => {
    try {
        const semuaGaleri = await Galeri.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, data: semuaGaleri });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 2. TAMBAH ALBUM GALERI BARU (Untuk Admin di Dashboard)
router.post('/add', upload.array('images', 10), async (req, res) => {
    try {
        const { title, subTitle } = req.body;

        // Ambil semua file path yang berhasil di-upload
        const filePaths = req.files.map(file => `/uploads/${file.filename}`);

        const galeriBaru = new Galeri({
            title,
            subTitle,
            photos: filePaths
        });

        await galeriBaru.save();
        return res.status(201).json({ success: true, message: 'Album galeri baru berhasil ditambahkan!', data: galeriBaru });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 3. UPDATE DETAIL ALBUM & TAMBAH FOTO BARU (Maksimal 10 foto tambahan sekali upload)
router.put('/update/:id', upload.array('images', 10), async (req, res) => {
    try {
        const { title, subTitle } = req.body;

        // 1. Cari dulu album aslinya di database
        let galeri = await Galeri.findById(req.params.id);
        if (!galeri) {
            return res.status(404).json({ success: false, message: 'Album tidak ditemukan!' });
        }

        // 2. Perbarui teks judul jika dikirim oleh frontend
        if (title) galeri.title = title;
        if (subTitle) galeri.subTitle = subTitle;

        // 3. Jika admin memilih file foto baru, gabungkan jalurnya ke array foto lama
        if (req.files && req.files.length > 0) {
            const newFilePaths = req.files.map(file => `/uploads/${file.filename}`);
            galeri.photos = [...galeri.photos, ...newFilePaths]; // Menggabungkan array lama + baru
        }

        await galeri.save();
        return res.status(200).json({
            success: true,
            message: 'Album dan foto tambahan berhasil diperbarui!',
            data: galeri
        });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 4. HAPUS ALBUM GALERI TOTAL
router.delete('/delete/:id', async (req, res) => {
    try {
        const galeriHapus = await Galeri.findByIdAndDelete(req.params.id);

        if (!galeriHapus) {
            return res.status(404).json({ success: false, message: 'Album tidak ditemukan!' });
        }

        // Catatan: Jika ingin menghapus file fisik di folder /uploads juga, bisa gunakan modul 'fs' Node.js.
        // Tapi hapus data dari MongoDB ini sudah cukup untuk menghilangkan album dari website.

        return res.status(200).json({ success: true, message: 'Album galeri berhasil dihapus dari database!' });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;