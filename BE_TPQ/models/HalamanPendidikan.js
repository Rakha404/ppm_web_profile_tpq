const mongoose = require('mongoose');

const HalamanPendidikanSchema = new mongoose.Schema({
  titleH1: { type: String, default: "PROGRAM PENDIDIKAN" },
  titleH2: { type: String, default: "KURIKULUM DAN METODE PEMBELAJARAN" },
  paragraphs: [{ type: String }],
  imageSrc: { type: String, default: "" },
  isLogo: { type: Boolean, default: false },
  kurikulum_points: [
    {
      badge: { type: String },
      title: { type: String },
      desc: { type: String }
    }
  ],
  pilar_cards: [
    {
      image: { type: String },
      category: { type: String },
      title: { type: String },
      desc: { type: String },
      iconType: { type: String, default: "school" } // ➕ TAMBAHAN BARU: Menampung tipe ikon ('school' | 'book' | 'users')
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('HalamanPendidikan', HalamanPendidikanSchema);