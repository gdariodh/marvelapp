import React, { useContext, useState } from "react";
import Swal from "sweetalert2"; // lib alertas
import { peleasContext } from "../../../context";
import useAtributos from "../../../hooks/useAtributos"; // custom hook - genera atributos random
import useGanador from "../../../hooks/useGanador"; // custom hook - genera al ganador de las peleas
import useCantidadPeleas from "../../../hooks/useCantidadPeleas"; // custom hook - permite seleccionar la cantidad de peleas
// Components
import Pelea from "./Pelea";
import Spinner from "../../spinner/Spinner";

export default function Peleas({ history }) {
  // context api
  const PeleasContext = useContext(peleasContext);
  const { luchadores, agregaLuchadorRanking } = PeleasContext;

  // permite seleccionar la cantidad de peleas
  const { FiltroUI, numero_peleas } = useCantidadPeleas(); // custom hook

  // genera abributos random a cada luchador
  const { atributos1, atributos2 } = useAtributos(); // custom hook

  // add "atributos" a cada luchador
  luchadores[0].atributos = atributos1;
  luchadores[1].atributos = atributos2;

  // analiza al ganador entre los dos luchadores
  const { heroe_ganador } = useGanador(luchadores, numero_peleas); // custom hook

  const [spinner, setSpinner] = useState(false); // state local

  const mostrarAlertaHeroeGanador = (heroe_ganador) => {
    const { name, thumbnail } = heroe_ganador;

    // alerta -> modal que muestra el ganador de la jornada
    Swal.fire({
      title: "Winner",
      text: `${name}`,
      imageUrl: `${thumbnail.path}.${thumbnail.extension}`,
      imageWidth: 256,
      imageHeight: 256,
      timer: 880,
      imageAlt: "Heroe ganador",
      showCancelButton: false,
      showConfirmButton: false,
    });
    agregaLuchadorRanking(heroe_ganador); // agregar el ganador al ranking - peleasContext
    setSpinner(true);
    // redirect al ranking
    setTimeout(() => {
      history.push("/heroes/peleadores");
    }, 1800);
  };

  return (
    <>
      {!spinner ? (
        <>
          {luchadores.length !== 0 ? (
            <div>
              <div className="flex justify-center my-6 md:my-2">
                <img
                  className="w-24 h-24 mb-4 md:m-0 "
                  src="https://www.flaticon.com/svg/static/icons/svg/2720/2720671.svg"
                  alt="versus"
                />
              </div>

              <div className="flex justify-center md:flex-row flex-col items-center md:items-start flex-wrap">
                <Pelea luchador={luchadores[0]} />

                <div className="md:mt-20 my-10 flex flex-wrap">
                  {FiltroUI()}
                  <button
                    onClick={() => mostrarAlertaHeroeGanador(heroe_ganador)}
                    className="bg-red-600 order-first md:order-last	 md:mt-20 md:mb-0 mb-10 hover:bg-red-500 text-white uppercase flex mx-auto rounded-lg focus:outline-none focus:shadow-outline font-bold py-4 px-20 border-b-4 border-red-800 hover:border-red-700"
                  >
                    Luchar
                  </button>
                </div>

                <Pelea luchador={luchadores[1]} />
              </div>
            </div>
          ) : (
            <p>No hay</p>
          )}
        </>
      ) : (
        <div className="mt-48">
          <Spinner />
        </div>
      )}
    </>
  );
}
