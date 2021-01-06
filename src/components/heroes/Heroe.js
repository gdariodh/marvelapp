import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { marvelContext } from "../../context";

// children de ListadoHeroes.js
export default function Heroe({
  heroe,
  setAcumuladorLuchadores,
  luchadores_acumulados,
  setMostrarError,
}) {
  // Contexts
  const MarvelContext = useContext(marvelContext);
  const { dataHeroeById } = MarvelContext;
  const { name, thumbnail } = heroe;
  // fn que recibe el ojecto un solo heroe seleccionado
  const handleSeleccionarHeroe = (heroe) => {
    dataHeroeById(heroe);
  };

  // fn que recibe los dos objetos de los dos heroes seleccionados -> y los encapsula en un state
  const handleSeleccionarLuchadores = (heroes) => {
    setMostrarError(false);
    // spread operator para que el nuevo luchador se acumule con el anterior luchador
    setAcumuladorLuchadores([...luchadores_acumulados, heroes]);
    // la fn setLuchadores es de ListadoHeroes.js
  };

  // si heroe esta vacio, no devuelve nada
  if (heroe === null) return null;

  return (
    <>
      <div className="md:max-w-sm md:w-64 w-full border-2 border-blue-100 rounded overflow-hidden shadow-lg mx-3 my-3">
        <img
          className="md:w-full pr-6 md:px-0 md:h-64"
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
