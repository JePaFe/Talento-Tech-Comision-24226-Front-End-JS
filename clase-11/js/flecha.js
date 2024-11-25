// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

// const saludar = function (nombre) {
//   return `Hola ${nombre}`;
// }

// const saludar = nombre => `Hola ${nombre}`;

// let mensaje = saludar("Juan");
// console.log(mensaje);

// mensaje = saludar("Maria");
// console.log(mensaje);

// ---

// function sumar(a, b) {
//   const suma = a + b;
//   return suma;
// }

// const sumar = function (a, b) {
//   const suma = a + b;
//   return suma;
// };

// const sumar = (a, b) => {
//   const suma = a + b;
//   return suma;
// };

// const sumar = function (a, b) {
//   return a + b;
// };

const sumar = (a, b) => a + b;

let resultado = sumar(2, 5);
console.log(`La suma es: ${resultado}`);

resultado = sumar(-3, 8);
console.log(`La suma es: ${resultado}`);
