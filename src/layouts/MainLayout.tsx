import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/Footer";
import { JenjangPendidikan } from "../components/FotoProfile";
import VisiMisi from "../components/Visimisi";

export default function MainLayout () {
    return (
        /* PERBAIKAN 1: Pastikan menggunakan w-full dan overflow-x-hidden agar aman dari horizontal scroll */
        <div className="min-h-screen flex flex-col justify-between w-full overflow-x-hidden m-0 p-0">
            <Header />

            {/* PERBAIKAN 2: 
                - Menghapus `max-w-7xl mx-auto` agar Homepage & komponen lainnya bisa FULL kanan-kiri.
                - Menghapus `py-6` (padding atas bawah) menjadi `p-0 m-0` agar GAP PUTIH DI BAWAH HEADER HILANG TOTAL!
            */}
            <main className="w-full flex-grow p-0 m-0">
                {/* Tempat Homepage (Carousel) kamu muncul melalui router */}
                <Outlet />

                {/* Komponen-komponen pendukung */}
                <JenjangPendidikan />
                <VisiMisi />
            </main>

            <Footer />
        </div>
    );
}