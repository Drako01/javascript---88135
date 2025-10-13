// console.log("Hola mundo")
// console.log("Hola Coders")
/*
var primerVariable = "Hola"; // Creamos la Variable
primerVariable = "Coders"; // Reasignamos su valor

console.log(primerVariable)
var primerVariable = "Palabra";

console.log(primerVariable) // Creo otra nueva variable
*/

let primerVariable = "Hola"; // Creamos la Variable
primerVariable = "Coders"; // Reasignamos su valor
primerVariable = "Bienvenidos";

// console.log(primerVariable);

let segundaVariable = "Palabra"; // String
// Reasignaciones de Variables
segundaVariable = 1; // Number
segundaVariable = true; // Boolean
segundaVariable = 's'; // Caracter
segundaVariable = "Texto completo"; // String
segundaVariable = {
    objeto: 1
}; // Objeto 
segundaVariable = [1,2,3] // Array
segundaVariable = "Texto final"; 
segundaVariable = "Coders al curso de JavaScript"; 
// console.log(segundaVariable);

// Averiguar que tipo de variable estoy asignado

// console.log( typeof segundaVariable);

// Concatenar texto
// console.log("Hola, "+ primerVariable + " " + segundaVariable); // Lo que se imprime es un String


// Operaciones Matematicas
// let numeroA = 123;
// let numeroB = 56;

// console.log(numeroA + numeroB); // Se suma, porque interpreta que esta sumando dos numeros

// let numeroIngresado = prompt("Ingrese un numero");
// console.log("El numero que Ud ingreso es el "+ numeroIngresado);

// alert("El numero que Ud ingreso es el "+ numeroIngresado);

// let confimacion = confirm("¿Esta seguro que dese Eliminar al Usuario?"); // Guarda un Boolean
// console.log("El usuario decidio " + confimacion);


// Simulacion de Calculadora

// Usamos Parseo de Datos -> Convierte un tipo de dato en otro (Siempre y cuando se pueda)
let numeroA = parseInt(prompt("Ingrese un numero")); // Siempre Siempre guarda como String
let numeroB = parseInt(prompt("Ingrese un segundo numero"));

let resultado = numeroA + numeroB;
console.log(resultado);
console.log(numeroA + numeroB); // Concateno
console.log(typeof numeroA);
console.log(typeof numeroB);
console.log(typeof resultado);

alert(resultado);