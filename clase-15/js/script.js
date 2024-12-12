const crearHTML = (item) => {
  const html = `
            <article data-id="${item.id}">
                <h3>${item.title}</h3>
                <img src="${item.image}" width="200" alt="${item.title}">
                <p>${item.description}</p>
                <p>$ ${item.price}</p>
                <button type="button">Agregar</button>
            </article>
        `;

  return html;
};

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((array) => {
//     console.log(array);
//     const listaProductos = document.querySelector("#lista-productos");
//     listaProductos.innerHTML = "";

//     array.forEach((item) => {
//       const elementos = crearHTML(item);
//       //   console.log(elementos);
//       listaProductos.innerHTML += elementos;
//     });
//   })
//   .catch((error) => console.error(error));

const mostrarProductos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const array = await response.json();

    console.log(array);
    const listaProductos = document.querySelector("#lista-productos");
    listaProductos.innerHTML = "";
    array.forEach((item) => {
      const elementos = crearHTML(item);
      //   console.log(elementos);
      listaProductos.innerHTML += elementos;
    });
  } catch (error) {
    console.error(error);
  }
};

mostrarProductos();
