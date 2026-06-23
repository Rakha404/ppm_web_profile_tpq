import { Link } from "react-router-dom";
import SpeakerCard from "../../../components/SpeakerCard";

export default function PembicaraIndex() {
    return (
        <div>
            <h1 className="text-5xl font-semibold">Pembicara</h1>
            <p>Selamat datang di halaman Pembicara</p>
            <h2 className="text-3xl font-medium mt-5 mb-5">Pembicara Seminar</h2>
            <Link to="/dashboard/pembicara/create" className="p-2 bg-red-900 text-white rounded-2xl hover:bg-red-400">
                Tambah
            </Link>

            <div className="flex flex-row gap-20 justify-center mx-auto w-full h-fit">
                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
                    name="Dery Agung Triyadi"
                    role="Aws Indonesia"
                />
                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
                    name="Sowam Habibi"
                    role="Google Indonesia"
                />
            </div>

            <h2 className="text-3xl font-medium mt-10">Pembicara Workshop</h2>
            <div className="flex flex-row gap-50 justify-center">
                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png"
                    name="Lhuqita Fazry"
                    role="Mobile Development Developer, Founder Rumah Coding Indonesia"
                />
                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png"
                    name="M. Dendi Purwanto"
                    role="Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova"
                />
                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png"
                    name="Danang Avan M."
                    role="Cyber Security Security Analyst, Founder | Contributor TegalSec"
                />
            </div>
        </div>
    )
}