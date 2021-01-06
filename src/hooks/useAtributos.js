// genera atributos aleatorios para los luchadores de la velada, los cuales son 2
export default function useAtributos() {
  const atributos1 = {
    damage: Math.floor(Math.random() * 120),
    agility: Math.floor(Math.random() * 70),
    health: Math.floor(Math.random() * 800),
    stamina: Math.floor(Math.random() * 200),
  };
  const atributos2 = {
    damage: Math.floor(Math.random() * 120),
    agility: Math.floor(Math.random() * 70),
    health: Math.floor(Math.random() * 800),
    stamina: Math.floor(Math.random() * 200),
  };

  return {
    atributos1,
    atributos2,
  };
}
