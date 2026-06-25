import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";

export const ProtectedRoute = () => {
  // Ambil status login dari Zustand Store
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Jika belum login, tendang balik ke halaman login secara paksa
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, izinkan masuk ke halaman dashboard anak-anaknya (Outlet)
  return <Outlet />;
};

export default ProtectedRoute;