/*
Desarrollar un sistema que permita al usuario realizar un seguimiento de sus ingresos y egresos monetarios.
    Para esto, el usuario debe poder seleccionar si el dato que está cargando es un INGRESO o un EGRESO. Seguidamente, debe poder ingresar una descripción del movimiento que está ingresando (ej. honorarios, sueldo, comprar milanesas, etc). Por último, debe poder cargar el importe del movimiento.

    Al final, debe tocar un botón que guardará la información.

    Al tocar el botón, se mostrarán en pantalla los movimientos en forma de tabla. Los movimiento del tipo INGRESO deben tener un fondo de color verde (#4cd463) y los de EGRESO, color rojo (#e8574d).

    En el pie de la tabla, se debe mostrar un resumen de la tabla, sumando todos los ingresos y restandole los egresos. Si el monto final es > 0, debe tener el color rojo y si es mayor, el verde.
*/

const Tbody = document.querySelector("tbody");
const TypeField = document.querySelector("#type");
const DescriptionField = document.querySelector("#description");
const AmountField = document.querySelector("#amount");
const DateField = document.querySelector("#date");
const SubmitButton = document.querySelector("#button");
const FinalAmount = document.querySelector("#finalamount");

/* Se realizaran funciones reutilizables para completar cada paso */

const Movimientos = []; // Despues de clickear el boton, el movimiento se guardara en este array

const MostrarImporteFinal = () => {
  let monto = 0;
  Movimientos.forEach((movimiento) => {
    if (movimiento.type === "INGRESO") {
      monto += movimiento.amount;
    } else {
      monto -= movimiento.amount;
    }
  });
  const Value = document.createTextNode(`$${monto}`);
  FinalAmount.removeChild(FinalAmount.firstChild);
  FinalAmount.appendChild(Value);
};

const LimpiarFormulario = () => {
  [DescriptionField, AmountField, DateField].forEach((input) => {
    input.value = "";
  });
};
/* LimpiarFormulario limpiara los campos del formulario para que esten listos para el siguiente movimiento */

const GenerarMovimiento = () => {
  const obj = {
    description: DescriptionField.value,
    type: TypeField.value,
    date: DateField.value.split("-").reverse().join("/"),
    amount: Number(AmountField.value),
  };
  if (!obj.description.trim() || !obj.date || obj.amount <= 0) {
    return null;
  }
  return obj;
};
/* GenerarMovimiento guarda los detalles del movimiento en un objeto que luego se usa en el eventlistener 
Split,reverse y join acomodan la fecha, y Number me transforma el string a un numero, con o sin comas*/

const ImprimirColeccionMovimientos = (array, target) => {
  array.forEach((movimiento) => {
    const Row = document.createElement("tr");
    Row.classList.add("border-b", "dark:border-gray-700");
    if (movimiento.type === "INGRESO") {
      Row.classList.add("income");
    } else {
      Row.classList.add("outcome");
    }
    const Keys = Object.keys(movimiento); //Creara un array con las Keys
    Keys.forEach((key) => {
      const Td = document.createElement("td");
      Td.classList.add("px-6", "py-4");
      const Text = document.createTextNode(
        key === "amount"
          ? `$
      ${movimiento[key]}`
          : movimiento[key],
      );
      Td.appendChild(Text);
      Row.appendChild(Td);
    });
    target.appendChild(Row);
  });
};
/* ImprimirColeccionMovimientos creara los TableRow y TableData, agregandole sus resectivas clases e inyectandolos a la tabla en el HTML */

const LimpiarTabla = () => {
  while (Tbody.firstChild) {
    Tbody.removeChild(Tbody.firstChild);
  }
};
/* LimpiarTabla limpiara la tabla para que no se impriman datos repetidos */

SubmitButton.addEventListener("click", (e) => {
  const NuevoMovimiento = GenerarMovimiento();
  if (!NuevoMovimiento) return alert("Complete todos los datos");
  LimpiarTabla();
  Movimientos.push(NuevoMovimiento);
  ImprimirColeccionMovimientos(Movimientos, Tbody);
  MostrarImporteFinal();
  LimpiarFormulario();
});
