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

const h2 = document.querySelector("h2");
const h4 = document.querySelector("h4");
const input = document.querySelector("input");
const button = document.querySelector("button");

const ProcesarValor = () => {
  const idPizza = input.value;
  const Pizza = PIZZAS.find((p) => p.ID == idPizza);
  if (Pizza) {
    h2.textContent = `El nombre de la pizza es: ${Pizza.nombre}`;
    h4.textContent = `El precio de la pizza es: ${Pizza.precio}`;
  } else {
    h2.textContent = `La pizza con el id ${idPizza} no existe`;
    h4.textContent = "";
  }
};
button.addEventListener("click", ProcesarValor);
