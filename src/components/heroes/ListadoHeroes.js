import React, { useContext } from "react";
import { marvelContext } from "../../context";
// preview component
import Heroe from "./Heroe";

export default function ListadoHeroes() {
  // forma como los childrens consumen la data o fns disponibles
  const MarvelContext = useContext(marvelContext);
  // extraemos la data o fns que deseamos
  const { heroes } = MarvelContext;
  // verificamos si llegan los datos antes de plasmarlos en el return
  if (heroes === null) return null;
  //console.log(heroes)

  // mandamos toda la info a un componente hijo que tendra toda la info
  return (
    <>
      <div
        class='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
        role='alert'>
        <p className='text-center'>Elige a tu luchador</p>
      </div>
      <div className='flex justify-between flex-wrap'>
        {heroes.map((heroe, i) => (
          <Heroe key={`${heroe.id}-${i}`} heroe={heroe} />
        ))}
      </div>
    </>
  );
}
