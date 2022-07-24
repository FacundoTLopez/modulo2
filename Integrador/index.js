class Userdb {
  constructor({ users = [] }) {
    this.users = users;
  }

  addUser(user) {
    this.users.push(user);
    localStorage.setItem("userdatabase", JSON.stringify(this));
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

// if (!userDbExistente) {
//   userDatabase.addProduct(Pikachu, Charmander, Charizard);
// }
  