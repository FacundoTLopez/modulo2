/** Metodos de los array */

/** MAP = Recorrer un array y devolver uno nuevo con los valores que le decimos, transforma los elementos de un array y devuelve un array nuevo con esos elementos transformados */

// const FRUTAS = ["Manzana", "Banana", "Pera", "Anana"];
// const VERDURAS = ["Lechuga", "Acelga", "Berenjena", "Zapallo"];

// const VERDURAS_2 = FRUTAS.map((elemento, indice, array) => {
//   console.log(array[indice]);
//   console.log(elemento);
//   console.log(FRUTAS[indice]);
//   // Ambos muestran lo mismo

//   /**
//    * if(elemento === "Pera"){
//    * return "Kiwi"
//    * }
//    * return elemento === "Pera" ? "Kiwi" : elemento
//    * Tambien hacen lo mismo
//    */
// });

/** FILTER, filtra del array al cual se le esta aplicando todos los valores que cumplan con la condicion que se le paso, para que suceda el filter debe retornar un booleano o un elemento(codicional) que se comporte como el valor que buscamos */

// const FRUAS_CORTAS = FRUTAS.filter((fruta) => {
//   return fruta.length > 5;
// });

// const PERSONAS = [
//   {
//     nombre: "Nicolas",
//     edad: 23,
//   },
//   {
//     nombre: "Gines",
//     edad: 20,
//   },
//   {
//     nombre: "Adel",
//     edad: 19,
//   },
//   {
//     nombre: "Juan Carlos",
//     edad: 50,
//   },
//   {
//     nombre: "Giuliano",
//     edad: 28,
//   },
// ];

// const PERSONAS_g = PERSONAS.filter((persona) => {
//   persona.nombre[0] === "G"; // Todas las personas cuyo nombre empieze con G
// });

/** FIND, retorna el primer elemento que cumpla con una condicion */

// const PERSONAS_n = PERSONAS.find((persona) => {
//   persona.nombre[0] === "N";
// });

/** REDUCE, el segundo parametro del reduce es el valor inicial del acumulador */

// const ARRAY = [
//   {
//     key: 1,
//     importe: 500,
//   },
//   {
//     key: 2,
//     importe: 325,
//   },
//   {
//     key: 1,
//     importe: 100,
//   },
//   {
//     key: 1,
//     importe: 1020,
//   },
//   {
//     key: 2,
//     importe: 1292,
//   },
// ];

// const val = ARRAY.reduce((acc, value) => {
//   const { key, importe } = v;

//   acc[key] = acc[key] ? acc[key] + importe : importe;
//   return acc;
// }, {});

/** Objetos */

// const Nicolas = {
//   nombre: "Nicolas",
//   ead: 23,
//   empleo: "N/C",
//   puedeVolar: false,
// };

// const keys = Object.keys(Nicolas); //Devuelve todas las keys de un objeto en un array
// keys.map((key) => Nicolas[key])
// console.log(keys)

// values = Object.values(Nicolas); //Devuelve todos los valores de un objeto en un array

// const entries = Object.entries(Nicolas); //Devuelve un array de arrays con las key y values de un objeto

/** Dates */

/** Condicionales (React), no hay if/else en react, pero se pueden usar ternarys y mas ternarys si la condicion no se cumple*/

const v = 3 > 5 ?
      4 : 9 > 3 ?
      1 : 0; 
