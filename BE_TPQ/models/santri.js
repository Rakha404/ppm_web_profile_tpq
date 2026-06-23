const mongoose = require('mongoose');

const PendaftaranSantriSchema = new mongoose.Schema({
  // Biodata Santri
  nama_lengkap_santri: { type: String, required: true },
  tempat_lahir_santri: { type: String, required: true },
  tanggal_lahir_santri: { type: Date, required: true },
  anak_ke: { type: Number, required: true },
  jumlah_saudara_kandung: { type: Number, required: true },

  // Data Orangtua / Wali
  nama_orangtua: { type: String, required: true },
  tempat_lahir_orangtua: { type: String, required: true },
  tanggal_lahir_orangtua: { type: Date, required: true },
  no_hp_orangtua: { type: String, required: true },
  pekerjaan_orangtua: { type: String, required: true },
  alamat_orangtua: { type: String, required: true },

  // Pengesahan / Tanda Tangan Digital
  tanda_tangan_wali: { type: String, required: true }
}, { 
  timestamps: true // Otomatis membuat field createdAt dan updatedAt
});

module.exports = mongoose.model('PendaftaranSantri', PendaftaranSantriSchema);