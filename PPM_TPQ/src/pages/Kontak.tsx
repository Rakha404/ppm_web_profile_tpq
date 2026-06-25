import KontakPerson from "../components/KontakPerson";
import KritikSaran from "../components/KritikdanSaran";

export const Kontak = () => {
  return (
    <div className="w-full m-0 p-0 block overflow-hidden bg-white">
      <KontakPerson />

      {/* -mt-16 sampai -mt-32 akan memaksa komponen ini naik ke atas memotong celah kosong */}
      <div data-aos="fade-up" className="-mt-20 relative z-10">
        <KritikSaran />
      </div>
    </div>
  );
};

export default Kontak;