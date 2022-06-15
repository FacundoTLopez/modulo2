const IngPizza = [
  "Harina",
  "Agua",
  "sal",
  "Aceite",
  "Salsa de tomate",
  "Queso",
  "Aceitunas",
  "Oregano",
  "Salame",
  "Ingrediente10",
];

const FunctionArray = (array) => {
  let Pares = [];
  let Impares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 === 0) {
      Pares.push(array[i]);
    } else {
      Impares.push(array[i]);
    }
  }
  return [Pares, Impares];
};

const [Pares, Impares] = FunctionArray(IngPizza);
console.log(
  `Los ingredientes pares son ${Pares}`,
  `Los igredientes Impares son ${Impares}`,
);
