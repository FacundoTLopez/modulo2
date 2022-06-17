/** Promesas III */
/** ¿Que es fetch?, una funcion que sirve para hacer peticiones http asincronas, usando promesas */
/** XMLHttpRequest, es un objeto de JavaScript, una forma que hacia lo mismo que fetch pero mas feo segun Kenny */
/** ¿Que es un header?, varios tipos de informacion adicional a una peticion o respuesta(informacion entre servidor-cliente), se define con key:value y se pasan en los parametros de la funcion fetch("link de la api", {headers:{},})
 * Los headers son vulnerables y si te hackean, se puede ver la informacion que mandes por los headers
 */
/** Objeto request, es el objeto de la peticion, con distintas propiedades relevantes para el servidor, ya sea enviadas desde el usuario o el navegador, contiene el header, un body(en json), las cookies y mas */
/** Objeto response, es el objeto que devuelve la respuesta del servidor */

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });
// Siempre ponerlo => .then((res) => res.json()), .json es un metodo de la clase response que transforma el body de la respuesta (que tien body binario) en un json para que se pueda ver y trabajar con el

/** Ejercicio */

fetch("https://swapi.dev/api/people/4")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
