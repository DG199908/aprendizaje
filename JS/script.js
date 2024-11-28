const nombre = "Diego";

function saludar (nombre) {
  console.log("hola" + nombre);
}

const saludar2 = (nombre) => {
  console.log("hola" + nombre);
}

function welcomeToTheApp () {
  console.log("bienvenido a el sistema");
}

const login = (email, password) => {
  if (email && password) {
    console.log('Aqui deberia de ejecutar la funcion que da la bienvenida');
    return;
  }
  console.log('Aqui deberia de ejecutar la funcion de error de credenciales');
}