const newUserInput = document.querySelector("#userNameInput");
const newPasswordInput = document.querySelector("#passwordInput");
const button = document.querySelector("#submitButton");

submitButton.addEventListener("click", (e) => {
  const user = new Users({
    username: newUserInput.value,
    password: newPasswordInput.value,
  });
  const findUser = userDatabase.users.find((p) => p.username === user.username);
  if (findUser) {
    alert("Ese nombre de usuario ya existe");
  } else {
    userDatabase.addUser(user);
    alert("Ahora estas registrado, por favor inicia sesion");
    window.location.replace("index.html");
  }
});
