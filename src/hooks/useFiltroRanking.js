import React, { useState } from "react";

const useFitroRanking = () => {
  // state que encapsula la seleccion de una categoria
  const [categorias, setCategorias] = useState("");
  const [abributo, setAtributo] = useState("")

  const FiltroUI = () => (
    <form className='bg-white shadow-md rounded flex justify-center uppercase'>
      <select
        onChange={(e) => setCategorias(e.target.value)}
        value={categorias}
        className='text-md font-semibold mb-2'
        >
        <option className='text-md font-semibold mb-2' value=''>--Filtrar por mas de un Pelea--</option>
        <option className='text-md font-semibold mb-2' value={2}>Los que tienen dos peleas ganadas</option>
        <option className='text-md font-semibold mb-2' value={3}>Los que tienen tres peleas ganadas</option>
      </select>
    </form>
  );

  const FiltroAtributos = () => (
    <form className='bg-white shadow-md rounded flex justify-center uppercase'>
    <select
      onChange={(e) => setAtributo(e.target.value)}
      value={abributo}
      className='text-md font-semibold mb-2'
      >
      <option className='text-md font-semibold mb-2' value=''>--Ordenar por Atributo--</option>
      <option className='text-md font-semibold mb-2' value='damage'>De mayor a menor daño</option>
      <option className='text-md font-semibold mb-2' value='agilidad'>De mayor a menor agilidad</option>
      <option className='text-md font-semibold mb-2' value='stamina'>De mayor a menor stamina</option>
    </select>
  </form>
  )
   
  return {
    categorias,
    abributo,
    FiltroUI,
    FiltroAtributos
  };
};

export default useFitroRanking;
