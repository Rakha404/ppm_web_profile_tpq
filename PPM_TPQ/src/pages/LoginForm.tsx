import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ➔ TAMBAHKAN IMPORT LINK DI SINI
import { useAuthStore } from "../store/UseAuthStore";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const loginSuccess = useAuthStore((state) => state.login) as any;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                loginSuccess({ token: data.token, user: data.user });
                navigate("/dashboard");
            } else {
                setError(data.message || "Username atau password salah!");
            }
        } catch (err) {
            setError("Gagal terhubung ke server backend. Pastikan server Node.js menyala!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <form 
                onSubmit={handleSubmit} 
                className="p-8 bg-white rounded-2rem shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 w-full space-y-5 transition-all"
            >
                <div className="space-y-1 text-center">
                    <h2 className="text-xl font-black text-slate-800 tracking-wide uppercase">
                        LOGIN ADMIN
                    </h2>
                    <p className="text-[11px] text-slate-400 font-medium">
                        Silakan masuk menggunakan akun terdaftar
                    </p>
                </div>

                {error && (
                    <div className="p-3 bg-rose-50 text-rose-700 border border-rose-200/60 rounded-xl text-xs font-semibold">
                        {error}
                    </div>
                )}

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 pl-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                        placeholder="Masukkan username admin"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 pl-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                        placeholder="••••••••"
                    />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-emerald-900/10 active:scale-[0.98]"
                    >
                        {loading ? "Memproses..." : "Masuk ke Dashboard ➔"}
                    </button>
                </div>

                {/* TOMBOL KEMBALI KE BERANDA */}
                <div className="text-center [pt-1] border-t border-slate-100 [pt-3]">
                    <Link 
                        to="/" 
                        className="text-[11px] font-bold text-slate-400 hover:text-emerald-700 transition-all uppercase tracking-wider inline-block"
                    >
                        ⬅ Kembali ke Beranda Utama
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;