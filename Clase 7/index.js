/* For of, for if */

const ingredientes = ["Harina", "Levadura", "sal", "Agua"];

/* Hace lo mismo que un for normal pero no se le da la condicion de 
corte ya que recorrera hasta el final, y declara una constante en vez del iterador */

for (const ingrediente of ingredientes) {
  if (ingrediente === "sal") {
    break;
  }
  console.log(ingrediente);
}

const obj = {
  nombre: "Facundo",
  apellido: "Lopez",
};

/* funciona con arrays u objetos
con un objeto, la variable toma el valor de las key
con los arrays, devuelve los indices
*/
for (i in obj) {
  console.log(i);
}

/* Callbacks */
/* Callback es una funcion que se pasa como parametro a otra funcion */

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;
const concat = (s1, s2) => `${s1} ${s2}`;

const EjecutarOperacion = (a, b, operacion) => {
  return operacion(a, b);
};
EjecutarOperacion(4, 8, dividir);
EjecutarOperacion("hola", "juan", (a, b) => {
  return `${a} ${b}`;
});

/* Metodos de array */

const frutas = ["Manzana", "Naranja", "Pera"];
const personas = [
  {
    nombre: "Nicolas",
    apellido: "Kenny",
    empleo: "dev",
  },
  {
    nombre: "Juan",
    apellido: "Kenny",
    empleo: "Abogado",
  },
  {
    nombre: "Fernando",
    apellido: "Kenny",
    empleo: "Desempleado",
  },
  {
    nombre: "Fernando",
    apellido: "Fernandez",
    empleo: "Desempleado",
  },
];

/* FIND, permite buscar un elemento dentro de un array, recorre un array y se ejecuta segun cuantos items tenga.
array.find(callback)
el parametro del callback toma como valor a cada item del array
find devolvera el primer item que coincida con tu condicion*/

personas.find((persona) => persona.nombre === "Nicolas");

frutas.find((parametro) => parametro === "Pera");

/* FILTER 
funciona como find, pero devolvera todos los items que coincidan con tu condicion, y devolvera un array nuevo*/

personas.filter((persona) => persona.empleo === "Desempleado");

const carrito = [
  { ID: 1, nombre: "Coca" },
  { ID: 2, nombre: "Papas" },
  { ID: 3, nombre: "Arroz" },
];

carrito.filter((producto) => producto.ID !== 2); //Elimine de mi carrito las papas

/* For each
recorre un array, elemento por elemento*/

personas.forEach((persona) => {
  console.log(persona.nombre);
});

/* MAP 
retorna un array nuevo, y en cada posicion va a hacer lo que le indiques*/
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const nuevoArray = numeros.map((numero) => numero * 2);
console.log(nuevoArray);

const nuevasPersonas = personas.map((persona) => {
  //const { nombre, apellido } = persona;
  return {
    ...persona /* spread operator: tomo todas las propiedades de persona y las metio al objeto nuevo*/,
    empleo: "Desempleado",
    // edad: 22, //puedo agregar mas keys
  };
});
console.log(nuevasPersonas);

/* Ejercicio */

const operacionFea = (a, b) => a * b;
const OperacionCool = (a, b, operacion) => operacion(a, b);
console.log(operacionFea(4, 6));
console.log(OperacionCool(4, 6, operacionFea));
