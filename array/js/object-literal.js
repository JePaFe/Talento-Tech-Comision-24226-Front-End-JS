const usuario = {
  nombre: "Juan",
  email: "juan@example.com",
};

usuario.email = "juan@x.com";
usuario.apellido = "Perez";

console.log(usuario.nombre);
console.log(usuario["apellido"])
