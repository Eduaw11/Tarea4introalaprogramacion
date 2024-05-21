let array_numeros = [];
let cantidad_de_numeros = parseInt(
  prompt("Ingrese la cantidad de numeros para el Array")
);
for (let i = 1; i <= cantidad_de_numeros; i++) {
  let pedir_numero = prompt("Ingrese numero entero #" + i);
  while (isNaN(pedir_numero)) {
    pedir_numero = prompt(
      "El texto ingresado no es un numero. vuelve a intentarlo. ingreso #" + i
    );
  }
  array_numeros.push(Number(pedir_numero));
}
array_numeros.sort((a, b) => a - b);
alert(
  "El Numero menor es: " +
    array_numeros[0] +
    "\n" +
    "El Numero mayor es: " +
    array_numeros[array_numeros.length - 1]
);
