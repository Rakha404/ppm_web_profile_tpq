const mongoose = require('mongoose');

const GaleriSchema = new mongoose.Schema({
  title: { type: String, default: "GALERI KEGIATAN" },
  subTitle: { type: String, required: true }, // Contoh: "Festival Anak Sholeh"
  photos: [{ type: String }] // Menyimpan kumpulan nama file url gambar (Array of Strings)
}, { timestamps: true });

module.exports = mongoose.model('Galeri', GaleriSchema);