import React, { useContext, useEffect, useState } from "react";
import { peleasContext } from "../../../../context";
import Peleador from "./Peleador";
import useFiltroRanking from "../../../../hooks/useFiltroRanking"; // custom hook -> filtra el ranking

export default function ListadoPeleadores() {

  // context api
  const PeleasContext = useContext(peleasContext);
  const { luchadoresranking } = PeleasContext;

  const {
    categorias,
    FiltroUI,
    abributo,
    FiltroAtributos,
  } = useFiltroRanking();

  // state local
  const [filtro, setFiltro] = useState([]);
  const [mostrar_boton, setMostrarBoton] = useState(false);

    // TODO: Fitro 1 -> nro de peleas
  useEffect(() => {
    if (categorias === "2") {
      const segundos = luchadoresranking.filter(
        (luchador) => luchador.peleas === 2
      );
      setFiltro(segundos);
      setMostrarBoton(true);
    } else if (categorias === "3") {
      const mejores = luchadoresranking.filter(
        (luchador) => luchador.peleas === 3
      );
      setFiltro(mejores);
      setMostrarBoton(true);
    } else if (categorias === "") {
      setMostrarBoton(true);
      setFiltro(luchadoresranking);
    } else {
      setFiltro(luchadoresranking);
    }
    // eslint-disable-next-line
  }, [categorias]);

  // TODO: Fitro 2 -> por atributo
  useEffect(() => {
    if (abributo === "damage") {
      const order_damage = luchadoresranking.sort(
        (a, b) => b.atributos.damage - a.atributos.damage
      );
      setFiltro(order_damage);
      setMostrarBoton(false);
    } else if (abributo === "agilidad") {
      const order_agilidad = luchadoresranking.sort(
        (a, b) => b.atributos.agility - a.atributos.agility
      );
      setFiltro(order_agilidad);
      setMostrarBoton(false);
    } else if (abributo === "stamina") {
      const order_stamina = luchadoresranking.sort(
        (a, b) => b.atributos.stamina - a.atributos.stamina
      );
      setFiltro(order_stamina);
      setMostrarBoton(false);
    }
    // eslint-disable-next-line
  }, [abributo]);

  if (luchadoresranking.length === 0) return <p className='text-center mt-20 font-semibold text-2xl'>No hay</p>;

  return (
    <>
      <div className='flex flex-wrap justify-around mb-3'>
        {FiltroUI()}
      
        {mostrar_boton && <div className='mt-4 md:mt-0'>{FiltroAtributos()}</div> }
      </div>

      <div
        className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
        role='alert'>
        <p className='font-bold'>Ganadores de la Jornada</p>
      </div>

      {filtro.length === 0 ? (
        <div className='flex justify-between flex-wrap'>
          {luchadoresranking.map((luchador, i) => (
            <Peleador key={`${luchador.id}-${i}`} luchador={luchador} />
          ))}
        </div>
      ) : (
        <div className='flex justify-between flex-wrap'>
          {filtro.map((luchador, i) => (
            <Peleador key={`${luchador.id}-${i}`} luchador={luchador} />
          ))}
        </div>
      )}
    </>
  );
}
