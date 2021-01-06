import React, { useContext, useState } from "react";
import { peleasContext } from "../../../context";
// componente children
import Pelea from "./Pelea";
// custom hook - Asigna atributos - los cuales son valores son aleatorios
import useAtributos from "../../../hooks/useAtributos";
// custom hook - Da a conocer el ganador
import useGanador from "../../../hooks/useGanador";
// alert para mostrar el ganador en un modal-alert
import Swal from "sweetalert2";
// custom hook - que permite seleccionar la cantidad de peleas
import useCantidadPeleas from "../../../hooks/useCantidadPeleas";
// Spinner de carga de redireccion
import Spinner from "../../spinner/Spinner";

export default function Peleas({ history }) {
  const PeleasContext = useContext(peleasContext);
  const { luchadores, agregaLuchadorRanking } = PeleasContext;
  // custom hook que permite seleccionar la cantidad de peleas que quiera el usuario
  const { FiltroUI, numero_peleas } = useCantidadPeleas();
  // custom hook que asigna abributos random a cada heroe
  const { atributos1, atributos2 } = useAtributos();
  // inyectamos "atributos" a los objetos de luchadores
  // pongo un para que no se cicle esta fn, cuando el usuario ejecuta el boton "Luchars"
  if (!luchadores[0].atributos || !luchadores[1].atributos) {
    luchadores[0].atributos = atributos1;
    luchadores[1].atributos = atributos2;
  }

  // custom hook que analiza quien ganara entre los dos luchadores
  const { heroe_ganador } = useGanador(luchadores, numero_peleas);

  const [spinner, setSpinner] = useState(false);

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
    // lo mandamos al global -> para que se vayan sumando para ir listando en el ranking de ganadores de la jornada global
    agregaLuchadorRanking(heroe_ganador);
    setSpinner(true);
    // redireccion al sistema de ranking
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

              <div className="flex justify-center md:flex-row flex-col items-center md:items-start		flex-wrap">
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
