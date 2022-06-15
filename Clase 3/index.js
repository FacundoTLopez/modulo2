/* Funciones */
// No puedo tener una variable y una funcion con el mismo nombre, o dos funciones con el mismo nombre

// function saludar() {
//   return "Hola, como estas";
// }
// saludar(); //Se ejecuta la funcion, siempre poner los parentesis
// const saludo = saludar();

/* Ciclos */
/* for */

// for (let i = 1; i <= 100; i++) {
//   /*if (i == 27) {
//     break;
//   }*/
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// "Let i = 0" declaramos desde donde inicia el ciclo
// "i <= 100" declaramos la condicion que se debe cumplir
// "i++" declaramos la accion a realizar para que se cumpla la condicion
// break detendra el ciclo cuando se cumpla la condicion que le demos
// continue salteara un ciclo segun la condicion que le demos

/* while */
// while se ejecutara tantas veces como sea necesario hasta cumplir la condicion de corte
// Con while no necesito saber cuando exactamente terminara mi ciclo
// let i = 0;
// while (i >= 0) {
//   if (i === 10) break;
//   console.log(i);
//   i++;
// }

/* Do... while */
// do while ejecuta 1 vez el codigo y despues revisa la condicion mientras que while no ejecuta sin revisar la condicion
// let i = 0;
// let p = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < p);

/* Arrays */
// const Mezclita = [20, null, undefined, "hola", [], {}]; //Los arrays estan indexados empezando desde 0
// console.log(Mezclita.length); // Devuelve la cantidad de elementos de un array(empezando desde 0)
// console.log(Mezclita[3]); // se usa para acceder a un elemento en el indice ingresado
// console.log(Array.isArray(Mezclita)); // se utiliza para saber si un array es array

// for(let i = 0; i < Mezclita.length; i++){
//     console.log(Mezclita[i])
//     // Asi se itera o recorre un array
// }

// const nombre = "Facundo Tomas Lopez";
// console.log(nombre.split(" ")) // corta el array en el lugar donde este el párametro que pasaste, y lo convierte en array

//----------------------------------------------------------------------------------------------------------------------------

/* Ejercicio */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Imprimo los primeros 5 numeros
for (let i = 1; i <= numeros.length; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}
// Imprimo los ultimos 5 numeros
for (let i = 1; i <= numeros.length; i++) {
  if (i < 6) {
    continue;
  }
  console.log(i);
}
// Imprimo todos los numeros excepto el de la 4ta posicion
for (let i = 1; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
