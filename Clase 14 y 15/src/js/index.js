/* Crear el JS de una pagina desde 0 (PedimonYA) */
class Database {
  constructor({ products = [], users = [] }) {
    this.users = users;
    this.products = products;
  }

  addProduct(...products) {
    this.products.push(...products);
    localStorage.setItem("database", JSON.stringify(this));
  }

  addUser(user) {
    this.users.push(user);
    localStorage.setItem("database", JSON.stringify(this));
  }
}

/* Clase cart para crear los carritos */
class Cart {
  constructor({
    ID = Date.now().toString(36) + Math.random().toString(36).substring(2),
    products = [],
    subtotal = 0,
    owner,
  }) {
    (this.ID = ID), (this.owner = owner);
    this.products = products;
    this.subtotal = subtotal;
  }

  // Metodo para agregar un producto al carrito
  addProduct(ID, quantity = 1) {
    const Product = database.products.find((p) => p.ID === ID);
    if (!Product) {
      return alert("Master, el producto que queres agregar no existe");
    }

    if (Product.stock >= quantity) {
      const Price = quantity * Product.price;

      this.subtotal = this.subtotal + Price;

      Product.stock = Product.stock - quantity;

      const ProductInCart = this.products.find((p) => p.ID === ID);

      if (ProductInCart) {
        ProductInCart.quantity += quantity;
      } else {
        this.products.push({
          ID,
          quantity,
        });
      }

      localStorage.setItem("cart", JSON.stringify(this));

      RenderizarProductos(this);
      RenderizarCarrito(this);
      localStorage.setItem("database", JSON.stringify(database));
    } else {
      alert("No hay mas stock, master, no rompas las bolas");
    }
  }

  // Metodo para remover un producto del carrito
  removeProduct(ID) {
    const Product = this.products.find((p) => p.ID === ID);
    const ProductDb = database.products.find((p) => p.ID === ID);
    if (!Product) {
      return alert(
        "Che master, el producto que estas intentando sacar no esta en tu carrito",
      );
    }
    ProductDb.stock++;
    this.subtotal = this.subtotal - ProductDb.price;
    if (Product.quantity > 1) {
      Product.quantity--;
    } else {
      // Si la cantidad que queda es 1, elimina el producto del carrito
      this.products = this.products.filter((p) => p.ID !== ID);
    }
    localStorage.setItem("cart", JSON.stringify(this));
    localStorage.setItem("database", JSON.stringify(database));

    RenderizarProductos(this);
    RenderizarCarrito(this);
  }

  EndShopSpree() {
    alert(`Consumiste ${this.subtotal} con tu compra`);
    this.products = [];
    this.subtotal = 0;

    localStorage.removeItem('cart');
    RenderizarCarrito(this);
    location.reload();
  }
}

/* Clase product, para los productos */
class Product {
  static currentID = 0;

  constructor({ price, stock = 0, name, description, image }) {
    this.ID = Product.currentID;
    this.price = price;
    this.stock = stock;
    this.name = name;
    this.description = description;
    this.image = image;

    Product.currentID++;
  }

  // Metodo para actualizar el stock(aumentar,disminuir), queda nullificado porque en el metodo update se puede hacer
  /*updateStock(operator, amount) {
    const Stock = eval(`${this.stock} ${operator} ${amount}`);
    this.stock = Stock > 0 ? Stock : 0;
    return this.stock;
  }*/

  // Metodo para modificar el producto
  update({
    price,
    stock,
    name = this.name,
    description = this.description,
    image = this.image,
  }) {
    // "??" nullish operator, si el de la izquierda es null o undefined, asigna el valor de la derecha, si no, asigna el valor de la izquierda
    this.price = price ?? this.price;
    this.stock = stock ?? this.stock;
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

const Pikachu = new Product({
  price: 500,
  stock: 50,
  name: "Pikachu",
  description: "pika pika",
  image:
    "https://i.pinimg.com/550x/dd/20/84/dd208480c6937eb68a91f73df5ca904a.jpg",
});

const Charmander = new Product({
  price: 900,
  stock: 25,
  name: "Charmander",
  description: "Se prendio todo",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
});

const Charizard = new Product({
  price: 900,
  stock: 25,
  name: "Charizard",
  description: "Se prendio todo, pero mas grande",
  image:
    "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/1200px-Charizard.png",
});

const dbExistente = localStorage.getItem("database");

const database = dbExistente
  ? new Database(JSON.parse(dbExistente))
  : new Database({});

if (!dbExistente) {
  database.addProduct(Pikachu, Charmander, Charizard);
}
