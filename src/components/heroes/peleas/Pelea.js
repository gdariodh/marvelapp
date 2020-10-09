import React from "react";
export default function Pelea({ luchador }) {
  const {
    name,
    thumbnail,
    atributos: { damage, health, stamina, agility },
  } = luchador;

  if (luchador === null) return null;
  return (
    <div>
      <div className='max-w-sm w-64 rounded overflow-hidden shadow-lg mx-3 my-3'>
        <img
          className='w-full h-64'
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-center'>{name}</div>
        </div>
        <div
          className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4'
          role='alert'>
          <div className='font-bold text-center'>
            <p>Atributos</p>
            <div className='font-semibold mt-4'>
              <p>vida: {health}</p>
              <p>resistencia: {stamina}</p>
              <p>agilidad: {agility}</p>
              <p>daño: {damage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
