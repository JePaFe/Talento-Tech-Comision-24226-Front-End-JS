// fetch("./posts.json")
//   .then((response) => response.json())
//   .then((posts) => {
//     const section = document.querySelector("section");

//     section.innerHTML = "";

//     posts["ofertas"].forEach((post) => {
//       const html = `
//             <article>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//                 <img src="./img/${post.image}" width="200" alt="${post.title}">
//             </article>
//         `;

//       section.innerHTML += html;
//     });

//     posts["novedades"].forEach((post) => {
//       const html = `
//               <article>
//                   <h2>${post.title}</h2>
//                   <p>${post.body}</p>
//                   <img src="./img/${post.image}" width="200" alt="${post.title}">
//               </article>
//           `;

//       section.innerHTML += html;
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("./nav.text")
//   .then((res) => res.text())
//   .then((txt) => {
//     document.write(txt);
//   });

const leerTexto = async () => {
  try {
    const response = await fetch("./nav.text");
    const texto = await response.text();

    document.write(texto);
  } catch (error) {
    console.log("Fallo:", error);
  }
};

leerTexto();
