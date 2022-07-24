const userInput = document.querySelector("#userNameInput");
const passwordInput = document.querySelector("#passwordInput");
const submitButton = document.querySelector("#submitButton");



submitButton.addEventListener("click", async (e) => {
  const user = {
    username: userInput.value,
    password: passwordInput.value,
  };

  try {
    const findUser = userDatabase.users.find(
      (p) => p.username === user.username
    );
    if(findUser){
      if(user.password === findUser.password){
        alert("Bienvenido!")
        window.location.replace("home.html")
      }else{
        alert("Contraseña incorrecta")
      }
    }else{
      alert("Ese nombre de usuario no existe")
    }

  } catch (error) {
    console.log(error)
  }
});


// userDatabase.users.forEach((p) => {
//   if (user.user == p.userName) {
//     if (user.pass == p.password) {
//       alert("Iniciaste sesion!");
//       window.location.replace("home.html");
//     } else {
//       alert("Contraseña incorrecta");
//     }
//   } else {
//     alert("Usuario no registrado");
//   }
// });
