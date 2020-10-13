// fn que determina el ganador de cada pelea
import { useEffect } from "react";
export default function useGanador(luchadores, numero_peleas) {
  const atributosHeroe1 = luchadores[0].atributos;
  const atributosHeroe2 = luchadores[1].atributos;
  let heroe_ganador;

  // dependiendo del atributo se devolvera un solo heroe
  if (atributosHeroe1.damage > atributosHeroe2.damage) {
    heroe_ganador = luchadores[0];
  } else if (atributosHeroe1.damage < atributosHeroe2.damage) {
    heroe_ganador = luchadores[1];
  } else if (atributosHeroe1.damage === atributosHeroe2.damage) {
    if (atributosHeroe1.stamina > atributosHeroe2.stamina) {
      heroe_ganador = luchadores[0];
    } else if (atributosHeroe1.stamina < atributosHeroe2.stamina) {
      heroe_ganador = luchadores[1];
    }
  }
  // fn que si detecta cambio del select de cantidad de peleas, vuelve ejecutar este codigo si se cambia la cantidad de peleas
  useEffect(() => {
    if (numero_peleas > "1" && numero_peleas === "2") {
      heroe_ganador.victorias = 2;
      heroe_ganador.peleas = 2;
    } else if (numero_peleas > "1" && numero_peleas === "3") {
      heroe_ganador.victorias = 3;
      heroe_ganador.peleas = 3;
    } else {
      heroe_ganador.victorias = 1;
      heroe_ganador.peleas = 1;
    }
    // eslint-disable-next-line
  }, [numero_peleas]);

  return {
    heroe_ganador,
  };
}
