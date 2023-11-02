// async trabaja independientemente de la funcion await

// La palabra async no es necesaria ya que las funcions son asincroinas

// de igual menrea proyectan una sincronia visual
async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola" + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    // Usamos la sintaxis ES6
    setTimeout(function () {
      console.log("bla bla bla bla");
      //resolve(nombre);
      reject("Hay un error");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}

// Solo es valiod dentro de una funbcion asincrona
//await hola('Ariel');

//await solo es valio dentro de una funcion asincrona
async function main() {
  let nombre = await hola("Ariel");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Termina el proceso...");
}

console.log("Empezamos el preoceso...");
main();
console.log("Esta va a ser la segunda instruccoón");

//MISMO CODIFO EN INGLES

async function sayHello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hello" + name);
      resolve(name);
    }, 1000);
  });
}

async function talk(name) {
  return new Promise((resolve, reject) => {
    //Usamos la sintaxis ES6
    setTimeout(function () {
      console.log("bla bla bla bla");
      resolve(name);
      reject("Hay un error");
    }, 1000);
  });
}

async function sayBye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + name);
      resolve();
    }, 1000);
  });
}

// Solo es valiod dentro de una funbcion asincrona
//await hola('Ariel');

//await solo es valio dentro de una funcion asincrona
async function conversation(name) {
  console.log("Code in English");
  console.log("Starting async process...");
  await sayHello(name);
  await talk();
  await talk();
  await talk();
  await sayBye(name);
  console.log("Process completed");
}

conversation("Ariel");
