// const parrafo = document.getElementById("parrafo-dos-section");
// console.log(parrafo);

// const parrafos = document.getElementsByTagName("p");
// console.log(parrafos);

// parrafos[2].innerHTML = "Un <strong>texto</strong>...";

// const primerParrafo = document.getElementsByClassName("primer-parrafo");
// console.log(primerParrafo);

// const sections = document.getElementsByTagName("section");
// console.log(sections);

// ---

// const parrafosDestacados = document.querySelectorAll("p.destacado");
// console.log(parrafosDestacados);

// const unParrafo = document.querySelector("p.destacado#ultimo-elemento");
// console.log(unParrafo);

// const unElemento = document.querySelector(
//   "section:nth-child(2) > p:nth-child(3)"
// );

// document.querySelector("main section:nth-child(4) > p:nth-child(3)");

// ---

// const section = document.querySelector("#tercer-seccion");

// const h2 = document.createElement("h2");

// const textoH2 = document.createTextNode("Sección 3");
// h2.append(textoH2);

// // h2.textContent = "Sección 3";

// section.appendChild(h2);

// section.innerHTML = `
//     <h2>Sección 3</h2>
//     <p>Lorem ...</p>
// `;

// section.style.color = "orange";

// section.classList.add("section-destacada");

const img = document.querySelector("img");

img.src = "img/plumber.jpg";
img.alt = "Plomero";
img.width = "100";

// // img.remove();

img.style.display = "none";

// ---

const header = document.querySelector("header");

// header.onclick = function () {
//   alert("Click en function 1");
// };

// header.onclick = function () {
//   alert("Click en function 2");
// };

// header.addEventListener("click", () => {
//   alert("Click en function 1");
// });

// header.addEventListener("click", () => {
//   alert("Click en function 2");
// });

header.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  h1.textContent = "Click en header";

  img.style.display = "block";
});
