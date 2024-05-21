import { Link } from "react-router-dom";

export default function Iletisim() {
  return (
    <div className="flex flex-col  items-center min-h-[200vh]  bg-gradient-to-b from-gray-900 via-purple-700 to-purple-900 ">
    <ul className="font-bold mt-32 text-transparent bg-clip-text bg-gradient-to-r mb- from-amber-300 via-amber-400 to-amber-500 ">
      <li>
        <h1 className="text-4xl font-bold  mb-8">
        besinilacetkilesimleri@gmail.com
        </h1>
      </li>
      
      <li>

    <Link to="/">
      <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Ana Sayfaya Dön
      </button>
    </Link>
      </li>
    </ul>
  </div>
  );
}
