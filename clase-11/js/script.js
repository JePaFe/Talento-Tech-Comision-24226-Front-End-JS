// function saludar() {
//   console.log("Hola");
// }

// saludar()

// const IVA = 18;

// let edad = prompt("Ingrese su edad: ");
// edad = parseInt(edad);

// const edad = parseInt(prompt("Ingrese su edad: "));

// if (edad >= 13) {
//   console.log("Puede registrarse");
// } else {
//   console.log("No puede registrarse");
// }

// console.log(typeof edad);

// Mil lineas después

// const old = prompt("Ingrese sus edad");

// if (edad >= 18) {
//   console.log("Puede ingresar");
// } else {
//   console.log("No puede ingresar");
// }

// function puede() {
//   const edad = parseInt(prompt("Ingrese su edad: "));

//   if (edad >= 13) {
//     console.log("Puede registrarse");
//   } else {
//     console.log("No puede registrarse");
//   }
// }

// puede();

// Parámetros

function saludar(nombre) {
  console.log("Hola " + nombre);
}

// saludar("Juan");
// saludar("Maria");

// function sumar(num1, num2) {
//   num1 = Number(num1);
//   num2 = Number(num2);
//   console.log("La suma es:", num1 + num2);
// }

// debugger;
// const numero1 = prompt("Numero 1:");
// const numero2 = prompt("Numero 2:");

// sumar(numero1, numero2);
// sumar(6, 5);
// sumar(-4, 5);

// sumar("Hola", 1);

// Retorno

// function sumar(num1, num2, donde = "log") {
//   if (donde == "log") {
//     console.log("La suma es:", num1 + num2);
//   } else {
//     alert("La suma es:", num1 + num2);
//   }
// }

// function sumarLog(num1, num2) {
//   num1 = Number(num1);
//   num2 = Number(num2);
//   console.log("La suma es:", num1 + num2);
// }

// function sumarAlert(num1, num2) {
//   num1 = Number(num1);
//   num2 = Number(num2);
//   alert("La suma es:", num1 + num2);
// }

function sumar(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  const suma = num1 + num2;

  return suma;
}

const suma = sumar(4, 7);

console.log("El resultado es: " + suma);
