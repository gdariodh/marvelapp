import React, { useState } from "react";

const useCantidadPeleas = () => {
  // state que encapsula la seleccion de una categoria
  const [numero_peleas, setNumeroPeleas] = useState(1);

  const FiltroUI = () => (
    <form className='rounded flex justify-center w-full '>
      <select
        onChange={(e) => setNumeroPeleas(e.target.value)}
        value={numero_peleas}
        className='text-md py-3 px-8 md:px-12 shadow md:shadow-md font-semibold mb-2 text-lg focus:outline-none'
        >
        <option className='text-md font-semibold mb-2' value={1}>¿Quieres mas de una pelea?</option>
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
