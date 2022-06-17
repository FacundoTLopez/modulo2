/** Manejo de errores, hay que usar el metodo .catch, para que cuando la promesa no se cumpla y produzca un error, este quede atrapado y no provoque que el codigo deje de ejecutarse
 * en una promesa siempre deberia haber un .then para administrar la respuesta de la promesa, y un .catch para controlar el error
 */

// const wait = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (ms > 3000) {
//         resolve("Hola");
//       } else {
//         reject("Chau");
//       }
//     }, ms);
//   });
// };
// wait(5000)
//   .then((res) => {
//     console.log("res1", res);
//     return wait(3500);
//   })
//   .catch((err) => {
//     console.log(`error1 = ${err}`);
//     console.log({ err });
//   })
//   .then((res) => {
//     console.log("res2", res);
//     return wait(2500);
//   })
//   .catch((err) => {
//     console.log(`error2 = ${err}`);
//     console.log({ err });
//   });

/** Fetch permite hacer una peticion a una URL, tambien a un archivo JSON */

// fetch(`./obj.json`)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/** async/await
 * await define una funcion asincrona que devuelve una promesa
 * dentro de la funcion uso Promise.resolve porque la funcion no tiene resolve y reject como una promesa normal
 * Await suspende la ejecucion del codigo hasta que se resuelva la promesa, y ya o es necesario un .then
 * Await no se puede usar fuera de una funcion asincrona*/

// const funcionasincrona = async () => {
//   return Promise.resolve(1500);
// };
// funcionasincrona().then((res) => console.log(res))

// const wait = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value: ms * 2,
//       });
//     }, ms);
//   });
// };

// const getValueAfterMS = async (ms) => {
//   console.log("antes de esperar");
//   const response = await wait(ms);
//   return response;
// };

// getValueAfterMS(1250).then((res) => console.log(res));

/** ¿Que es una API?, es un cojunto de funcionalidades que podemos usar dentro de nuestra aplicacion, pueden ser publicas(pokeapi) */
/** ¿Como funciona una API?, permite acceder mas facilmente a una base de datos aa*/

const getPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
  //trrycatch captura el error antes de que se cumpla la promesa, y lo convierte en la respuesta de esa promesa, por lo tanto el error se mostrara al ejecutar .then
  // tambien se puede hacer const response = await(await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)).json();
};

getPokemon().then((res) => console.log(res));
