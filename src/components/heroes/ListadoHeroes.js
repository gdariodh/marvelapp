import React, { useContext, useEffect, useState } from "react";
import { marvelContext, peleasContext } from "../../context";
import Spinner from "../spinner/Spinner";
// preview component
import Heroe from "./Heroe";
export default function ListadoHeroes({ history }) {
  // Contexts
  const MarvelContext = useContext(marvelContext);
  const PeleasContext = useContext(peleasContext);
  // extraemos los values disponibles
  const { heroes } = MarvelContext;
  const { seleccionarDosLuchadores } = PeleasContext;
  const [mostrar_error, setMostrarError] = useState(false);
  // state local -> se envia a Heroe.js
  const [luchadores_acumulados, setAcumuladorLuchadores] = useState([]);

  // si luchadores cambia se vuelve a ejecutar el useEffect
  useEffect(() => {
    setMostrarError(false);
    if (luchadores_acumulados.length === 2) {
      // mandamos la data al state central de peleasState.js
      if (luchadores_acumulados[0].id === luchadores_acumulados[1].id) {
        setMostrarError(true);
        setAcumuladorLuchadores([]); // resetar luchadores
      } else {
        // filtramos los luchadores para evitar pasar un array de luchadores iguales
        const filtrado = luchadores_acumulados.filter(
          (luchador) =>
          luchador.id !== luchadores_acumulados[0].id || luchador.id !== luchadores_acumulados[1].id
        );
        seleccionarDosLuchadores(filtrado); // pasamos al context de peleasState
        setMostrarError(false);
      }
    }
    // eslint-disable-next-line
  }, [luchadores_acumulados]);

  // fn que redirige cuando el usuario ejecuta el boton "Ir a la Arena"
  const redirectPeleas = () => {
    history.push("/heroes/peleas");
  };

  return (
    <>
      {!heroes ? (
        <div className="mt-48">
          <Spinner />
        </div>
      ) : (
        <>
          {/* TODO: ALERTAS DE PROGRESO DE ELECCION DE LUCHADORES */}
          {luchadores_acumulados.length < 2 && !mostrar_error && (
            <div
              className="bg-blue-100 shadow-md  text-blue-700 px-4 py-3 uppercase font-bold"
              role="alert"
            >
              {luchadores_acumulados.length === 0 && (
                <p className="text-center">Elige a dos luchadores</p>
              )}
              {luchadores_acumulados.length === 1 && (
                <p className="text-center">Elige a tu rival</p>
              )}
            </div>
          )}

          {/* TODO: SI HAY DOS LUCHADORES QUITAR LA LISTA DE HEROES 
          Y MOSTRAR SOLO EL BOTON DE IR A LA ARENA O REINICIAR LUCHADORES */}

          {luchadores_acumulados.length >= 2 && !mostrar_error ? (
            <>
              <div
                className="bg-blue-100 shadow-md  text-blue-700 px-4 py-3 uppercase font-bold"
                role="alert"
              >
                <p className="text-center">¿Estás listo para la pelea?</p>
              </div>

              <button
                onClick={() => redirectPeleas()}
                className=" bg-blue-600 hover:bg-blue-500 text-white shadow  mt-6 mb-6 uppercase flex mx-auto rounded-lg focus:outline-none focus:shadow-outline font-bold py-2 px-4 border-b-4 border-blue-800 hover:border-blue-700"
              >
                Ir a la Arena
              </button>

              <div className="mt-20 px-4 py-3 uppercase font-bold" role="alert">
                <p className="text-center">¿Te has equivocado de luchadores?</p>
              </div>

              <button
                onClick={() => setAcumuladorLuchadores([])}
                className="bg-red-600 hover:bg-red-500 text-white shadow  mt-6 mb-6 uppercase flex mx-auto rounded-lg focus:outline-none focus:shadow-outline font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-700"
              >
                Reiniciar luchadores
              </button>
            </>
          ) : (
            <>
              {mostrar_error && (
                <div
                  className="bg-red-100 border-t border-b border-red-500 text-red-500 px-4 py-3 uppercase font-bold"
                  role="alert"
                >
                  <p className="text-center">
                    LOS LUCHADORES NO PUEDEN SER LOS MISMOS. Elige otro
                  </p>
                </div>
              )}

              <div className="flex flex-col md:flex-row flex-wrap pt-4  md:justify-around">
                {heroes.map((heroe, i) => (
                  <Heroe
                    key={`${heroe.id}-${i}`}
                    heroe={heroe}
                    setAcumuladorLuchadores={setAcumuladorLuchadores}
                    luchadores_acumulados={luchadores_acumulados}
                    setMostrarError={setMostrarError}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
