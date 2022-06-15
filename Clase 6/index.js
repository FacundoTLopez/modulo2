// /* Destructuracion */

// const arrayDest = [1, 2, 3, 4, 5];
// const [uno, dos, tres] = arrayDest;
// /* A las variables dentro de los corchetes, se le asigna el valor del indice en el que estan */

// /* Metodos de strings */
// const string = "  Soy el string en el que se van a usar los metodos  ";

// console.log(string.length); //Devuelve la longitud de un string

// console.log(string.indexOf("a", 6));
// /* indexOf buscara en el string la posicion del parametro que le pases en parametros,
// podes pasarle un segundo parametro que sera la posicion a partir de la cual queres
// empezar a buscar */

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// /* Convertiran el string a mayuscula o minuscula segun cual se use */

// const fecha = new Date().toISOString(); //Formato ISO = year-month-day[T]hour-minute-second
// console.log(fecha.split("T"));
// const [soloFecha, soloHora] = fecha.split("T");
// console.log(soloFecha, soloHora);
// /* split() divide el string segun el lugar donde este el caracter que le pases como parametro */

// console.log(soloFecha.split("-").reverse().join("/"));
// /* reverse() es un metodo de array que invierte todos los datos de un array*/

// console.log(soloFecha.replaceAll("-", "/"));
// /* replace() reemplaza el caracter que le des en el primer parametro por el caracter que
// le des en el segundo parametro
// replaceAll() hace lo mismo pero con todos los caracteres que coincidan con el primer parametro */

// console.log(string.trim());
// /* trim() borra los espacios que haya al principio y final del array */

// /* Metodos de arrays */
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.length); //devuelve la longitud del array

// console.log(array.toString()); //convierte un array en un string

// array.push(11);
// /* push() agrega al final del array lo que le pases como parametro,
// tambien existe unshift() que agrega al principio */
// console.log(array);

// console.log(array.join("/"));
// /* join() junta los elementos del array usando el caracter que pases por parametro */

// console.log(array.slice(2, 4));
// /* slice() devuelve una copia de una seccion del array, esa seccion sera desde la posicion
// que pases en el parametro 1 hasta la posicion que pases en el parametro 2 */

// console.log(array.concat(array));
// /* concat() une los dos arrays que pases en parametros */

/* Ejercicio */

let dias = "Lunes, Martes, Miercoles, Jueves, Viernes";

console.log(dias.length); // Longitud
console.log(dias.toUpperCase()); // A mayusculas
console.log(dias.replaceAll(", ", "-")); // Reemplazo comas por guion medio
console.log(dias.split(",")); //Convierto en array

let mes1 = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
let mes2 = [
  "Julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const Meses = mes1.concat(mes2);
console.log(Meses); //Devuelvo array con 12 meses

console.log(mes1.slice(1, 4)); // Array desde febrero hasta abril incluido

const cuatroLetras = (array) => {
  let arrayNuevo = [];

  for (let i = 0; i < array.length; i++) {
    if (array[1].length > 4) {
      arrayNuevo.push(array[i]);
    }
  }
  return arrayNuevo;
};

console.log(cuatroLetras(mes1));
