import React, { useState } from "react";

const useCantidadPeleas = () => {
  // state que encapsula la seleccion de una categoria
  const [numero_peleas, setNumeroPeleas] = useState(1);

  const FiltroUI = () => (
    <form className='bg-white shadow-md rounded flex justify-center uppercase'>
      <select
        onChange={(e) => setNumeroPeleas(e.target.value)}
        value={numero_peleas}
        className='text-md font-semibold mb-2'
        >
        <option className='text-md font-semibold mb-2' value={1}>--Agregar mas de un Pelea--</option>
        <option className='text-md font-semibold mb-2' value={2}>2 Peleas</option>
        <option className='text-md font-semibold mb-2' value={3}>3 Peleas</option>
      </select>
    </form>
  );
   
  return {
    numero_peleas,
    FiltroUI,
  };
};

export default useCantidadPeleas;
