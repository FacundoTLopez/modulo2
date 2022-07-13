class Curso {
  constructor({ img, nombre, fecha, hora, texto }) {
    (this.img = img),
      (this.nombre = nombre),
      (this.fecha = fecha),
      (this.hora = hora),
      (this.texto = texto);
  }
}

const Cursos = [];

const magiaElemental = new Curso({
  img: "./src/img/magiaElemental.jpg",
  nombre: "Magia Elemental",
  fecha: "DOMINGO 17/7",
  hora: "9 a 12 am de Argentina",
  texto:
    "Podras conocer a los duendes y las hadas... las sirenas y los dragones, quienes nos compartirán además Secretos Magicos, Formulas Alquimicas que llenaran nuestros diario Vivir de mucha Magia!!",
});

Cursos.push(magiaElemental);
console.log(Cursos);
