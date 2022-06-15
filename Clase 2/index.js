/* Tipos de datos */
let numero = 123456789;
let texto = "Soy un texto";
let boolean = true; // O false
let nulo = null;
let indefinide = undefined;
console.log(typeof numero); // Muestra el tipo de dato

/* para concatenar texto y variables podemos hacer esto*/
const concat = "Hola soy facundo y tengo " + numero + " años.";
console.log(concat);
/*O esto, que queda mejor, usando comillas invertidas*/
const concatMejor = `Hola soy Facundo y tengo ${numero} años.`;
console.log(concatMejor);

/* 
truthy:
Numeros !== 0
String no vacios
[] array vacio y con elementos
{} objeto vacio y con elementos

falsy:
0
-0
String vacios
Null
Undefined
NaN
0n
*/

/*
Condicional if
if (condicion) {
    accion;
}else{
    accion;
}
*/
// const promptEdad = parseInt(prompt("Ingresa tu edad"));
// if (promptEdad <= 6) {
//   console.log("Anda al jardin ");
// } else if (promptEdad <= 13) {
//   console.log("Anda a la Primaria");
// } else if (promptEdad <= 18 && promptEdad > 13) {
//   console.log("Anda a la secundaria");
// }

// /* Condicional switch:*/
// let edad = 6;
// switch (promptEdad) {
//   case 6:
//     console.log("Tenes 6");
//     break;
//   case 13:
//     console.log("Tenes 13");
//     break;
//   case 18:
//     console.log("Tenes 18");
//     break;
// }

//----------------------------------------------------------------------------
//Ejercicio

let edad = parseInt(prompt("Ingresa tu edad"));
if (edad < 18) {
  console.log("Soy menor de edad");
} else if (edad > 18 && edad < 25) {
  console.log("Soy mayor de edad y tengo menos de 25 años");
} else if (edad > 18 && edad > 25) {
  console.log("Soy mayor de edad y tengo mas de 25 años");
}

switch (true) {
  case edad < 18:
    console.log("Soy menor de edad(Switch)");
    break;
  case edad > 18 && edad < 25:
    console.log("Soy mayor de edad y tengo menos de 25 años(Switch)");
    break;
  case edad > 18 && edad > 25:
    console.log("Soy mayor de edad y tengo mas de 25 años(Switch)");
    break;
}
