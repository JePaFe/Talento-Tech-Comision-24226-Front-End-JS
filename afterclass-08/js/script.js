let numero1 = prompt("Ingrese un numero1: ");
numero1 = parseInt(numero1)
console.log("Numero1:", numero1);

let numero2 = prompt("Ingrese un numero2: ");
numero2 = parseInt(numero2)
console.log("Numero2:", numero2);

suma = numero1 + numero2;
console.log("Suma:", suma);
// let numero1 = prompt("Ingrese un numero1: "); // '1'
// numero1 = parseInt(numero1); // 1
// console.log("Numero1:", numero1);
// // debugger
// let numero2 = prompt("Ingrese un numero2: ");
// numero2 = parseInt(numero2);

// const suma = numero1 + numero2;
// console.log("Suma:", suma);

let nombre = prompt("Ingrese su nombre: ");
document.write("<p>Hola " + nombre + "</p>");

let edad = prompt("Ingrese su edad: ");
edad = parseInt(edad);
//NO FUNCIONA
if (edad >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}
