const PIZZAS = [
  {
    ID: 1,
    nombre: "Muzzarella",
    ingredientes: ["Salsa", "Muzzarella", "Oregano"],
    precio: 300,
  },
  {
    ID: 2,
    nombre: "Especial",
    ingredientes: ["Salsa", "Queso", "Jamon", "Morrones"],
    precio: 650,
  },
  {
    ID: 3,
    nombre: "Calabresa",
    ingredientes: ["Salsa", "Queso", "Salame"],
    precio: 600,
  },
  {
    ID: 4,
    nombre: "Fugazza",
    ingredientes: ["Salsa", "Queso", "Cebolla"],
    precio: 550,
  },
  {
    ID: 5,
    nombre: "De Rucula",
    ingredientes: ["Salsa", "Queso", "Carne", "Rucula"],
    precio: 700,
  },
  {
    ID: 6,
    nombre: "Napolitana",
    ingredientes: ["Salsa", "Queso", "Tomate", "Oregano"],
    precio: 400,
  },
];

const IdImpar = PIZZAS.filter((pizza) => pizza.ID % 2 !== 0);
IdImpar.forEach((parametro) =>
  console.log(`La pizza ${parametro.nombre} tiene el ID ${parametro.ID}`),
);

const PrecioMenor = PIZZAS.filter((pizza) => pizza.precio < 600);
PrecioMenor.forEach((parametro) =>
  console.log(
    `La pizza ${parametro.nombre} tiene un precio menor a 600 : ${parametro.precio}`,
  ),
);

const Nombres = PIZZAS.map((parametro) => parametro.nombre);
console.log(`Los nombres de todas las pizzas son ${Nombres.join(", ")}`);

const Precios = PIZZAS.map((parametro) => parametro.precio);
console.log(`Los precios de todas las pizzas son ${Precios.join(", ")}`);

const NombresYPrecios = PIZZAS.forEach((parametro)=> console.log(`La pizza ${parametro.nombre} tiene un precio de $${parametro.precio}`))
