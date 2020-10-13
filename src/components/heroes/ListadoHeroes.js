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
      } else {
        const filtrado = luchadores_acumulados.filter(
          (l) =>
            l.id !== luchadores_acumulados[0].id || luchadores_acumulados[1].id
        );
        seleccionarDosLuchadores(filtrado);
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
        <div className='mt-48'>
          <Spinner />
        </div>
      ) : (
        <>
          {luchadores_acumulados.length < 3 && !mostrar_error && (
            <div
              className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 uppercase font-bold'
              role='alert'>
              {luchadores_acumulados.length === 0 && (
                <p className='text-center'>Elige a tu luchador</p>
              )}
              {luchadores_acumulados.length === 1 && (
                <p className='text-center'>Elige a tu rival</p>
              )}
              {luchadores_acumulados.length >= 2 && (
                <p className='text-center'>¿Estás listo para la pelea?</p>
              )}
            </div>
          )}

          {luchadores_acumulados.length >= 2 && !mostrar_error && (
            <>
              <button
                onClick={() => redirectPeleas()}
                className='bg-red-600 hover:bg-red-500 text-white  mt-6 mb-6 uppercase flex mx-auto rounded-lg focus:outline-none focus:shadow-outline font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-700'>
                Ir a la Arena
              </button>
            </>
          )}

          {mostrar_error && (
            <div
              className='bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 uppercase font-bold'
              role='alert'>
              <p className='text-center'>
                LOS LUCHADORES NO PUEDEN SER LOS MISMOS. Elige otro
              </p>
            </div>
          )}

          <div className='flex justify-between flex-wrap'>
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
  );
}
