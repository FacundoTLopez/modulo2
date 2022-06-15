/* Promesas en JavaScript
Llamado asincrónico, se solicita algo, que va a llevar tiempo, pero puedo hacer otra cosa mientras espero una respuesta de lo solicitado, (sincronico hago esto, despues lo que sigue, todo paso a paso)
Promesa = algo que va a devovlver algo resuelto o un error
la Promesa puede estar en 3 estados, pendiente(pending), completa(fulfilled), no completada(rejected)
Estructura de una promesa*/

// const esperarMs = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!ms) {
//         reject("Que haces gato");
//       }
//       resolve({
//         value: ms * 2,
//       });
//     }, ms);
//   });
// };
// esperarMs(2500)
//   .then((resultado) => {
//     console.log({ resultado });

//     return esperarMs(resultado.value);
//   })
//   .then((resultado) => {
//     console.log({ resultado });
//     return esperarMs(0);
//   })
//   .catch((error) => {
//     console.log({ error });
//   });
/* Palabra reservada then, cuando tenga el resultado de la promesa(resolve), hace un callback con un parametro que es el resultado del resolve
Palabra reservada catch, para cuando la promesa queda en reject,  hace un callback con un parametro que es el resultado del reject */

/* sintaxis async y await 
cuando utilizamos async ya no hace falta poner new Promise
await devuelve directamente el resultado de la promesa, frena el flujo y ejecuta las promesas, despues continua, se puede usar si necesitas los datos para seguir*/

// const esperar = async function () {};
// async function esperar () {};
const esperarMs = async (ms) => {
  return { ms };
};

const mostrarResultado = async () => {
  try {
    const { datos } = await esperarMs(2000);
    return { data: datos * 20 };
  } catch (error) {
    return error;
  }
};
mostrarResultado().then((res) => {
  if (res.error) {
    console.log("Che, hubo un error");
  } else {
    console.log(res.data);
  }
});

/* con trycatch(intenta hacer esto, si no funciona, agarra el error) evito el uso del metodo catch, pero lo mejor es usar async/await y catch */
