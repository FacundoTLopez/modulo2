/* REPASO, mitad de la cursada JavaScript */
// Destructuracion :

const persona = {
  nombre: "Facundo",
  apellido: "Lopez",
  edad: "20",
  empresa: "Luz de levanah",
};

const { nombre, apellido, edad } = persona; // Tiene que hacerse uno de la key para llamarla

const frutas = ["Banana", "Pera", "Manzana"];

const [pepe, el, viejo] = frutas; // No importa si le ponemos otro nomre, ya que se basa en la posicion
