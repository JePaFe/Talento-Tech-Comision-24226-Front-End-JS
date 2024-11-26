const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 3, nombre: "Producto 3", precio: 150 },
  { id: 6, nombre: "Producto 6", precio: 300 },
  { id: 7, nombre: "Producto 7", precio: 350 },
];

// const conMasValor = productos.filter(producto => producto.precio >= 300)
// console.log(conMasValor)

// const producto = productos.find((producto) => producto.id == 3);
// console.log(producto);

// console.log(productos[1].nombre)

productos.forEach((producto) =>
  console.log(`El ${producto.nombre} tiene un precio $ ${producto.precio}`)
);
