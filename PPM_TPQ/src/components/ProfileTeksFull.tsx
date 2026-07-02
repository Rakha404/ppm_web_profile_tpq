import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ProfilTeksFull = () => {
  const [data, setData] = useState({
    titleH1: "Memuat Data...",
    titleH2: "",
    paragraphs: [] as string[],
    pointGroups: [] as { pointsTitle: string; items: { title: string; desc: string }[] }[]
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetch("https://tpq-backend-api.vercel.app/api/profil-full")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) setData(resData.data);
      })
      .catch((err) => console.error("Gagal memuat profil teks:", err));
  }, []);

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 font-sans text-slate-800 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* HEADER JUDUL */}
        <div className="space-y-2 text-center flex flex-col items-center justify-center" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#006432] uppercase tracking-wide leading-tight max-w-3xl">{data.titleH1}</h1>
          {data.titleH2 && <h2 className="text-sm md:text-base font-bold text-emerald-700 tracking-wider uppercase max-w-2xl">{data.titleH2}</h2>}
          <div className="h-3px w-24 bg-yellow-300 rounded-full mt-2" />
        </div>

        {/* PARAGRAF DESKRIPSI */}
        <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed text-justify font-medium" data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
          {data.paragraphs.map((para, index) => <p key={index}>{para}</p>)}
        </div>

        {/* LOOPING BANYAK GRUP LIST POIN SEKALIGUS */}
        {data.pointGroups && data.pointGroups.map((group, gIndex) => (
          <div key={gIndex} className="space-y-3 pt-2" data-aos="fade-up" data-aos-delay="300">
            {group.pointsTitle && (
              <h3 className="text-md md:text-lg font-bold text-slate-900 border-l-4 border-emerald-600 pl-2">
                {group.pointsTitle}
              </h3>
            )}
            <ul className="space-y-3 pl-5 list-disc text-slate-600 text-sm md:text-base">
              {group.items && group.items.map((point, index) => (
                <li key={index} className="leading-relaxed text-justify">
                  <strong className="text-[#006432] font-bold">{point.title}: </strong>
                  {point.desc}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProfilTeksFull;