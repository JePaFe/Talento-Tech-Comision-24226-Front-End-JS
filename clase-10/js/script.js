// const EDAD_MAYOR = 18;
// const EDAD_ADOLESCENTE = 13;
// const EDAD_MENOR = 2;

// let edad = 5;

// if (edad >= EDAD_MAYOR) {
//   console.log("Es adulto");
// } else if (edad >= EDAD_ADOLESCENTE) {
//   console.log("Es adolescente");
// } else if (edad >= EDAD_MENOR) {
//   console.log("Es menor");
// } else {
//   console.log("Es bebe");
// }

// Operadores comparación

const num1 = 3;
const num2 = 3;

const letras1 = "abrir";
const letras2 = "cerrar";

// console.log(num1 == num2);
// console.log(num1 === num2);

// console.log(num1 >= num2);

// console.log(letras1 < letras2);

// console.log(num1 != num2);
// console.log(num1 !== num2);

// Operadores lógicos

const prod1 = 5;
const prod2 = 3;
const tarjeta = "Mastercard";
const nuevo = false;

// if (prod1 >= 3 && prod2 >= 2 && tarjeta == "visa") {
//   console.log("Descuento");
// }

// if (prod1 >= 3 || tarjeta == "visa") {
//   console.log("Descuento");
// }

// if (nuevo) {
//   console.log("Bienvenida");
// }

// if (!nuevo) {
//   console.log("Gracias por volver");
// }

// if (false) {
// } else {
//   console.log("Else");
// }

// Incremento

// let num3 = 1
// console.log(num3)

// // num3 = num3 + 1
// num3 += 3
// console.log(num3)

// num3++
// console.log(num3)

// console.log(num3++)
// console.log(num3)

// console.log(++num3)

// Ternario

const edad = 13;

// let mensaje;

// if (edad >= 13) {
//   mensaje = "Se puede registrar";
// } else {
//   mensaje = "No se puede registrar";
// }

// let mensaje = edad >= 13 ? "Se puede registrar" : "No se puede registrar";

// console.log(mensaje);

// switch

const color = "rojo";

switch (color) {
  case "verde":
    console.log("Avanzar");
    break;
  case "amarillo":
    console.log("Precaución");
    break;
  case "rojo":
    console.log("Detener");
    break;
  default:
    console.log("No reconozco el color");
}
