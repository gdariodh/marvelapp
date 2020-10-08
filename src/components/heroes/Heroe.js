import React from "react";
import {Link} from "react-router-dom"
export default function Heroe({ heroe }) {
  const { id, name, thumbnail } = heroe;
  console.log(thumbnail);
  if (heroe === null) return null;

  console.log(id);

  return (
    <>
      <div>
        <div class='max-w-sm w-64 rounded overflow-hidden shadow-lg mx-3 my-3'>
          <img
            class='w-full'
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt='Sunset in the mountains'
          />
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2 text-center'>{name}</div>
            <Link to={'/heroes/series'}>
            <div
              class='bg-red-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4'
              role='alert'>
              <p class='font-bold text-center'>¿Quieres saber más sobre {name}?</p>
            </div>
            </Link>
            <div className='flex justify-center'>
              <button
                className='bg-red-600 hover:bg-red-500 text-white text-center uppercase border rounded-lg font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-700'
                to={"/heroes/eventos"}>
                Elegir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
