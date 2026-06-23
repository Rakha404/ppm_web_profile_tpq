import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import EventCreate from "./pages/dashboard/event/EventCreate";
import Profile from "./pages/Profile";

/* PERBAIKAN 1: Pastikan kamu sudah membuat file halaman ini dan meng-import-nya dengan HURUF KAPITAL */
import Pendidikan from "./pages/Pendidikan"; 
import Pendaftaran from "./pages/Pendaftaran";
import Kegiatan from "./pages/Kegiatan";
import Kontak from "./pages/Kontak";

import {useEffect} from "react";
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

        <Route element={<ProtectedRoute/>}>
          <Route element={<DashboardLayout />} >
            <Route path="/dashboard" element={<DashboardIndex/>} />
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;