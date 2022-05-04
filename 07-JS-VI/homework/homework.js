// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
var mayuscula = nombre[0].toUpperCase() + nombre.slice(1);
return mayuscula
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
cb ()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
return cb (n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:// ver function reduce
var suma = 0;
for (var i = 0; i < numeros.length; i++){
suma = suma + numeros[i]
  }
  cb(suma)
}
//var sumaTotal = numeros.reduce(function(acc, curr) {
    //return acc + curr; --> significa acumulador + valor actual
//  },0); --- > cual era el valor inicial
//  cb(sumaTotal); ---> lo que debe retornar


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
array.forEach(function (elementos){
cb(elementos)
});

}
//foreach no devuelve nada, solo lo imprime en la consola lo que recorre de un arreglo
//ej: creo const canciones
// const canciones = [ blablabl];
// hago --> canciones.forEach(function(cancion) { para ver que hay dentro de ellas, en estos casos cancion, elementos son palabras x
//podrian ser tranquilamente esas u otras siempre que no sean reservadas dado que crea como una nueva variable

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
var arrayNuevo = []
arrayNuevo = array.map(function (e){
return cb(e)
})
return arrayNuevo
}


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
var filtrados = array.filter (function (e){
return e[0] === "a"
})
return filtrados
}

// filtra elementos

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
