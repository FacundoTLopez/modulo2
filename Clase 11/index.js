/* Eventos y Manipulación del DOM II */

// const Container1 = document.getElementById("container1");

// const FirstH3 = document.createElement("h3");
// const FirstH3Text = document.createTextNode("Hola");
// FirstH3.appendChild(FirstH3Text);
// Container1.appendChild(FirstH3);
// const SecondH3 = document.createElement("h3");
// const SecondH3Text = document.createTextNode("Chau");
// SecondH3.appendChild(SecondH3Text);
// Container1.appendChild(SecondH3);
// const Input = document.createElement("input");
// Container1.appendChild(Input);
// console.log(Container1);

// const Container2 = document.getElementById("container2");

// const H1 = document.createElement("h1");
// Container2.appendChild(H1);
// const Button = document.createElement("button");
// const ButtonText = document.createTextNode("Escribir");
// Button.appendChild(ButtonText);
// Container2.appendChild(Button);
// console.log(Container2);

// Input.addEventListener("change", (e) => {
//   H1.innerText = e.target.value;
// });

/* Cambiar estilos y clases con JS */

// const paragraph = document.getElementById("parrafo");
// paragraph.classList.add("light"); // Le agrego una clase al elemento
// paragraph.classList.remove("light"); // Le elimino una clase al elemento

// document.querySelector("button").addEventListener("click", () => {
//   paragraph.classList.toggle("light");
//   paragraph.classList.toggle("dark");
// });
// if (paragraph.classList.contains("light"))
/* Contains revisa si el elemento tiene la clase que le pasas por parametro y devuelve un boolean */

/* Cambiar atributos con JS */
// document.querySelector("input").setAttribute("type", "password");
/* el primer parametro es el nombre del atributo y el segundo es el valor */

/* Formato .JSON, es como los objetos, se usa entre llaves, con key:value, con la diferencia de que en JS actua como un string, y se escribe "key":value,*/
const str = `{
  "key": 1250,
  "string": "hola",
  "array": [{}],
  "bool": false
}`;

/* Pero si quiero acceder a las key y values como en un objeto, no se puede, asi que hay que convertirlo a un objeto normal sin string 
Dentro de JS esta el objeto JSON tiene dos metodos, JSON.stringify y JSON.parse */

let parsed = JSON.parse(str); // Y ya puedo verlo como objeto, parse parsea cualquier dato excepto texto normal
console.log(str);

const prs = [
  {
    name: "Nicolas",
  },
  {
    name: "Juan",
  },
];
console.log(JSON.stringify(prs)); // Stringify lo transforma a un string
console.log(JSON.parse(`[{"name":"Nicolas"},{"name":"Juan"}]`));

/* Objeto Storage, objeto presente en la API del navegador que permite almacenar datos de manera local
Local Storage, Se mantiene hasta que se limpie manualmente
Session Storage, se mantiene hasta que se cierre la pestaña del navegador
Funcionan con key:value */

localStorage.setItem("usuarioLogueado", "Nicolas Kenny"); // Asi guardo algo en el LocalStorage, los parametros son ('key', 'value')
console.log(localStorage.getItem("usuarioLogueado")); // Pasando la key como parametro, asi accedo a los datos en el LocalStorage
localStorage.clear(); // Limpia todo el localStorage
localStorage.setItem("prs", JSON.stringify(prs)); // Usando JSON convierto el objeto a string asi puedo guardarlo en el localStorage
console.log(JSON.parse(localStorage.getItem("prs"))) // Y asi puedo transformar y traer objetos desde el localStorage
/* con localStorage.removeItem('') puedo eleminar un unico objeto del localStorage, pasando su key */
/* con sessionStorage es completamente igual, pero se borra cuando cierro la pestaña */
