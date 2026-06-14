export const JenjangPendidikan = () => {
  // Array data 6 foto sesuai jumlah grid di gambar mockup kamu
  const listFoto = [
    { id: 1, url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600" },
    { id: 2, url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600" },
    { id: 3, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600" },
    { id: 4, url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600" },
    { id: 5, url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600" },
    { id: 6, url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600" },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER SECTION: Judul di tengah diapit garis oranye sesuai mockup */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-[4px] bg-[#FF9900] flex-grow max-w-[100px] md:max-w-[350px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-black text-[#006432] tracking-wide text-center whitespace-nowrap">
            Jenjang Pendidikan
          </h2>
          
          <div className="h-[4px] bg-[#FF9900] flex-grow max-w-[100px] md:max-w-[350px] rounded-full" />
        </div>

        {/* GRID FOTO: 3 Kolom di Desktop, 1 Kolom di HP (Sesuai Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {listFoto.map((foto) => (
            <div 
              key={foto.id} 
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md border border-slate-100 bg-slate-50 group"
            >
              <img
                src={foto.url}
                alt={`Kegiatan Lembaga ${foto.id}`}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JenjangPendidikan;