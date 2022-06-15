/* Objetos en JavaScript */
/* Los objetos aunque sean identicos, son distintos en la memoria */

// const MiPerro = {
//   /* Key : Value, */
//   nombre: "Luna",
//   edad: 2,
//   esAlto: false,
//   vehiculos: [],
//   direccion: {},
//   /* el Value de una Key puede ser cualquier tipo de dato */
// };

// console.log(
//   MiPerro.nombre,
// ); /* Asi se accede a una propiedad de un objeto cuando se las conoce*/
// console.log(
//   MiPerro["nombre"],
// ); /* Esta es otra forma, para acceder dinamicamente */

// const Props = ["nombre", "edad", "esAlto", "vehiculos", "direccion"];

// for (let i = 0; i < Props.length; i++) {
//   console.log(
//     "propiedad",
//     Props[i],
//   ); /* Accedo a las keys del objeto, reescritas en el array */
//   console.log(
//     "valor",
//     MiPerro[Props[i]],
//   ); /* Accedo al valor del objeto, esto es como hacer MiPerro['nombre'] */
// }

// /* Aparte de las propiedades, los objetos tienen metodos, definidos con una funcion anonima o arrow function */
// /* Tambien puedo tener el metodo definido en una funcion fuera del objeto */
// const saludar = (nombre) => `Hola ${nombre}`;

// const Facundo = {
//   nombre: "Facundo",
//   /* Ahora el metodo */
//   saludar, /* Y como el nombre de la funcion es igual al nombre de la key, puedo definirlo asi */
// };
// /* Facundo.nombre = 'Tomas'; asi puedo redifinir una propiedad del ojeto */

// /* Ejecuto el metodo */
// console.log(Facundo.saludar("Juan"));

/* Clases */

class Persona {
  /* Constructor es una funcion que se ejecuta cuando instanciamos una clase */
  /* A los parametros del constructor le puedo dar un valor por defecto que se usara cuando no le de un parametro al instanciar un objeto*/
  constructor(nombre, edad, empleo) {
    this.nombre = nombre;
    this.edad = edad;
    this.empleo = empleo;
    this.vehiculos = [];
  }
  /* this hace referencia a el objeto */
  /* Metodos en las clases */
  saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
  };

  cumplirAnios = () => {
    this.edad = this.edad + 1;
  };

  comprarVehiculo = (vehiculo) => {
    this.vehiculos.push(vehiculo);
  };

  presentarse = () => {
    return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
  };

  /* Esto es un metodo privado, estos solos se pueden usar dentro de la clase */
  #metodoPriv = (nombre) => {
    console.log(`Hola ${nombre}`);
  };
}

/* Asi creo un objeto instanciando la clase */
const Facundo = new Persona("Facundo", 20, "Estudiante");
console.log(Facundo);

Facundo.saludar("Fulanito"); /* Asi llamo el metodo de la clase */
/* Facundo.cumplirAnios(); */
Facundo.comprarVehiculo("supra");
console.log(Facundo.presentarse());

console.log(Facundo);

/* Ejercicio */

class Zapatilla {
  constructor(marca, color, talle) {
    this.marca = marca;
    this.color = color;
    this.talle = talle;
  }

  PrintZapatilla = () => {
    return `Estas Zapatillas son de marca ${this.marca}, color ${this.color} y talle de numero ${this.talle}`;
  };
}

const Adidas = new Zapatilla("Adidas", "Negras", 38);
const Reebok = new Zapatilla("Reebok", "Blancas", 42);
const Nike = new Zapatilla("Nike", "Azules", 21);
const Converse = new Zapatilla("Converse", "Rojas", 40);
const DC = new Zapatilla("DC", "Verdes", 39);

console.log(Adidas.PrintZapatilla());
console.log(Reebok.PrintZapatilla());
console.log(Nike.PrintZapatilla());
console.log(Converse.PrintZapatilla());
console.log(DC.PrintZapatilla());
