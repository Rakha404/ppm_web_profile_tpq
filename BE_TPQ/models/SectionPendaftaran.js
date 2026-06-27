const mongoose = require('mongoose');

const SectionPendaftaranSchema = new mongoose.Schema({
  judul_utama: { type: String, default: "Mulai Langkah Pertama Membentuk Generasi Qur'ani" },
  deskripsi_pendek: { type: String, default: "Mari bimbing putra-putri Anda untuk mendapatkan fondasi ilmu agama, adab, dan hafalan Al-Qur'an yang kuat bersama Taman Pendidikan Al-Qur'an Raudlatul Ma'arif An-Nahdliyah." },
  gambar_slideshow: [{ type: String }],
  
  // ➕ TAMBAHAN FIELD BARU UNTUK KONTAL WA LAYANAN CADANGAN CADANGAN
  nomor_wa: { type: String, default: "6288802491985" } 
}, { timestamps: true });

module.exports = mongoose.model('SectionPendaftaran', SectionPendaftaranSchema);