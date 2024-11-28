carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
  const html = `
        <tr data-id="${item.id}">
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$ ${item.precio}</td>
        </tr>
    `;

  items.innerHTML += html;
});
