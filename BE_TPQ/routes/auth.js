const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Rahasia untuk JWT token (Bisa diganti teks bebas)
const JWT_SECRET = 'TPQ_RAUDLATUL_MAARIF_SUPER_SECRET_KEY';

// 1. ROUTE REGISTER (Untuk bikin akun admin pertama kali)
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cek apakah username sudah terpakai
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(400).json({ success: false, message: 'Username sudah terdaftar!' });
    }

    // Enkripsi password menggunakan bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Simpan admin baru ke MongoDB
    const newAdmin = new User({
      username,
      password: hashedPassword
    });

    await newAdmin.save();
    return res.status(201).json({ success: true, message: 'Akun admin berhasil dibuat!' });

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 2. ROUTE LOGIN (Validasi masuk ke Dashboard)
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cari username di database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Username atau password salah!' });
    }

    // Cek kecocokan password yang diketik dengan yang di-enkripsi di database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Username atau password salah!' });
    }

    // Buat token JWT digital tanda sukses login (berlaku 1 hari)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(200).json({
      success: true,
      message: 'Login berhasil! Selamat datang Admin.',
      token,
      user: { id: user._id, username: user.username, role: user.role }
    });

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;