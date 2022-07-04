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
    ingredientes: ["Salsa", "Queso", "Jamon", "Morrones", "Aceitunas"],
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

const main = document.createElement("section");
main.setAttribute("id", "main-container");
const cardsDiv = document.createElement("div");
cardsDiv.classList.add("pizza-card-container");

const title = document.createElement("h1");
title.setAttribute("id", "h1-title");
const titleText = document.createTextNode("Pizzeria Nucber");
title.appendChild(titleText);

const formDiv = document.createElement("div");
formDiv.setAttribute("id", "pizza-form-div");
const pizzaForm = document.createElement("form");
pizzaForm.setAttribute("id", "pizza-Form");
const pizzaFormInput = document.createElement("input");
pizzaFormInput.setAttribute("type", "text");
const pizzaFormButton = document.createElement("button");
pizzaFormButton.textContent = "Buscar";
pizzaFormButton.classList.add("Buttons");
pizzaForm.appendChild(pizzaFormInput);
pizzaForm.appendChild(pizzaFormButton);
formDiv.appendChild(pizzaForm);

main.appendChild(title);
main.appendChild(formDiv);
document.body.appendChild(main);

document.addEventListener("DOMContentLoaded", () => {
  const PizzaDatabase = JSON.parse(localStorage.getItem("Pizzas"));
  PizzaDatabase.map((p) => {
    const cards = document.createElement("div");
    cards.classList.add("pizza-cards");
    main.appendChild(cards);

    const nombre = document.createElement("h2");
    const textoNombre = document.createTextNode(`${p.nombre}`);
    nombre.appendChild(textoNombre);

    const precio = document.createElement("p");
    const textoPrecio = document.createTextNode(`cuesta $${p.precio}`);
    precio.appendChild(textoPrecio);

    const ingredientes = document.createElement("ul");
    ingredientes.setAttribute("class", "pizza-ul");
    ingredientes.setAttribute("aria-label", "Ingredientes:");
    p.ingredientes.map((ingrediente) => {
      const listaIngredientes = document.createElement("li");
      const liText = document.createTextNode(ingrediente);
      listaIngredientes.appendChild(liText);
      ingredientes.appendChild(listaIngredientes);
    });

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    const Img = document.createElement("img");
    Img.setAttribute("src", `${p.imagen}`);
    Img.setAttribute("class", `pizza-img`);
    imgDiv.appendChild(Img);

    cards.appendChild(imgDiv);
    cards.appendChild(nombre);
    cards.appendChild(precio);
    cards.appendChild(ingredientes);
    cardsDiv.appendChild(cards);
    main.appendChild(cardsDiv);
  });
  console.log(cardsDiv);
});

const ProcesarPedido = async (e) => {
  e.preventDefault(e);
  cardsDiv.innerHTML = "";
  const cards = document.createElement("div");
  cards.classList.add("pizza-cards");
  main.appendChild(cards);

  const StoragePizzas = JSON.parse(localStorage.getItem("Pizzas"));
  const namePizza = pizzaFormInput.value;
  const Pizza = StoragePizzas.find((p) => p.nombre == namePizza);
  console.log(Pizza);

  try {
    const nombre = document.createElement("h2");
    const textoNombre = document.createTextNode(Pizza.nombre);
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

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    const Img = document.createElement("img");
    Img.setAttribute("src", `${Pizza.imagen}`);
    Img.setAttribute("class", `pizza-img`);
    imgDiv.appendChild(Img);

    cards.appendChild(imgDiv);
    cards.appendChild(nombre);
    cards.appendChild(precio);
    cards.appendChild(ingredientes);
    cardsDiv.appendChild(cards);
    main.appendChild(cardsDiv);
  } catch (error) {
    const errorMsg = document.createElement("h2");
    errorMsg.setAttribute("class", "error");
    const errorText = document.createTextNode(
      "No hay ninguna pizza con ese Nombre"
    );
    errorMsg.appendChild(errorText);
    cards.appendChild(errorMsg);
    cardsDiv.appendChild(cards)
  }

  pizzaFormInput.value = "";
};

pizzaFormButton.addEventListener("click", ProcesarPedido);
