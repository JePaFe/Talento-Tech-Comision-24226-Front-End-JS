// const edad = Number(prompt("Ingrese su edad:"));
// const vip = prompt("Si es VIP ingrese su codigo:");
// const codigo_vip = 123;

// // function edad_acceso(edad) {
// //   edad = Number(edad);

// //   if (isNaN(edad)) {
// //     return alert("Ingrese un número válido");
// //   }

// //   if (edad >= 18) {
// //     console.log("Acceso permitido");
// //   } else {
// //     console.log("Acceso denegado");
// //   }
// // }

// // edad_acceso(edad);

// function acceso_vip(vip, edad, codigo_vip) {
//   vip = Number(vip);
//   edad = Number(edad);
//   codigo_vip = Number(codigo_vip);

//   if (edad >= 18 && vip === codigo_vip) {
//     console.log("Es miembro VIP");
//   } else {
//     console.log("No es miembro VIP");
//   }
// }

// acceso_vip(vip, edad, codigo_vip);

// // if (vip === codigo_vip){
// //     console.log("Es miembro VIP");
// // } else {
// //     console.log("No es miembro VIP");
// // }

//---------------------------------------------------------------------------------------

// const edad = prompt("Ingrese su edad:");
// const vip = prompt("Si es VIP ingrese su codigo:");
// const codigo_vip = 123;

// function edad_acceso(edad) {
//   edad = Number(edad);
//   if (edad >= 18) {
//     console.log("Acceso permitido");
//   } else {
//     console.log("Acceso denegado");
//   }
// }

// function acceso_vip(vip, edad, codigo_vip) {
//   vip = Number(vip);
//   edad = Number(edad);
//   codigo_vip = Number(codigo_vip);

//   if (edad >= 18 && vip === codigo_vip) {
//     console.log("Es miembro VIP");
//   } else {
//     console.log("No es miembro VIP");
//   }
// }

// edad_acceso(edad);
// acceso_vip( vip, edad, codigo_vip);

// // if (vip === codigo_vip){
// //     console.log("Es miembro VIP");
// // } else {
// //     console.log("No es miembro VIP");
// // }

//---------------------------------------------------------------------------------------

function sumar(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  // num1 = Number(num1);
  // num2 = Number(num2);
  console.log("La suma es:", num1 + num2);

  const result = num1 + num2;

  return result;
}

function resta(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  // num1 = Number(num1);
  // num2 = Number(num2);
  console.log("La resta es:", num1 - num2);
}

function multiplicar(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  // num1 = Number(num1);
  // num2 = Number(num2);
  console.log("La multiplicación da:", num1 * num2);
}

function dividir(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  // num1 = Number(num1);
  // num2 = Number(num2);
  console.log("La división da:", num1 / num2);
}

//                      4       2       3
function valorMayor(numero1, numero2, numero3) {
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  numero3 = parseInt(numero3);

  const suma = sumar(numero1, numero2);
  //   const suma = numero1 + numero2;

  if (numero3 > suma) {
    console.log("El valor dado es mayor que la suma");
  } else {
    console.log("El valor dado es menor que la suma");
  }
}

const numero1 = prompt("Numero 1:");
const numero2 = prompt("Numero 2:");
const numero3 = 6;

sumar(numero1, numero2);
resta(numero1, numero2);
multiplicar(numero1, numero2);
dividir(numero1, numero2);
valorMayor(numero1, numero2, numero3);
