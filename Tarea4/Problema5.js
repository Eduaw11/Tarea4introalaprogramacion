let plato1 = prompt("Ingrese el valor de el plato 1");
let plato2 = prompt("Ingrese el valor de el plato 2");
let plato3 = prompt("Ingrese el valor de el plato 3");
let impuesto = prompt("Ingrese Impuesto Ingrese un numero entero (15 → 15%)");
let totalPlatos = parseFloat(plato1) + parseFloat(plato2) + parseFloat(plato3);
let calculoDeImpuesto = (parseInt(impuesto) / 100) * totalPlatos;
let totalFactura = totalPlatos + calculoDeImpuesto;
alert(
  "El total de los platos es: " +
    totalPlatos.toFixed(2) +
    "\n" +
    "El total de el impuesto es: " +
    calculoDeImpuesto.toFixed(2) +
    "\n" +
    "El total de su factura es: " +
    totalFactura.toFixed(2)
);
