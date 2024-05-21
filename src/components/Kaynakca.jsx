import { Link } from "react-router-dom";

export default function Kaynakca() {
  return (
    <div className="flex flex-col  items-center min-h-[200vh]  bg-gradient-to-b from-gray-900 via-purple-700 to-purple-900 ">
      <ul className="font-bold mt-32 text-transparent bg-clip-text bg-gradient-to-r mb- from-amber-300 via-amber-400 to-amber-500 ">
        <li>
          <h1 className="text-4xl font-bold  mb-8">
            Beslenme ve İlaç Etkileşimi
          </h1>
        </li>
        <li>
          <h1 className="text-4xl font-bold  mb-8">
            Handbook of Food-Drug Interactions
          </h1>
        </li>
        <li>
          <h1 className="text-4xl font-bold  mb-8">
            Handbook of Drug-Nutrient Interactions (Second Edition)
          </h1>
        </li>
        <li>
          <h1 className="text-4xl font-bold  mb-8">
            {" "}
            <a href="https://doi.org/10.1016/B978-0-12-820472-6.00066-9">
              https://doi.org/10.1016/B978-0-12-820472-6.00066-9
            </a>
          </h1>
        </li>
        <li>
          <h1 className="text-4xl font-bold  mb-8">
            {" "}
            <a href="https://doi.org/10.1016/B978-0-12-820472-6.00194-8">
              https://doi.org/10.1016/B978-0-12-820472-6.00194-8
            </a>
          </h1>
        </li>
        <li>
          <h1 className="text-4xl font-bold  mb-8">
            Bushra R, Aslam N, Khan AY. Food-Drug Interactions. Oman Med J 2011
            March; 26(2):77-83.
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
