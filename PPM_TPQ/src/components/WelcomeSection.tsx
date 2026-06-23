import { useEffect } from 'react';
import { Users, GraduationCap, CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StatistikLembaga() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600 group-hover:text-amber-400 transition-colors duration-300" />,
      count: "150+",
      label: "Santri Aktif",
      desc: "Generasi muda yang sedang menempuh pendidikan Al-Qur'an & Diniyah."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600 group-hover:text-amber-400 transition-colors duration-300" />,
      count: "12",
      label: "Asatidzah",
      desc: "Ustadz & Ustadzah kompeten yang tulus membimbing dengan metode terbaik."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-600 group-hover:text-amber-400 transition-colors duration-300" />,
      count: "500+",
      label: "Alumni",
      desc: "Telah berkiprah dan menerapkan ilmu keagamaan di masyarakat luas."
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-slate-50/50 font-sans select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* GRID KARTU STATISTIK PREMIUM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative bg-white border border-slate-100/80 rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,100,50,0.06)] flex flex-col items-center overflow-hidden"
            >
              {/* Efek Hiasan Siluet Lingkaran Halus Pas Hover */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-125 pointer-events-none" />

              {/* Icon Container - Berubah Hijau Gelap Saat Hover */}
              <div className="bg-emerald-50/60 border border-emerald-100/30 p-4 rounded-2xl transition-all duration-500 mb-6 group-hover:bg-[#006432] group-hover:scale-110 group-hover:shadow-md">
                {item.icon}
              </div>
              
              {/* Angka & Label */}
              <div className="space-y-1 mb-2">
                <h3 className="text-4xl font-black text-slate-800 tracking-tight group-hover:text-emerald-900 transition-colors duration-300">
                  {item.count}
                </h3>
                <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>

              {/* Garis Pembatas - Melebar Cantik Pas Hover */}
              <div className="w-6 h-[3px] bg-amber-400 rounded-full mb-4 transition-all duration-300 group-hover:w-12" />

              {/* Deskripsi */}
              <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-[240px] group-hover:text-slate-600 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}