var input = prompt("Nombre de Usuario");
if (input === "Admin") {
  var password = prompt("Contraseña");
  if (password === "Jedi") {
    alert("Que la fuerza te acompañe");
  } else if (!password) {
    alert("cancelado");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (!input) {
  alert("cancelado");
} else {
  alert("No te conozco");
}
