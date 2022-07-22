const userInput = document.querySelector("#userNameInput");
const passwordInput = document.querySelector("#passwordInput");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", (e) => {
  const checkUsers = JSON.parse(localStorage.getItem("Users"))
  const user = {
    user: userInput.value,
    pass: passwordInput.value,
  };

  if(registeredUsers == []){
    checkUsers.forEach((p) => {
      if (user.user == p.userName) {
        if (user.pass == p.password) {
          alert("Iniciaste sesion!");
          window.location.replace("home.html");
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("Usuario no registrado");
      }
    });
  }else{
    alert("Error")
  }

});
