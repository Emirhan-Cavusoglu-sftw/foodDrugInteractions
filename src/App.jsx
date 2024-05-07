import { useState } from "react";
import Card from "./components/Card";
import { constants } from "./constants";
import { Route, Routes, Link } from "react-router-dom";
import Description from "./components/Description";
import { motion, AnimatePresence } from "framer-motion";
import Kaynakca from "./components/Kaynakca";
import Iletisim from "./components/Iletisim";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav className="fixed top-0 left-0 right-0 bg-slate-950 border-b-4 border-indigo-600  py-4 z-10">
                <div className="flex items-center justify-center gap-1 max-w-7xl mx-auto">
                  <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      {/* Hamburger Icon */}
                      <svg
                        className="w-8 h-8 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul className="hidden md:flex gap-3">
                    <li className="text-2xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500">
                      <Link to="/kaynakca">Kaynakça</Link>
                    </li>
                    <li className="text-2xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500">
                      <Link to="/iletisim">İletişim</Link>
                    </li>
                  </ul>
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.ul
                        className="absolute md:hidden top-16 left-0 w-full bg-slate-950 p-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <li className="font-rightheus font-bold text-2xl w-full text-center text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500 mb-4">
                          <Link
                            to="/kaynakca"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Kaynakça
                          </Link>
                        </li>
                        <li className="font-rightheus font-bold text-2xl w-full text-center text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500 shadow-md rounded-md">
                          <Link
                            to="/iletisim"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            İletişim
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
              <section className="flex justify-center items-center min-h-screen animate-infinite-gradient-color">
                <motion.div
                  className="grid gap-8 md:gap-10 lg:gap-12 p-4 md:p-6 lg:p-8
      grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {constants?.map((con) => (
                    <Card constants={con} key={con.id} />
                  ))}
                </motion.div>
              </section>
            </>
          }
        />
        <Route path="/kaynakca" element={<Kaynakca />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/:title" element={<Description constants={constants} />} />
      </Routes>
    </>
  );
}

export default App;
