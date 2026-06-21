import React, { useEffect } from 'react';
import { Users, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StatistikLembaga() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    {
      icon: <Users className="w-7 h-7 text-emerald-600" />,
      count: "150+",
      label: "Santri Aktif",
      desc: "Generasi muda yang sedang menempuh pendidikan Al-Qur'an & Diniyah."
    },
    {
      icon: <CheckCircle2 className="w-7 h-7 text-amber-500" />,
      count: "12",
      label: "Asatidzah",
      desc: "Ustadz & Ustadzah kompeten yang tulus membimbing dengan metode terbaik."
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-emerald-600" />,
      count: "500+",
      label: "Alumni",
      desc: "Telah berkiprah dan menerapkan ilmu keagamaan di masyarakat luas."
    }
  ];

  return (
    <section className="w-full py-12 px-6 md:px-12 bg-white font-sans select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* GRID KARTU STATISTIK TIMBUL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.06),0_10px_15px_-5px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_45px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              {/* Icon Container */}
              <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-2xl shadow-inner inline-block">
                {item.icon}
              </div>
              
              {/* Angka & Label */}
              <div className="space-y-1">
                <h3 className="text-4xl font-black text-slate-800 tracking-tight">
                  {item.count}
                </h3>
                <p className="text-sm font-extrabold text-[#006432] uppercase tracking-wider">
                  {item.label}
                </p>
              </div>

              {/* Garis Pembatas Kecil */}
              <div className="w-12 h-1 bg-amber-400 rounded-full" />

              {/* Deskripsi */}
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}