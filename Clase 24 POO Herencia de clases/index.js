/*
class Animal {
  constructor({ alimentacion, sangre, patas, color, movimiento }) {
    this.alimentacion = alimentacion;
    this.sangre = sangre;
    this.patas = patas;
    this.color = color;
    this.movimiento = movimiento;
  }

  alimentarse() {
    return "comi algo";
  }
}

// Se usa extends para que herede propiedades de otra clase
class Ave extends Animal {
  constructor({
    plumaje,
    pico,
    eggSize,
    alimentacion,
    sangre,
    patas,
    color,
    movimiento,
  }) {
    // en la funcion super se agregan las propiedas que se heredaran de otra clase, para que se puedan usar
    super({
      alimentacion,
      sangre,
      patas,
      color,
      movimiento,
    });
    this.plumaje = plumaje;
    this.pico = pico;
    this.eggSize = eggSize;
  }
}

const Tucan = new Ave({
  plumaje: "largo",
  pico: "Largo y de colores",
  eggSize: "Grande",
  alimentacion: "Frutas",
  sangre: "caliente",
  patas: 2,
  color: "verde",
  movimiento: "Vuelan y caminan",
});

console.log(Tucan);
class Reptiles {}

// Tucan tendra de prototipo la Clase ave, que a su vez tendra de prototipo a la clase Animal, y la clase Animal tiene de prototipo a Object

class Pez extends Animal {
  constructor({ escamas, cantidadAletas, ...rest }) {
    super({
      ...rest,
      patas: undefined,
      movimiento: "nadan",
    });

    this.escamas = escamas;
    this.cantidadAletas = cantidadAletas;
  }
}

const Nemo = new Pez({
  escamas: "naranjas y blancas",
  cantidadAletas: 3,
  alimentacion: "comida de pez",
  sangre: "caliente",
  color: "naranja y blanco",
});
console.log(Nemo);
*/

/*
1) Desarrollar un metodo de los strings que reciba por
parametro un string. Debe devolver un valor numerico que
corresponde a la cantidad de ocurrencianas del string original
conn el valor pasado por parametro.
ej:
const string = "Hola, soy de boca y me gusta el futbol"
console.log(string.obtenerOcurrencias('a')) // 3 
console.log(string.obtenerOcurrencias('e')) // 4 
console.log(string.obtenerOcurrencias('e')) // 2 
String.prototype.obtenerOcurrencias = function(key){
    return [...this].filter((letra) => letra === key).length
}

*/

/*
2) Desarrollar un metodo de los Numbre que devuelva el valor
del factorial del mismo
const tres = 3
const dos = 2
const cuatro = 4

console.log(tres.factorial()) // 6
console.log(dos.factorial()) // 2
console.log(cuatro.factorial()) // 24
Number.prototype.factorial = function () {
  let factorial = 1;
  for (let i = 1; i <= this; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

const cuatro = 4
console.log(cuatro.factorial())
*/

/*
3) Desarrollar un metodo de los arrays que sirva para convertir
un array de strings en un array de objetos con la estructura:

{ID: 1, Value: 'string'}

donde el ID sea autogenerado, y el value sea cada string del array

el ID debe ser continuo, por lo que si geneo dos veces este 
metodo, debe guardar cual fue el ultimo ID

cons arr = ["hola", "chau"]
cons arr2 = ["Gato", "Gato"]

console.log(arr.crearObjeto()) // {ID: 1, Value:"Hola"}, {ID: 2, Value: "Chau"}

console.log(arr2.crearObjeto()) // {ID: 3, Value:"Perro"}, {ID: 4, Value: "Gato"}

Array.ID = 1; //Asi se le define una propiedad static a una clase "predefinida"
Array.prototype.convertirObjeto = function () {
  return this.map((elemento) => ({ ID: Array.ID++, value: elemento }));
};

const arr = ["Hola", "Chau"];
const arr2 = ["1", "2", "3", "4"];


*/

