/* Eventos y manipulacion del DOM 
Mediante funiones podemos definir los handlers, los handlers responden al evento, la funcion es un callback, o tambien podria estar predefinida
*/

// const ButtonAlert = document.getElementById("button");
// ButtonAlert.addEventListener("click", (a) => alert("Clickeaste el boton")); //Registra este oyente a un elemento HTML, se le pasara parametros ("Tipo de evento", handler)

// const butt1 = document.getElementById("button1");
// const butt2 = document.getElementById("button1");
// const butt3 = document.getElementById("button1");

// const inp1 = document.getElementById("input1");
// const inp2 = document.getElementById("input2");

// butt1.addEventListener("dblclick", () => {
//   console.log("Hiciste doble click en el boton 1");
// });
// butt1.addEventListener("click", () => {
//   console.log(inp2.value);
// }); // al hacer click en boton1, registra el contenido del input2
// /* butt1 dblclick reconocera dos eventos, y al de click lo reconocera 2 veces */

// inp1.addEventListener("blur", () => {
//   console.log("Hola dejaste el foco en el input 1");
// });

// inp2.addEventListener("change", () => {
//   console.log("Cambio algo");
// });
// inp2.addEventListener("input", (p) => {
//     console.log(p.target.value)
// });// input registra el cambio en tiempo real

/* Crear elementos */

// const content = document.getElementById("content");

// content.innerHTML = "<b>Hola como estas</b>"; //Le agrego texto a un elemento
// content.innerText = "Hola como estas"; //Le agrego nodo texto a un elemento
/* innerHTML = todo el contenido
innerText = solo el texto */

// const parrafoNuevo = document.createElement("p"); //Esto se usa para crear un nodo tipoelemento
// const textoParrafo = document.createTextNode("Hola soy texto"); //Crea un nodo tipo texto
// parrafoNuevo.appendChild(textoParrafo); //Le agrego un nodo hijo a otro nodo(ambos existentes)
// content.appendChild(parrafoNuevo)

/* Ejercicio */

const Title = document.getElementById("title");
const Paragraph = document.getElementById("paragraph");

const TimedChange = () => {
  setTimeout(() => (Title.style.color = "red"), 3000);
  setTimeout(() => (Paragraph.textContent = "Cambie mi texto"), 3000);
};
Title.addEventListener("onload", TimedChange());
