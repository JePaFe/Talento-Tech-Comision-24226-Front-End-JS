// localStorage.setItem("nombre", "Pedro");

// localStorage.removeItem("carrito");

// localStorage.clear();

// const nombre = localStorage.getItem("nombre");
// console.log(nombre);

// ---

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción Producto 1",
    imagen: "imagen-1.jpg",
    precio: 10,
    stock: 1,
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción Producto 2",
    imagen: "imagen-2.jpg",
    precio: 20,
    stock: 10,
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Descripción Producto 3",
    imagen: "imagen-3.jpg",
    precio: 30,
    stock: 80,
  },
];

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(carrito, typeof carrito);

const { id, nombre, precio } = productos[1];
// console.log(id, nombre, precio)

const producto = {
  id: id,
  nombre: nombre,
  precio: precio,
  cantidad: 1,
};

console.log(producto);

carrito.push(producto);
console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito));
