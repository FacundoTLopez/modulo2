class Userdb {
  constructor({ users = [] }) {
    this.users = users;
  }

  addUser(user) {
    this.users.push(user);
    localStorage.setItem("userdatabase", JSON.stringify(this));
  }
}

class Cardsdb {
  constructor({ cards = [] }) {
    this.cards = cards;
  }

  addCard(...Game) {
    this.cards.push(...Game);
    localStorage.setItem("Gamesdatabase", JSON.stringify(this));
  }
}

class Users {
  constructor({ username, password }) {
    (this.username = username), (this.password = password);
  }
}

const userDbExistente = localStorage.getItem("userdatabase");

const userDatabase = userDbExistente
  ? new Userdb(JSON.parse(userDbExistente))
  : new Userdb({});

class Games {
  constructor({ img, name, dlc = [], link }) {
    (this.img = img), (this.name = name), (this.dlc = dlc), (this.link = link);
  }
}

const CardsDbExistente = localStorage.getItem("Gamesdatabase");

const CardsDatabase = CardsDbExistente
  ? new Cardsdb(JSON.parse(CardsDbExistente))
  : new Cardsdb({});


const DAOrigins = new Games({
  img: "src/img/DAO-cover.jpg",
  name: "Dragon Age: Origins",
  dlc: ["The awakening", "Golems Of Amgarrak", "Witch Hunt"],
  link: "https://www.origin.com/arg/es-es/store/dragon-age/dragon-age-origins",
});
const DA2 = new Games({
  img: "src/img/DA2-cover.jpg",
  name: "Dragon Age: 2",
  dlc: ["Legacy", "Mark of the Assassin", ],
  link: "https://www.origin.com/arg/es-es/store/dragon-age/dragon-age-ii",
});
const DAInquisition = new Games({
  img: "src/img/DAI-cover.jpg",
  name: "Dragon Age: Inquisition",
  dlc: ["The Trespasser"],
  link: "https://www.origin.com/arg/es-es/store/dragon-age/dragon-age-inquisition",
});

if (!CardsDbExistente) {
  CardsDatabase.addCard(DAOrigins, DA2, DAInquisition);
}

