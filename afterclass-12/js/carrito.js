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
            <td>$ ${item.cantidad * item.precio}</td>
            <td><i>X</i></td>
        </tr>
    `;

  items.innerHTML += html;
});

