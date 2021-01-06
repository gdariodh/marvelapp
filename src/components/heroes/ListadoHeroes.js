import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2"; // lib de alertas
import { Link } from "react-router-dom";
import { marvelContext, peleasContext } from "../../context"; // Context Api
// Components
import Spinner from "../spinner/Spinner";
import Heroe from "./Heroe";

export default function ListadoHeroes() {
  // context api
  const { heroes } = useContext(marvelContext);
  const { luchadores, resetLuchadores } = useContext(peleasContext);

  // state local
  const [mostrar_error, setMostrarError] = useState(false);
  useEffect(() => {
    if (luchadores.length !== 0) {
      // si los luchadores son iguales, resetar el array de luchadores
      if (luchadores[0] === luchadores[1]) {
        resetLuchadores(); // action de peleasContext
        setMostrarError(true);
      } else {
        setMostrarError(false);
      }
    } else {
      setMostrarError(false);
    }
    //eslint-disable-next-line
  }, [luchadores]);

  const alertError = () => {
    // lib sweet alert2
    Swal.fire({
      icon: "error",
      title: "El luchador no se puede repetir dos veces seguidas",
      text: "vuelve a elegir 2 luchadores",
      imageWidth: 256,
      imageHeight: 256,
      timer: 1000,
      imageAlt: "error",
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  return (
    <>
      {!heroes ? (
        <div className="mt-48">
          <Spinner />
        </div>
      ) : (
        <>
          {/* TODO: Alertas de progreso de seleccion de luchadores */}
          {luchadores.length < 2 && !mostrar_error && (
            <div
              className="bg-blue-100 shadow-md text-blue-700 px-4 py-3 uppercase font-bold"
              role="alert"
            >
              {luchadores.length === 0 && (
                <p className="text-center">Elige a dos luchadores</p>
              )}
              {luchadores.length === 1 && (
                <p className="text-center">Elige a tu rival</p>
              )}
            </div>
          )}

          {/* TODO: Si hay dos luchadores, mostrar botonoes de "Ir a la arena" y "Reiniciar luchadores" */}
          {luchadores.length >= 2 && !mostrar_error ? (
            <>
              <div
                className="bg-blue-100 shadow-md  text-blue-700 px-4 py-3 uppercase font-bold"
                role="alert"
              >
                <p className="text-center">¿Estás listo para la pelea?</p>
              </div>

              <div className="flex justify-center my-8">
                <Link
                  to="/heroes/peleas"
                  className="bg-blue-600 hover:bg-blue-500 text-white shadow uppercase  mx-auto rounded-lg focus:outline-none focus:shadow-outline font-bold py-2 px-6 border-b-4 border-blue-800 hover:border-blue-700"
                >
                  Ir a la Arena
                </Link>
              </div>

              <div className="mt-12 px-4 py-3 uppercase font-bold" role="alert">
                <p className="text-center">¿Te has equivocado de luchadores?</p>
              </div>

              <button
                onClick={() => resetLuchadores()}
                className="bg-red-600 hover:bg-red-500 text-white shadow  mt-6 mb-6 uppercase flex mx-auto rounded-lg focus:outline-none focus:shadow-outline font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-700"
              >
                Reiniciar luchadores
              </button>
            </>
          ) : (
            <>
              {/* Si no se cumple, muestra el listado de heroes */}

              {/* alerta de error que se muestra solo cuando los dos luchadores son iguales */}
              {mostrar_error && <> {alertError()}</>}

              <div className="flex justify-center md:flex-row w-full flex-col items-center md:justify-evenly flex-wrap">
                {heroes.map((heroe, i) => (
                  <Heroe key={`${heroe.id}-${i}`} heroe={heroe} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
