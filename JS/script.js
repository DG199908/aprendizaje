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

function text () {
  console.log("prueba");
}

function testign () {
  console.log("prueba3");
}

function test () {
  console.log("prueba2");
}

const login = (email, password) => {
  if (email && password) {
    console.log('Aqui deberia de ejecutar la funcion que da la bienvenida');
    return;
  }
  console.log('Aqui deberia de ejecutar la funcion de error de credenciales');
}