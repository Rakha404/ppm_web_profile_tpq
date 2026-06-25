import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/Footer";

export default function MainLayout () {
    return (
        <div className="min-h-screen flex flex-col justify-between w-full overflow-x-hidden m-0 p-0 bg-white">
            {/* Header muncul di semua halaman */}
            <Header />

            {/* Konten tengah yang dinamis berganti sesuai halaman */}
            <main className="w-full grow p-0 m-0">
                <Outlet /> 
            </main>

            {/* Footer muncul di semua halaman */}
            <Footer />
        </div>
    );
}