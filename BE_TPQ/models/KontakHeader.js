const mongoose = require('mongoose');

const KontakHeaderSchema = new mongoose.Schema({
  nomor_topbar: { type: String, default: "6288802491985" },
  link_instagram: { type: String, default: "https://www.instagram.com/tpq_rm.annahdliyah?igsh=MXFneWhiYTF4eTV4MQ==" },
  link_facebook: { type: String, default: "https://www.facebook.com/profile.php?id=61591482891232" },
  link_youtube: { type: String, default: "https://www.youtube.com/channel/UCLxmZReDF6Z7vqOEHY6hCVw" },
  
  nama_admin_1: { type: String, default: "Admin TU (Ustadz Fadhil)" },
  wa_admin_1: { type: String, default: "6288802491985" },
  nama_admin_2: { type: String, default: "Ustadz Anang" },
  wa_admin_2: { type: String, default: "628819725510" },

  tentang_kami: { 
    type: String, 
    default: "Raudlatul Ma'arif An-Nahdliyah merupakan lembaga pendidikan non-formal yang menyelenggarakan Taman Pendidikan Al-Qur'an (TPQ). Kami hadir memberikan fondasi keagamaan kuat bagi putra-putri sesuai tuntunan adab Islam." 
  },
  maps_petunjuk_rute: { type: String, default: "https://maps.app.goo.gl/ETxUVDxASx3QBmep6?g_st=aw" },
  maps_iframe_src: { type: String, default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6713904975586!2d109.15763307421392!3d-6.900845767530664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb85c59791f8b%3A0x3fe4be95045f4b52!2sMasjid%20Ussisa%20Ala%20Taqwa%20Getaskerep%20Talang%20Tegal!5e0!3m2!1sid!2sid!4v1718930000000!5m2!1sid!2sid" },

  // ➕ TAMBAHAN BARU: ARRAY UNTUK MENAMPUNG 3 POIN KEUNGGULAN (LENCANA) DI FOOTER
  keunggulan_list: {
    type: [{
      icon_name: { type: String, required: true }, // Tempat menyimpan string nama ikon (BookOpenCheck, GraduationCap, dll)
      teks_judul: { type: String, required: true }
    }],
    default: [
      { icon_name: "BookOpenCheck", teks_judul: "Mewujudkan Generasi Hafidz Qur'an" },
      { icon_name: "GraduationCap", teks_judul: "Kurikulum Terpadu & Berkarakter" },
      { icon_name: "UserCheck", teks_judul: "Tenaga Pengajar Kompeten & Beradab" }
    ]
  }
}, { timestamps: true });

module.exports = mongoose.model('KontakHeader', KontakHeaderSchema);