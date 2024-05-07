import { Link } from "react-router-dom";

export default function Kaynakca() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Kaynakça Sayfası</h1>
      <Link to="/">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Ana Sayfaya Dön
        </button>
      </Link>
    </div>
  );
}
