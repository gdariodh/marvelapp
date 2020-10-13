import React from "react";
export default function Pelea({ luchador }) {
  // children de Peleas.js
  const { name, thumbnail, atributos } = luchador;
  // abtributos que inyectamos en los objectos de luchadores 
  const { damage, health, stamina, agility } = atributos;

  // si no hay luchador - no cargar componente
  if (luchador === null) return null;

  return (
    <div>
      <div className='max-w-sm w-64 rounded overflow-hidden shadow-lg'>
        <img
          className='w-full h-64'
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt='heroe'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-center'>{name}</div>
        </div>
        <div
          className='bg-red-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4'
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
