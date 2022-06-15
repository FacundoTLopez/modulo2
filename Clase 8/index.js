/* Repaso */

/* Condicionales, bucles */

// const USUARIOS = [
//   {
//     username: "nkenny",
//     password: "123456",
//   },
//   {
//     username: "rsabbadin",
//     password: "boca123",
//   },
//   {
//     username: "afetner",
//     password: "adel123",
//   },
// ];

// let UsuarioExistente;
// do {
//   const username = prompt("Ingresa tu nombre de usuario");
//   UsuarioExistente = USUARIOS.find((usuario) => usuario.username === username);
// } while (!UsuarioExistente);

/* si el find devuelve undefined, js lo toma como falsy y no entrara en el if,
pero si el find devuelve lo que buscaba, lo tomara como truthy y ahi entrara al if */

// if (UsuarioExistente) {
//   const password = prompt("Ingresa tu password");
//   if (password === UsuarioExistente.password) {
//     console.log(`Bienvenido, ${username}`);
//   } else {
//     console.log("Contraseña incorrecta");
//   }
// } else {
//   console.log("El usuario ingresado es invalido");
// } /* Dentro hay otro if anidado validando la contraseña */

/* Clases, Destructuracion */

/*
tambien puedo usar destructuracion en parametros de funciones:
const funcion = ({nombre}) => {
console.log(nombre)
}
*/

class persona {
  constructor({ nombre, edad, domicilio }) {
    /* Al destructurar en los parametros, ahorro el usar persona.nombre etc */
    this.nombre = nombre;
    this.edad = edad;
    this.mascotas = [];
    this.tieneTrabajo = false;
    this.domicilio = domicilio;
  }

  saludar = () => {
    `Hola, mi nombre es ${this.nombre}, tengo ${this.edad}, mi pelo es de color ${this.pelo}`;
  };
}
