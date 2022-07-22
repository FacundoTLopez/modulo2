class Userdb {
  constructor({ users = [] }) {
    this.users = users;
  }

  addUser(user) {
    this.users.push(user);
    localStorage.setItem("userdatabase", JSON.stringify(this));
  }
}

const userDbExistente = localStorage.getItem("database");

const userDatabase = userDbExistente
  ? new Userdb(JSON.parse(dbExistente))
  : new Userdb({});

if (!userDbExistente) {
  userDatabase.addProduct(Pikachu, Charmander, Charizard);
}
