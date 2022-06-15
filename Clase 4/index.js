/* Funciones */
/* Como declarar una funcion : */
function checkBoolean(valor) {
  // "valor" es un parametro que le damos, el nombre que le demos no importa
  return alert(`Valor es boolean? ${typeof valor === "boolean" ? "si" : "no"}`);
  //siempre retornar algo
}
let valor1 = 2;
checkBoolean(valor1);

/* Funcion anonima */
const x = function (a, b) {
  return a + b;
};
x(1, 2);

/* Declarar una arrow function */

const getValueFromArray = (array, index) => array[index]; //Si la arrow function tiene una sola linea de codigo, no es necesario abrir llaves ni escribir return
console.log(getValueFromArray(["Facundo", "Tomas", "Lopez", 20, 1.7], 3));

const getIndexValue = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
};
console.log(getIndexValue(["Facundo", "Tomas", "Lopez", 20, 1.7], 20));

/* Funcion recursiva (se llama a si misma) */

const factorial = () => {
  if (n <= 1) return 1; // Condicion a cumplir
  return n * factorial(n - 1); // Codigo que se ejecuta hasta cumplir la condicion
};
/*
n = 5
5 <= 1? no, entonces devuelve 5 * factorial(4) / 5 * 4 * 3 * 2 * 1
4 <= 1? no, entonces devuelve 4 * factorial(3) / 4 * 3 * 2 * 1
3 <= 1? no, entonces devuelve 3 * factorial(2) / 3 * 2 * 1
2 <= 1? no, entonces devuelve 2 * factorial(1) / 2 * 1
2 <= 1? si, entonces devuelve 1
*/

/* Sucecion de fibonacci con funcion recursiva */

const fibonacci = (num) => {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
};

/* Ejercicio */

let num1 = 6;
let num2 = 12;

const sum = (a, b) => {
  return `El resultado de la suma es ${a + b}`;
};

function sumFea(a, b) {
  return `El resultado de la suma es ${a + b}`;
}
console.log(sum(num1, num2));
console.log(sumFea(num1, num2));
