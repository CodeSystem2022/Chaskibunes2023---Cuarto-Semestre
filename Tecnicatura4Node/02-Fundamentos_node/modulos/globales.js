// this === global = true

// Mostrar algo en consola
// console.log();

// //Mostrar un mensaje en forma de erro
// console.error();

// //Ejecutar un código después de un intervalo de tiempo
// setTimeout(() => {});

// //Ejecutar un código cada intervalo de tiempo
// setInterval(() => {});

// //Da prioridad de ejecución a una función asincronica
// setImmdiate(() => {});

// console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if(i === 3){
        clearInterval(intervalo); //detenemos la función
    }
    i++; 
}, 1000);

setImmediate(() => {
    console.log('Saludo inmediato')
});

// require();

console.log(__filname);

globalThis.miVariable = 'mi variable global';
console.log(miVariable)