import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";
import EditKonten from "./pages/dashboard/EditKonten";
import UploadGaleri from "./pages/dashboard/UploadGaleri";
import DashboardLayout from "./layouts/DashboardLayout";

/* PERBAIKAN 1: Pastikan kamu sudah membuat file halaman ini dan meng-import-nya dengan HURUF KAPITAL */
import Pendidikan from "./pages/Pendidikan";
import Pendaftaran from "./pages/Pendaftaran";
import Kegiatan from "./pages/Kegiatan";
import Kontak from "./pages/Kontak";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (1000ms = 1 detik)
      once: false,    // Set ke true kalau mau animasinya cuma jalan sekali pas di-scroll
      easing: "ease-out-cubic", // Efek pergerakan animasi yang halus
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pendidikan" element={<Pendidikan />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/kontak" element={<Kontak />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          {/* Bungkus semua halaman dashboard di dalam DashboardLayout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardIndex />} />
            <Route path="/dashboard/edit-konten" element={<EditKonten />} />
            <Route path="/dashboard/upload-galeri" element={<UploadGaleri />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;