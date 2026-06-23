import KontakPerson from "../components/KontakPerson"
import KritikSaran from "../components/KritikdanSaran"

export const Kontak = () => {
  return <div className="w-full m-0 p-0 block overflow-hidde">
    <KontakPerson />

    <div data-aos="fade-up">
      <KritikSaran />
    </div>
  </div>;
};

export default Kontak;