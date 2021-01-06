import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { marvelContext, peleasContext } from "../../context";

export default function Heroe({ heroe }) {
  // Context Api
  const { dataHeroeById } = useContext(marvelContext);
  const { seleccionarDosLuchadores } = useContext(peleasContext);

  const { name, thumbnail } = heroe; // prop children

  // recibe objeto de heroe seleccionado
  const handleSeleccionarHeroe = (heroe) => {
    dataHeroeById(heroe);
  };

  // recibe dos luchadores para el round de peleas
  const handleSeleccionarLuchadores = (luchador) => {
    seleccionarDosLuchadores(luchador); // action de peleasContext
  };

  if (heroe === null) return null; // revisa si hay heroe

  return (
    <>
      <div className="md:max-w-sm md:mx-4 w-3/4	md:w-64 border-2 border-blue-100 rounded overflow-hidden shadow-lg my-3">
        <img
          className="w-full h-64"
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
          <Link to={"/heroe"}>
            <div
              onClick={() => handleSeleccionarHeroe(heroe)}
              className="bg-red-100 border-t border-b border-blue-500 text-blue-700 px-4 md:py-3 p-5 mb-6 "
              role="alert"
            >
              <p className="font-bold text-center  ">
                ¿Quieres saber más sobre {name}?
              </p>
            </div>
          </Link>
          <div className="flex justify-center mt-2 md:mt-0">
            <button
              className="bg-red-600 hover:bg-red-500 text-white text-center uppercase border rounded-lg focus:outline-none focus:shadow-outline font-bold py-4 px-8 md:py-2 md:px-4 border-b-4 border-red-800 hover:border-red-700"
              to={"/heroes/peleas"}
              onClick={() => handleSeleccionarLuchadores(heroe)}
            >
              Elegir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
