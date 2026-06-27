const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// 1. IMPORT MODELS & ROUTES
const PendaftaranSantri = require('./models/Santri');
const KritikSaran = require('./models/KritikSaran'); 
const SectionPendaftaran = require('./models/SectionPendaftaran');

const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/content'); 
const galeriRoutes = require('./routes/galeri');
const bannerRoutes = require('./routes/banner');
const profilFullRoutes = require('./routes/profilFull');
const halamanDinamisRoutes = require('./routes/halamanDinamis');
const KontakHeader = require('./models/KontakHeader');

const app = express();

// 2. MIDDLEWARE
app.use(cors());
app.use(express.json());

// TAMBAHKAN BARIS INI AGAR FOLDER UPLOADS BISA DIAKSES PUBLIK VIA BROWSER
app.use('/uploads', express.static('uploads'));

// 3. KONEKSI KE MONGODB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tpq_raudlatul_maarif';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Sukses terhubung ke MongoDB Database!'))
  .catch((err) => console.error('❌ Gagal koneksi ke MongoDB:', err));

// CONFIGURASI STORAGE MULTI-UPLOAD UNTUK BANNER SECTION PPDB
const storagePendaftaran = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, 'pendaftaran-' + Date.now() + path.extname(file.originalname))
});
const uploadPendaftaran = multer({ storage: storagePendaftaran }).array('files_slideshow', 10);

// 4. ROUTE API PENDAFTARAN SANTRI (FORM DEPAN)
app.post('/api/pendaftaran', async (req, res) => {
  console.log("===> Memproses Submit Pendaftaran Baru:", req.body);
  try {
    const dataBaru = new PendaftaranSantri(req.body);
    await dataBaru.save();
    return res.status(201).json({ success: true, message: 'Alhamdulillah, data pendaftaran disimpan!' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ROUTE GET UNTUK MANAJEMEN ADMIN MELIHAT DATA REKAPITULASI SANTRI
app.get('/api/pendaftaran', async (req, res) => {
  try {
    const semuaSantri = await PendaftaranSantri.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: semuaSantri });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 5. ROUTE API KRITIK & SARAN
app.post('/api/kritik-saran', async (req, res) => {
  try {
    const masukanBaru = new KritikSaran(req.body);
    await masukanBaru.save();
    return res.status(201).json({ success: true, message: 'Kritik saran terkirim!' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ➕ ROUTE GET: Tempat Admin Menarik Seluruh Data Kritik & Saran dari Database
app.get('/api/kritik-saran', async (req, res) => {
  try {
    const semuaMasukan = await KritikSaran.find().sort({ createdAt: -1 });
    console.log(`===> Admin Menarik Data Masukan: Ditemukan ${semuaMasukan.length} kritik/saran.`);
    
    return res.status(200).json({
      success: true,
      data: semuaMasukan
    });
  } catch (err) {
    console.error("❌ Gagal menarik data kritik saran:", err.message);
    return res.status(500).json({
      success: false,
      error: err.message || 'Gagal mengambil data masukan dari server database.'
    });
  }
});

// ROUTE DYNAMIC KONTEN EDIT SECTION BANNER PENDAFTARAN (PPDB)
app.get('/api/section-pendaftaran', async (req, res) => {
  try {
    let data = await SectionPendaftaran.findOne() || new SectionPendaftaran();
    if (!data.isNew) await data.save();
    return res.status(200).json({ success: true, data });
  } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
});

app.put('/api/section-pendaftaran/update', uploadPendaftaran, async (req, res) => {
  try {
    const { judul_utama, deskripsi_pendek, hapus_gambar, nomor_wa } = req.body; // ➕ Ambil nomor_wa
    let data = await SectionPendaftaran.findOne() || new SectionPendaftaran();

    data.judul_utama = judul_utama;
    data.deskripsi_pendek = deskripsi_pendek;
    
    // ➕ Simpan nomor_wa baru (bersihkan spasi atau tanda + jika admin iseng mengetik salah)
    if (nomor_wa) {
      data.nomor_wa = nomor_wa.replace(/[^0-9]/g, ""); 
    }

    if (hapus_gambar) {
      const listHapus = JSON.parse(hapus_gambar);
      data.gambar_slideshow = data.gambar_slideshow.filter(img => !listHapus.includes(img));
    }
    if (req.files && req.files.length > 0) {
      const urlBaru = req.files.map(file => `/uploads/${file.filename}`);
      data.gambar_slideshow = [...data.gambar_slideshow, ...urlBaru];
    }

    await data.save();
    return res.status(200).json({ success: true, message: 'Section Pendaftaran berhasil diperbarui!', data });
  } catch (err) { 
    return res.status(500).json({ success: false, error: err.message }); 
  }
});

// ➔ GET: Ambil Data Kontak Topbar & Popup Modal (Auto-Fallback Data Asli)
app.get('/api/kontak-header', async (req, res) => {
  try {
    let data = await KontakHeader.findOne();
    if (!data) {
      // Jika kosong, buat baru otomatis dengan isi default asli bawaan kamu, Kha!
      data = new KontakHeader();
      await data.save();
    }
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ➔ PUT: Ubah Data Kontak Sosmed, Telepon, tentang kami, & Maps
app.put('/api/kontak-header/update', async (req, res) => {
  try {
    let data = await KontakHeader.findOne() || new KontakHeader();
    
    const { 
      nomor_topbar, link_instagram, link_facebook, link_youtube,
      nama_admin_1, wa_admin_1, nama_admin_2, wa_admin_2,
      tentang_kami, maps_petunjuk_rute, maps_iframe_src,
      keunggulan_list
    } = req.body;

    if (nomor_topbar) data.nomor_topbar = nomor_topbar.replace(/[^0-9]/g, "");
    if (wa_admin_1) data.wa_admin_1 = wa_admin_1.replace(/[^0-9]/g, "");
    if (wa_admin_2) data.wa_admin_2 = wa_admin_2.replace(/[^0-9]/g, "");

    if (link_instagram) data.link_instagram = link_instagram;
    if (link_facebook) data.link_facebook = link_facebook;
    if (link_youtube) data.link_youtube = link_youtube;
    
    if (nama_admin_1) data.nama_admin_1 = nama_admin_1;
    if (nama_admin_2) data.nama_admin_2 = nama_admin_2;

    // ➕ Simpan data footer baru ke dalam MongoDB
    if (tentang_kami) data.tentang_kami = tentang_kami;
    if (maps_petunjuk_rute) data.maps_petunjuk_rute = maps_petunjuk_rute;
    if (maps_iframe_src) data.maps_iframe_src = maps_iframe_src;

    if (keunggulan_list) {
      data.keunggulan_list = typeof keunggulan_list === 'string' ? JSON.parse(keunggulan_list) : keunggulan_list;
    }

    await data.save();
    return res.status(200).json({ success: true, message: 'Kontak Navigasi & Element Footer Berhasil diperbarui!', data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 6. MIDDLEWARE ROUTES UNTUK CMS & AUTHENTICATION
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/galeri', galeriRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/api/profil-full', profilFullRoutes);
app.use('/api/halaman-dinamis', halamanDinamisRoutes); // ➔ ➕ REGISTER URL BASE ROUTE BARU DI SINI

// 7. RUNNING SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server berjalan di port ${PORT}`));