import React, { useContext, useEffect, useState } from "react";
// context marvel que trae la data de un heroe por id
import { marvelContext } from "../../../context";
// components
import ListadoComics from "./ListadoComics";
import ListadoSeries from "./ListadoSeries";
import ListadoEventos from "./ListadoEventos";
// select de categoria
import useFiltroCategoria from "../../../hooks/useFiltroCategoria";

export default function AboutHeroe() {
  const { heroe_seleccionado } = useContext(marvelContext);
  const { id ,name} = heroe_seleccionado;
  // states que si activan muestran un componente como comics o eventos o series
  const [mostrar_comics, setMostrarComics] = useState(false);
  const [mostrar_series, setMostrarSeries] = useState(false);
  const [mostrar_eventos, setMostrarEventos] = useState(false);

  const { FiltroUI, categoria } = useFiltroCategoria();

  useEffect(() => {
    if (categoria === "comic") {
      setMostrarComics(true);
      setMostrarSeries(false);
      setMostrarEventos(false);
    } else if (categoria === "serie") {
      setMostrarSeries(true);
      setMostrarComics(false);
      setMostrarEventos(false);
    } else if (categoria === "evento") {
      setMostrarEventos(true);
      setMostrarSeries(false);
      setMostrarComics(false);
    } else {
      return;
    }
  }, [categoria]);

  if (!heroe_seleccionado) return null;

  return (
    <>
      <div>
  
      <div
        className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-10'
        role='alert'>
        <p className='font-bold'>Conoce mas sobre {name}</p>
      </div>
        
        <div className='flex justify-center mb-4'>{FiltroUI()}</div>
        
        {mostrar_comics && (
          <div className='flex justify-between flex-wrap'>
            <ListadoComics id_heroe={id} name={name}/>
          </div>
        )}

        {mostrar_series && (
          <div className='flex justify-between flex-wrap'>
            <ListadoSeries id_heroe={id} name={name}/>
          </div>
        )}
        {mostrar_eventos && (
          <div className='flex justify-between flex-wrap'>
            <ListadoEventos id_heroe={id} name={name}/>
          </div>
        )}
      </div>
    </>
  );
}
