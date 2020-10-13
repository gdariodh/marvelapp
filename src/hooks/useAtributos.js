// asigna atributos aleatorios para luego inyectar en el object de los heroes seleccionados para luchar
export default function useAtributos() {
  const atributos1 = {
    damage: Math.floor(Math.random() * 100),
    agility: Math.floor(Math.random() * 70),
    health: Math.floor(Math.random() * 500),
    stamina: Math.floor(Math.random() * 140),
  };
  const atributos2 = {
    damage: Math.floor(Math.random() * 100),
    agility: Math.floor(Math.random() * 70),
    health: Math.floor(Math.random() * 300),
    stamina: Math.floor(Math.random() * 140),
  };

  return {
    atributos1,
    atributos2,
  };
}
