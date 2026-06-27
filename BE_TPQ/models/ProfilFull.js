const mongoose = require('mongoose');

const ProfilFullSchema = new mongoose.Schema({
  titleH1: { type: String, default: "SEJARAH SINGKAT BERDIRINYA LEMBAGA" },
  titleH2: { type: String, default: "MENCETAK GENERASI QUR'ANI SEJAK DINI" },
  paragraphs: [{ type: String }],
  
  // STRUKTUR GRUP LIST BARU: Array of Objects yang berisi array poin
  pointGroups: [
    {
      pointsTitle: { type: String, default: "" }, // Judul List Poin (Merah)
      items: [
        {
          title: { type: String, default: "" },
          desc: { type: String, default: "" }
        }
      ]
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('ProfilFull', ProfilFullSchema);