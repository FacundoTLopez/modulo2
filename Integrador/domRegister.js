const newUserInput = document.querySelector("#userNameInput");
const newPasswordInput = document.querySelector("#passwordInput");
const button = document.querySelector("#submitButton");

submitButton.addEventListener("click", (e) => {
  const checkUsers = JSON.parse(localStorage.getItem("Users"));
  const user = {
    user: newUserInput.value,
    pass: newPasswordInput.value,
  };
  if (registeredUsers.length > 0) {
    checkUsers.forEach((p) => {
      if (user.user == p.userName) {
        alert("Ese nombre de usuario ya existe");
      } else {
        const newUser = {
          userName: newUserInput.value,
          password: newPasswordInput.value,
        };
        addUser(newUser);
        alert("Bienvenido!");
        window.location.replace("home.html");
      }
    });
  } else {
    const newUser = {
      userName: newUserInput.value,
      password: newPasswordInput.value,
    };
    addUser(newUser);
    alert("Bienvenido!");
    window.location.replace("home.html");
  }
});
