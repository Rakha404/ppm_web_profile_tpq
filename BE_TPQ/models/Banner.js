const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
  pageKey: { type: String, required: true, unique: true }, // Contoh: 'homepage', 'profile', 'kegiatan'
  subTitle: { type: String, default: "Selamat Datang" },
  mainTitle: { type: String, required: true },
  boldTitle: { type: String, default: "" },
  motto: { type: String, default: "" },
  images: [{ type: String }] // Array path file gambar carousel
}, { timestamps: true });

module.exports = mongoose.model('Banner', BannerSchema);