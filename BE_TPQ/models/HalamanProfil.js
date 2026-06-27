const mongoose = require('mongoose');

const HalamanProfilSchema = new mongoose.Schema({
  titleH1: { type: String, default: "PROFIL LEMBAGA" },
  titleH2: { type: String, default: "MENGENAL LEBIH DEKAT TPQ RAUDLATUL MA'ARIF" },
  paragraphs: [{ type: String }],
  imageSrc: { type: String, default: "" },
  isLogo: { type: Boolean, default: false },

  // ➕ TAMBAHAN FIELD BARU UNTUK VISI, MISI & MOTO
  visi_text: { type: String, default: "Mewujudkan generasi Muslim yang mencintai Al-Qur'an, berakhlak mulia, unggul dalam prestasi keagamaan, serta teguh dalam mengamalkan syariat Islam berlandaskan paham Ahlussunnah wal Jama'ah." },
  misi_list: [{ type: String }],
  moto_list: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('HalamanProfil', HalamanProfilSchema);