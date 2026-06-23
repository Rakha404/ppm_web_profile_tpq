const mongoose = require('mongoose');

const KritikSaranSchema = new mongoose.Schema({
  nama_lengkap: {
    type: String,
    required: true,
    trim: true
  },
  no_whatsapp: {
    type: String,
    required: true,
    trim: true
  },
  pesan_saran: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Otomatis mencatat waktu 'createdAt' dan 'updatedAt'
});

// Mengeksport model dengan nama 'KritikSaran'
module.exports = mongoose.model('KritikSaran', KritikSaranSchema);