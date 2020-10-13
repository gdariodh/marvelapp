import React from "react";
export default function Peleador({ luchador }) {
  const { name, thumbnail, peleas, atributos } = luchador;
  if (luchador.length === 0) return null;

  return (
    <div className='max-w-sm w-full lg:max-w-full'>
      <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'></div>
      <div className='border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='flex items-center'>
          <img
            className='w-10 h-10 rounded-full mr-4'
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt='Avatar of Jonathan Reinink'
          />
          <div className='text-sm'>
            <p className='text-gray-900 leading-none'>{name}</p>
            <p className='text-gray-600'>Peleas: {peleas}</p>
            <p className='text-gray-600'>Daño: {atributos.damage} {" "} Agilidad:{atributos.agility} {" "} Stamina: {atributos.stamina}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
