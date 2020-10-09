import React, { useContext } from "react";
import { peleasContext } from "../../../context";
// componente children
import Pelea from "./Pelea";
// alerts
import Swal from "sweetalert2";

export default function Peleas() {
  const PeleasContext = useContext(peleasContext);
  const { luchadores } = PeleasContext;
  const atributos1 = {
    damage: Math.floor(Math.random() * 100),
    agility: Math.floor(Math.random() * 50),
    health: Math.floor(Math.random() * 300),
    stamina: Math.floor(Math.random() * 140),
  };
  const atributos2 = {
    damage: Math.floor(Math.random() * 100),
    agility: Math.floor(Math.random() * 50),
    health: Math.floor(Math.random() * 300),
    stamina: Math.floor(Math.random() * 140),
  };

  if (luchadores.length === 0) return null;

  // inyectamos "atributos" a los objetos de luchadores
  luchadores[0].atributos = atributos1;
  luchadores[1].atributos = atributos2;

  const handleAlerta = () => {
    Swal.fire({
      title: "Winner",
      text: "3D-MAN",
      imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
      imageWidth: 256,
      imageHeight: 256,
      imageAlt: "Custom image",
    });
  };

  return (
    <div>
      <div className='flex justify-around flex-wrap'>
        {luchadores.map((luchador, i) => (
          <Pelea key={`${luchador.id}-${i}`} luchador={luchador} />
        ))}
      </div>
      <div>
        <div className='flex justify-center'>
          <img
            className='w-24 h-24'
            src='https://cdn.onlinewebfonts.com/svg/img_418591.png'
            alt='icon-deadpool'
          />
        </div>
        <button
          onClick={() => handleAlerta()}
          className='bg-red-600 hover:bg-red-500 text-white  mt-6 mb-6 uppercase flex mx-auto rounded-lg focus:outline-none focus:shadow-outline font-bold py-4 px-6 border-b-4 border-red-800 hover:border-red-700'>
          Luchar
        </button>
      </div>
    </div>
  );
}
