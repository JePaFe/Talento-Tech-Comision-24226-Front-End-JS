let productos = [];

const cargarProductos = async () => {
  try {
    const response = await fetch("../productos.json");
    productos = await response.json();

    // console.log(productos);
    mostrarProductos();
  } catch (error) {
    console.error(error);
  }
};

const mostrarProductos = () => {
  const listadoProductos = document.querySelector(".listado-productos");

  listadoProductos.innerHTML = "<h2>Productos</h2>";

  // Recorro el array de productos
  productos.forEach((producto) => {
    // Creo el HTML con los datos de cada producto

    // const button = document.createElement("button");
    // button.classList.add('class')
    // button.onclick = () => {};

    const html = `
        <article data-id="${producto.id}" data-nombre="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <img src="./img/${producto.imagen}" alt="${producto.nombre}" />
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <a href="detalle.html?id=${producto.id}">Detalle</a>
          <button type="button" class="btn-agregar">Agregar</button>
        </article>
    `;

    // Agrego la section el html para ir mostrando cada producto
    listadoProductos.innerHTML += html;
  });
};

// Obtengo el item 'carrito' del local storage que es un texto
// Lo intento transformar a un Objeto de javaScript
// Si algo falla asigno un array a la constante, sino el Objeto
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Escucho todos los eventos click el documento
document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'agregar'
  if (event.target.classList.contains("btn-agregar")) {
    // Busco el contenedor mas cercano que se un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    const index = carrito.findIndex((item) => item.id == id);

    if (index == -1) {
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      const elemento = productos.find((producto) => producto.id == id);
      console.log(elemento);

      // Uso destructuring para creo las constante con los valores del Objeto
      const { nombre, precio } = elemento;

      // Creo el objeto producto para insertar en el carrito
      const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      };

      // let { cantidad } = producto;
      // console.log(cantidad);

      carrito.push(producto);
    } else {
      const producto = carrito[index];
      producto.cantidad++;
    }

    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});
