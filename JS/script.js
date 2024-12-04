const nombre = "Diego";

function saludar(nombre) {
  console.log("hola" + nombre);
}

const saludar2 = (nombre) => {
  console.log("hola" + nombre);
}

function welcomeToTheApp() {
  console.log("bienvenido a el sistema");
}

function text() {
  console.log("prueba");
}

function testign() {
  console.log("prueba3");
}

function test() {
  console.log("prueba2");
}

function correctPull() {
  console.log('Este es un pull correcto');
}

const login = (email, password) => {
  if (email && password) {
    console.log('Aqui deberia de ejecutar la funcion que da la bienvenida');
    return;
  }
  console.log('Aqui deberia de ejecutar la funcion de error de credenciales');
}

const registro = (name,email,password) => {
  if (name && email && password) {
    console.log('se creo el usuario con exito');
  } else {
    console.log('Faltan campos por rellenar');
  }
}