/* DOM es el esqueleto que permite a JS interactuar con el HTML 
transforma el codigo HTML en un arbol (Parecido a la estructura de un arbol binario, pero puede tener mas de dos hijos)
para que se pueda trabajar en el con JS
Cada elemento HTML es un nodo de tipo elemento, y si esta etiqueta tiene texto, el texto se transforma en un nodo tipo texto
La transformacion se realiza de forma jerarquica

Algunos tipos de Nodos:
Document, el nodos raiz del cual derivan todos los demas nodos
Element, que representa todas las etiquetas
Attr, representa los atributos de las etiquetas HTML
Text, representa el texto que contenga los elemet
comment, representa los comentarios en HTML <-- esto es comentario -->*/

/* Metodos basicos del DOM: */

// const titulo = document.getElementById("titulo"); //Agarro el elemento utilizando su ID
// const titulo2 = document.getElementsByClassName("titulo2"); //Agarro el elemento utilizando clase
/* getElementsByClassName trae cuantos elementos existan con la misma clase, si son muchos
se crea un HTMLcollection, que como los array, viene indexado, puedo acceder a cualquier
item usando nombre[I] 
Puede que se parezca a un array, pero no tiene los mismos metodos, si se quiere usar metodos
de array, hay que convertirlo en uno:
const array = new Array(...titulo2); // Ahi ya hay un array con los contenidos del HTMLcollection
arr.forEach((e)=> console.log(e)) // Ya puedo usar metodos de array */
// const titulo3 = document.getElementsByTagName("h1"); // Agarro un elemento usando el nombre de la etiqueta, tambien puede devolver un HTMLcollection

/* Selectores en DOM */

// const titulo = document.querySelector("#titulo");
// /* Con querySelector, podes agarrar un elemento usando selectores, siempre dentro de un string
// "#titulo", "#" se usa para seleccionar un ID
// ".titulo", "." se usa para seleccionar una clase
// para seleccionar por etiqueta, se escribe el nombre de la etiueta dentro del string */
// const titulos = document.querySelectorAll("h2")
/* querySelectorAll es igual pero trae todos los elementos que existan dentro de una NodeList
tiene varios metodos, algunos compartidos con Arrays y otros de HTMLcollection */
/* querySelector es mas lento que getElement, pero por una diferencia que ni se nota */

const title = document.getElementById("h1-ej");
console.dir(title)
const paragraph = document.getElementById("text-ej");
console.dir(paragraph)
const div = document.getElementById("div-ej");
console.dir(div)
const text = document.getElementById("text-ej");
console.dir(text)
const password = document.getElementById("pass-ej");
console.dir(password)
const email = document.getElementById("mail-ej");
console.dir(email)
const number = document.getElementById("number-ej");
console.dir(number)
const box = document.getElementById("box-ej");
console.dir(box)
