// // JavaScript es un lenguaje interpretado, debilmente tipado y dinamico

// // formas de declarar una variable

// var primerNombre = "Nicolas"; //la forma var ya no se utiliza
// let apellido = "Kenny";
// const Sexo = "Masculino";

// /*
// const se utiliza para valores que no van a ser reasignados, va a dar error si se intenta reasignar
// */

// //Se puede concatenar variables

// const NombreCompleto = "Facundo" + "Lopez"; //= Facundo Lopez

// /*Codigo de la clase :*/

// const Pi = 3.14;
// let hora = 13;
// hora = 14;
// hora = 15;

// /*Formas de pedir valores en el navegador :*/
// const nombre = prompt("Tu nombre es...");
// console.warn(nombre);
// console.error(nombre);
// alert(nombre);

// const mayor18 = confirm("Si o No capo?");

// // Operadores logicos
// const llueve = confirm("Llueve?")
// const salgo = confirm("Salgo?")
// // && => AND
// // || => OR
// // ! => NOT
// console.log(llueve && salgo)

// // Operadores de comparacion
// const numero1 = prompt(`numero 1`)
// const numero2 = prompt(`numero 2`)
// // == : comparo el valor
// // != : comparo el valor
// // === : estrictamente igual (Comparo valor y tipo de dato)
// // !== : estrictamente distinto (Comparo valor y tipo dato)
// // >  : mayor que
// // <  : menor que
// // <= : menor o igual
// // >= : mayor o igual
// console.log(numero1 == numero2)

/* Ejercicio */
const Name = "Facundo Tomas Lopez";
let age = 20;
console.log(`Hola! Mi nombre es ${Name} y tengo ${age} años`);

const Name2 = prompt("Ingrese su Nombre y apellido");
let age2 = prompt("Ingrese su edad");
console.log(`Hola! Mi nombre es ${Name2} y tengo ${age2} años`);
