import React, { useState } from "react";

const useFiltroCategoria = () => {
  // state que encapsula la seleccion de una categoria
  const [categoria, setCategoria] = useState("");

  const FiltroUI = () => (
    <form className='bg-white shadow-md rounded flex justify-center uppercase'>
      <select
        onChange={(e) => setCategoria(e.target.value)}
        value={categoria}
        className='text-md font-semibold mb-2'
        >
        <option className='text-md font-semibold mb-2' value=''>--Categorias--</option>
        <option className='text-md font-semibold mb-2' value='comic'>Comics</option>
        <option className='text-md font-semibold mb-2' value='serie'>Series</option>
        <option className='text-md font-semibold mb-2' value='evento'>Eventos</option>
      </select>
    </form>
  );

  
   
  return {
    categoria,
    FiltroUI,
    
  };
};

export default useFiltroCategoria;
