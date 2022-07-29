const cardContainer = document.querySelector("#second-subsection");

const formNameInput = document.querySelector("#form-name-input");
const linkToStore = document.querySelector("#link-to-store");
const imagePath = document.querySelector("#image-path");
const Button = document.querySelector("#game-add-button");
const form = document.querySelector("#add-game-form");
const filterForm = document.querySelector("#filter-form");
const filterName = document.querySelector("#input-name-filter");
const cleanFilter = document.querySelector("#clean-filter");

const loadCompleteList = () => {
  CardsDatabase.cards.map((p) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const coverImage = document.createElement("img");
    coverImage.classList.add("cover-image");
    coverImage.setAttribute("src", `${p.img}`);
    cardImage.appendChild(coverImage);

    const cardName = document.createElement("div");
    cardName.classList.add("card-name");
    const name = document.createElement("h3");
    const nameText = document.createTextNode(`${p.name}`);
    name.appendChild(nameText);
    cardName.appendChild(name);

    const cardDlc = document.createElement("div");
    cardDlc.classList.add("card-dlc");
    const cardDlcUl = document.createElement("ul");
    p.dlc.map((dlc) => {
      const li = document.createElement("li");
      const liText = document.createTextNode(`${dlc}`);
      li.appendChild(liText);
      cardDlcUl.appendChild(li);
    });
    cardDlc.appendChild(cardDlcUl);

    const linkDiv = document.createElement("div");
    linkDiv.classList.add("card-compra");
    const link = document.createElement("a");
    link.setAttribute("href", `${p.link}`);
    link.setAttribute("target", "_blank");
    const linkText = document.createTextNode("Mas info Aqui");
    link.appendChild(linkText);
    linkDiv.appendChild(link);

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardDlc);
    card.appendChild(linkDiv);
    cardContainer.appendChild(card);
  });
};

form.addEventListener("submit", (e) => {
  const card = CardsDatabase.cards.find((p) => p.name === formNameInput.value);

  if (card) {
    if (card.name === formNameInput.value) {
      alert("Ese juego ya esta en esta lista");
    }
  } else if (formNameInput.value.includes("Dragon Age:")) {
    const newGame = new Games({
      img: imagePath.value,
      name: formNameInput.value,
      link: linkToStore.value,
    });
    CardsDatabase.addCard(newGame);
  } else {
    e.preventDefault();
    alert("Ingresa un nombre valido");
  }
});

document.addEventListener("DOMContentLoaded", () => loadCompleteList());

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const filteredCard = CardsDatabase.cards.find(
    (p) => p.name === filterName.value
  );
  if (filteredCard) {
    cardContainer.innerHTML = "";

    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const coverImage = document.createElement("img");
    coverImage.classList.add("cover-image");
    coverImage.setAttribute("src", `${filteredCard.img}`);
    cardImage.appendChild(coverImage);

    const cardName = document.createElement("div");
    cardName.classList.add("card-name");
    const name = document.createElement("h3");
    const nameText = document.createTextNode(`${filteredCard.name}`);
    name.appendChild(nameText);
    cardName.appendChild(name);

    const cardDlc = document.createElement("div");
    cardDlc.classList.add("card-dlc");
    const cardDlcUl = document.createElement("ul");
    filteredCard.dlc.map((dlc) => {
      const li = document.createElement("li");
      const liText = document.createTextNode(`${dlc}`);
      li.appendChild(liText);
      cardDlcUl.appendChild(li);
    });
    cardDlc.appendChild(cardDlcUl);

    const linkDiv = document.createElement("div");
    linkDiv.classList.add("card-compra");
    const link = document.createElement("a");
    link.setAttribute("href", `${filteredCard.link}`);
    link.setAttribute("target", "_blank");
    const linkText = document.createTextNode("Mas info Aqui");
    link.appendChild(linkText);
    linkDiv.appendChild(link);

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardDlc);
    card.appendChild(linkDiv);
    cardContainer.appendChild(card);
  }
});

cleanFilter.addEventListener("click", () => {
  cardContainer.innerHTML="",
  filterName.value="";
  loadCompleteList()
});
