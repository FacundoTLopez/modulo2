const PIZZAS = [
  {
    ID: 1,
    nombre: "Muzzarella",
    ingredientes: ["Salsa", "Muzzarella", "Oregano", "Aceitunas"],
    precio: 300,
    imagen: "./Img/Muzzarella.jpg",
  },
  {
    ID: 2,
    nombre: "Especial",
    ingredientes: ["Salsa", "Queso", "Jamon", "Morrones"],
    precio: 650,
    imagen: "./Img/Especial.jpg",
  },
  {
    ID: 3,
    nombre: "Calabresa",
    ingredientes: ["Salsa", "Queso", "Salame"],
    precio: 600,
    imagen: "./Img/Calabresa.jpg",
  },
  {
    ID: 4,
    nombre: "Fugazza",
    ingredientes: ["Salsa", "Queso", "Cebolla"],
    precio: 550,
    imagen: "./Img/Fugazza.jpg",
  },
  {
    ID: 5,
    nombre: "Pizza De Rucula",
    ingredientes: ["Salsa", "Queso", "Carne", "Rucula"],
    precio: 700,
    imagen: "./Img/DeRucula.jpg",
  },
  {
    ID: 6,
    nombre: "Napolitana",
    ingredientes: ["Salsa", "Queso", "Tomate", "Oregano"],
    precio: 400,
    imagen: "./Img/Napolitana.jpg",
  },
];

localStorage.setItem("Pizzas", JSON.stringify(PIZZAS));

const input = document.querySelector("input");
const button = document.querySelector("button");
const card = document.getElementById("card");
const cardP = document.createElement("h2");
const cardPText = document.createTextNode(
  "Ingresa el ID de la Pizza que queres"
);
cardP.appendChild(cardPText);
card.appendChild(cardP);

const ProcesarPizza = async (e) => {
  card.innerHTML = "";
  e.preventDefault(e);
  const StoragePizzas = JSON.parse(localStorage.getItem("Pizzas"));
  const idPizza = input.value;
  const Pizza = StoragePizzas.find((p) => p.ID == idPizza);

  try {
    const nombre = document.createElement("h2");
    const textoNombre = document.createTextNode(
      `Esta Pizza es la ${Pizza.nombre}`
    );
    nombre.appendChild(textoNombre);

    const precio = document.createElement("p");
    const textoPrecio = document.createTextNode(`cuesta $${Pizza.precio}`);
    precio.appendChild(textoPrecio);

    const ingredientes = document.createElement("ul");
    ingredientes.setAttribute("aria-label", "Se hace con estos ingredientes");
    Pizza.ingredientes.map((ingrediente) => {
      const listaIngredientes = document.createElement("li");
      const liText = document.createTextNode(ingrediente);
      listaIngredientes.appendChild(liText);
      ingredientes.appendChild(listaIngredientes);
    });

    const Img = document.createElement("img");
    Img.setAttribute("src", `${Pizza.imagen}`);

    card.appendChild(nombre);
    card.appendChild(Img);
    card.appendChild(precio);
    card.appendChild(ingredientes);
  } catch (error) {
    const errorMsg = document.createElement("h2");
    errorMsg.setAttribute("class", "error");
    const errorText = document.createTextNode(
      "No hay ninguna pizza con ese ID"
    );
    errorMsg.appendChild(errorText);
    card.appendChild(errorMsg);
  }

  input.value = "";
};
button.addEventListener("click", ProcesarPizza);
