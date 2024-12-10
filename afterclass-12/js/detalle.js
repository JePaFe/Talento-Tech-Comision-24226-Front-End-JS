const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");

let productos = [];

const cargarProductos = async () => {
  try {
    const response = await fetch("../productos.json");
    productos = await response.json();

    console.log(productos, id);
  } catch (error) {
    console.error(error);
  }
};

cargarProductos();
