/* Formularios en JavaScript */
/* Validar Formularios, es comprobar que en cada campo se haya ingresado lo solicitado */
/* Form con Nombre, Apellido, Correo, Contraseña, DNI, Telefono, Fecha de nacimiento
Nombre = que no tenga simbolos o numeros, que el campo no este vacio
Apellido = que no tenga simbolos o numeros, que el campo no este vacio
Correo = que tenga formato de correo electronico ej (cualquiercosa)@(cualquiercosa).(cualquiercosa)
Contraseña = 1 mayuscula, 1 minuscula, 2 numeros, 8 caracteres, 1 caracter especial, maximo 10 caracteres
DNI = minimo 6 numeros maximo 11
Telefono = Tienen que ser numeros
Fecha de Nacimiento = Mayor de edad*/
const Formulario = document.querySelector("form");

const HandleSubmit = (e) => {
  e.preventDefault();

  const Data = [...e.target.elements]
    .filter((element) => element.type !== "submit")
    .reduce((acc, element) => {
      acc[element.getAttribute("name")] =
        element.type === "checkbox" ? element.checked : element.value;
      return acc;
    }, {});

  const Keys = Object.keys(Data);
  const Validations = Keys.map((key) => ValidateField(key, Data[key]));
  const Reduced = Validations.reduce((acumulador, valor) => {
    const [key] = Object.keys(valor);
    acumulador[key] = valor[key];
    return acumulador;
  }, {});
  console.log(Reduced);
  console.log(Data);
};

const Translation = {
  name: "nombre",
  lastname: "apellido",
};

const ValidateField = (field, value) => {
  const Error = {};
  Error[field] = [];
  if (["name", "lastname"].includes(field)) {
    if (!value.trim()) {
      Error[field].push(`Ingresa un ${Translation[field]}`);
    }
    if (value.includes("@")) {
      Error[field].push(`Ingresa un ${Translation[field]} valido`);
    }
  }
  /*Para correo se usara expresiones regulares,un patron que permite hacer una busqueda en base a ese patron
  (entre A-Z, mayusculas, minusculas, etc.), estas se pueden buscar en google
  tambie se usara .match, metodo de strings, en el que se inserta la expresion regular*/
  if (field === "email") {
    const Matches = value.match(/\S+@\S+\.\S+/);
    if (!Matches) {
      Error[field].push("el correo electronico es invalido");
    }
  }
  if (field === "dni") {
    if (value.length < 6 && value.length > 10) {
      Error[field].push(`el dni es muy corto`);
    }
  }
  return Error;
};

/* Esta funcion cre un objeto con los datos del form, usa el atributo name como la key 
La propiedad .elements devuelve un HTMLFormControlsCollections, algo parecido a un array, como los HTMLCollection o los NodeList
este HTMLFormControlsCollections devuelve todos los inputs, en esta funcion estamos convirtiendo esto a un array
.reduce, metodo de array, recibe 2 parametros, un callback con 2 parametros, acumulador(es donde se acumulara cada valor) y valor(valor sera cada elemento del array)
si el array tiene string, estos se concatenan con el resto
y el segundo parametro(opcional) que es el primer valor que tomara el acumulador, este puede ser cualquier tipo de dato */

Formulario.addEventListener("submit", HandleSubmit);

/* Evento submit se ejecuta al tocar enter en el form o al tocar el input type submit
este evento recarga la pagina despues de ejecutarse, esto se previene con el metodo PreventDefault() */
