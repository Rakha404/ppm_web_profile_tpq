import { Link } from "react-router-dom";

export default function CategoryIndex() {
    return (
        <div>
            <h1>Category</h1>
            <p className="mb-5">Selamat datang di halaman Category</p>
            <Link to="/dashboard/category/create" className="p-2 bg-red-900 text-white rounded-2xl hover:bg-red-400">
                Tambah category
            </Link>
        </div>
    )
}