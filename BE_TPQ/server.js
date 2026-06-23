const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 1. IMPORT MODELS
const PendaftaranSantri = require('./models/Santri');
const KritikSaran = require('./models/KritikSaran'); 

const app = express();

// 2. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 3. KONEKSI KE MONGODB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tpq_raudlatul_maarif';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Sukses terhubung ke MongoDB Database!'))
  .catch((err) => console.error('Gagal koneksi ke MongoDB:', err));

// 4. ROUTE API PENDAFTARAN SANTRI
app.post('/api/pendaftaran', async (req, res) => {
  try {
    const dataBaru = new PendaftaranSantri(req.body);
    await dataBaru.save();

    return res.status(201).json({ 
      success: true, 
      message: 'Alhamdulillah, data pendaftaran berhasil disimpan ke MongoDB!' 
    });
  } catch (err) {
    return res.status(500).json({ 
      success: false, 
      error: err.message || 'Terjadi kesalahan pada server.' 
    });
  }
});

// 5. ROUTE API KRITIK & SARAN
app.post('/api/kritik-saran', async (req, res) => {
  console.log("===> Masukan Baru Diterima:", req.body);

  try {
    const masukanBaru = new KritikSaran(req.body);
    await masukanBaru.save();

    return res.status(201).json({
      success: true,
      message: 'Terima kasih, kritik dan saran Anda berhasil dikirim langsung ke database!'
    });
  } catch (err) {
    console.error("❌ Gagal menyimpan kritik saran:", err.message);
    return res.status(500).json({
      success: false,
      error: err.message || 'Gagal mengirim masukan, terjadi gangguan pada server.'
    });
  }
});

// 6. RUNNING SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));