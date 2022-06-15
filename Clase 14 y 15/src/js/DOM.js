const ProductList = document.getElementById("list-products");
const CartContainer = document.getElementById("cartWrapper");
const FinalPrice = document.getElementById("totalProducts");
const FinishButton = document.getElementById("finish");

const RenderizarCarrito = (carrito) => {
  while (CartContainer.firstChild) {
    CartContainer.removeChild(CartContainer.firstChild);
  }

  while (FinalPrice.firstChild) {
    FinalPrice.removeChild(FinalPrice.firstChild);
  }

  if (!carrito.products.length) {
    FinishButton.classList.add("disabled-button");
    FinishButton.setAttribute("disabled", true);
    FinishButton.textContent = "Tu carrito esta vacio";
  } else {
    FinishButton.classList.remove("disabled-button");
    FinishButton.removeAttribute("disabled");
    FinishButton.textContent = "Finalizar compra";
  }

  const FinalPriceText = document.createTextNode(carrito.subtotal);
  FinalPrice.appendChild(FinalPriceText);

  if (!carrito.products.length) {
    const msgCarritoVacio = document.createElement("div");
    msgCarritoVacio.classList.add("emptyProductsMessage");
    const msgCarritoVacioText = document.createTextNode(
      "No tienes productos seleccionados",
    );
    msgCarritoVacio.appendChild(msgCarritoVacioText);
    CartContainer.appendChild(msgCarritoVacio);
  }

  carrito.products.forEach((product) => {
    const DatabaseProduct = database.products.find((p) => p.ID === product.ID);

    const CartItem = document.createElement("div");
    CartItem.classList.add("cart-item");
    const CartItemContent = document.createElement("div");
    CartItemContent.classList.add("cart-item-content");
    const ItemPrice = document.createElement("div");

    const ProductName = document.createElement("span");
    const ProductNameText = document.createTextNode(DatabaseProduct.name);
    ProductName.appendChild(ProductNameText);

    const Price = document.createElement("span");
    const PriceText = document.createTextNode(
      `$${DatabaseProduct.price} x ${product.quantity}`,
    );
    Price.appendChild(PriceText);

    const containerButton = document.createElement("div");

    const botonDisminuir = document.createElement("button");
    const botonTextDisminuir = document.createTextNode("-");

    botonDisminuir.appendChild(botonTextDisminuir);

    botonDisminuir.addEventListener("click", (e) =>
      carrito.removeProduct(product.ID),
    );

    const botonAumentar = document.createElement("button");
    const botonTextAumentar = document.createTextNode("+");

    botonAumentar.appendChild(botonTextAumentar);

    botonAumentar.addEventListener("click", (e) =>
      carrito.addProduct(product.ID),
    );
    containerButton.appendChild(botonDisminuir);
    containerButton.appendChild(botonAumentar);

    // const Quantity = document.createElement("span");
    // const quantityText = document.createTextNode(`Cantidad : ${product.quantity}`);
    // Quantity.appendChild(quantityText);

    CartItemContent.appendChild(ProductName);
    // CartItemContent.appendChild(Quantity);

    ItemPrice.appendChild(Price);
    CartItem.appendChild(CartItemContent);
    CartItem.appendChild(ItemPrice);
    CartItem.appendChild(containerButton);

    CartContainer.appendChild(CartItem);
  });
};

const RenderizarProductos = (NewCart) => {
  while (ProductList.firstChild) {
    ProductList.removeChild(ProductList.firstChild);
  }

  database.products.forEach((product) => {
    const Item = document.createElement("li");

    const Image = document.createElement("img");
    Image.setAttribute("src", product.image);

    const Name = document.createElement("span");
    const Textname = document.createTextNode(product.name);
    Name.appendChild(Textname);

    const description = document.createElement("span");
    const Textdescription = document.createTextNode(product.description);
    description.appendChild(Textdescription);

    const Price = document.createElement("span");
    const Textprice = document.createTextNode(
      `$${product.price}- stock: ${product.stock}`,
    );
    Price.appendChild(Textprice);

    const Button = document.createElement("button");
    const Textbutton = document.createTextNode("Agregar al carrito");
    if (product.stock === 0) {
      Button.classList.add("disabled-button");
      Button.setAttribute("disabled", true);
      Textbutton.textContent = "No hay mas stock";
    }
    Button.appendChild(Textbutton);

    Button.addEventListener("click", (e) => {
      NewCart.addProduct(product.ID, 1);
      console.log(NewCart);
    });

    Item.appendChild(Image);
    Item.appendChild(Name);
    Item.appendChild(description);
    Item.appendChild(Price);
    Item.appendChild(Button);
    ProductList.appendChild(Item);
  });
};

document.addEventListener("DOMContentLoaded", (e) => {
  const CarritoExistente = localStorage.getItem("cart");

  const NewCart = CarritoExistente
    ? new Cart(JSON.parse(CarritoExistente))
    : new Cart({ ID: 1, owner: "" });
  localStorage.setItem("cart", JSON.stringify(NewCart));
  RenderizarCarrito(NewCart);
  RenderizarProductos(NewCart);

  FinishButton.addEventListener("click", (e) => {
    NewCart.EndShopSpree();
  });
});
