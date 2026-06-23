import { Link } from "react-router-dom";


export default function EventIndex() {
    return (
        <div>
            <h1 className="text-5xl font-medium">Event</h1>
            <p className="mb-5">Selamat datang di halaman Event</p>
            <Link to="/dashboard/event/create" className="p-2 bg-red-900 text-white rounded-xl hover:bg-red-400">
                Tambah Event
            </Link>

            <div className="grid grid-cols-2 justify-items-center">
                <section
                    id="hero"
                    className="py-16 flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-2/3 flex flex-col gap-6">
                        <h1 className="text-6xl text-red-900 font-medium">IT Talkshow</h1>
                        <h2 className="text-4xl text text-red-900 font-semibold">“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”</h2>
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                            className="w-64 md:w-full"
                        />
                    </div>
                </section>

                <section
                    id="hero"
                    className="py-16 flex flex-col md:flex-row items-center gap-10" >
                    <div className="md:w-2/3 flex flex-col gap-6">
                        <h1 className="text-6xl text-red-900 font-medium">IT Workshop</h1>
                        <h2 className="text-4xl text text-red-900 font-semibold">“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</h2>
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                            className="w-64 md:w-full"
                        />
                    </div>
                </section>

                <section
                                id="hero"
                                className="py-16 flex flex-col md:flex-row items-center gap-10">
                                <div className="md:w-2/3 flex flex-col gap-6">
                                    <h1 className="text-6xl text-red-900 font-medium">IT Seminar</h1>
                                    <h2 className="text-4xl text text-red-900 font-semibold">“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”</h2>
                                </div>
                
                                <div className="md:w-1/3 flex justify-center">
                                    <img
                                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                                        className="w-64 md:w-full"
                                    />
                                </div>
                            </section>
            </div>
        </div>
    )
}