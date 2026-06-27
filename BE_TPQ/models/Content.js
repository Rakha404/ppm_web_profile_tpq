const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  // Bagian Teks & Background Kata Mutiara Hadits
  quote_text: { type: String, default: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya." },
  quote_footer: { type: String, default: "H.R. Bukhari" },
  quote_bg_url: { type: String, default: "" },

  // Bagian Kritik & Saran
  kritik_title: { type: String, default: "Kritik & Saran Membangun" },
  kritik_desc: { type: String, default: "Setiap masukan, kritik, maupun saran yang Anda berikan sangat berarti bagi kami untuk meningkatkan kualitas pelayanan." }
}, { timestamps: true });

module.exports = mongoose.model('Content', ContentSchema);