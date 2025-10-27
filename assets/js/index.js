// Funciones

// const numeroA = 1;
// const numeroB = 2;

// const resultado = numeroA + numeroB;

// console.log("Felicitaciones el resultado es: "+resultado);

// const numeroC = 10;
// const numeroD = 25;

// const resultado1 = numeroC + numeroD;

// console.log("Felicitaciones el resultado es: "+resultado1);

// const numeroE = 100;
// const numeroF = 205;

// const resultado2 = numeroE + numeroF;

// console.log("Felicitaciones el resultado es: "+resultado2);

// Declaramos la funcion
// Declara la variable GLOBAL resultado
// let resultado = 0;

// function sumarDosNumerosProporcionadosPorElUsuario() {
//     const numeroA = parseFloat(prompt("Ingrese un numero A"));
//     const numeroB = parseFloat(prompt("Ingrese un numero B"));
//     //const resultado = numeroA + numeroB; // En este momento la variable/constante resultado es local
//     resultado = numeroA + numeroB; // Reasignacion dentro de la funcion
//     console.log("Felicitaciones el resultado es: "+resultado);
// }

// // Invocamos a la funcion las veces que se necesite
// sumarDosNumerosProporcionadosPorElUsuario(); 
// console.log("Felicitaciones el resultado de sumarDosNumerosProporcionadosPorElUsuario es: "+resultado);

// alert("Vamos de nuevo");

// sumarDosNumerosProporcionadosPorElUsuario(); 
// console.log("Felicitaciones el resultado de sumarDosNumerosProporcionadosPorElUsuario es: "+resultado);


// Declaramos las variables GLOBALES
// let resultado = 0;
// let numeroA = parseFloat(prompt("Ingrese un numero A"));
// let numeroB = parseFloat(prompt("Ingrese un numero B"));

// function sumarDosNumerosProporcionadosPorElUsuario(){
//     resultado = numeroA + numeroB;
//     console.log("Felicitaciones el resultado es: "+resultado);
// }
// function restarDosNumerosProporcionadosPorElUsuario(){
//     resultado = numeroA - numeroB;
//     console.log("Felicitaciones el resultado es: "+resultado);
// }
// function multiplicarDosNumerosProporcionadosPorElUsuario(){
//     resultado = numeroA * numeroB;
//     console.log("Felicitaciones el resultado es: "+resultado);
// }
// function dividirDosNumerosProporcionadosPorElUsuario(){
//     resultado = numeroA / numeroB;
//     if(numeroB !== 0) {
//         console.log("Felicitaciones el resultado es: "+resultado);
//     } else{
//         alert("No se puede dividir por 0")
//     }
// }
// sumarDosNumerosProporcionadosPorElUsuario();
// restarDosNumerosProporcionadosPorElUsuario();
// multiplicarDosNumerosProporcionadosPorElUsuario();
// dividirDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();


// Funciones usando Parametros
// Declaramos las variables GLOBALES
// let resultado = 0;
// let numeroA = parseFloat(prompt("Ingrese un numero A"));
// let numeroB = parseFloat(prompt("Ingrese un numero B"));

// function sumar(a, b) {
//     resultado = a + b;
//     console.log("Felicitaciones el resultado es: " + resultado);
// }
// function restar(a, b) {
//     resultado = a - b;
//     console.log("Felicitaciones el resultado es: " + resultado);
// }
// function multiplicar(a, b) {
//     resultado = a * b;
//     console.log("Felicitaciones el resultado es: " + resultado);
// }
// function dividir(a, b) {
//     resultado = a / b;
//     if (b !== 0) {
//         console.log("Felicitaciones el resultado es: " + resultado);
//     } else {
//         alert("No se puede dividir por 0")
//     }
// }

// // Al momento de la invocacion pasar los argumentos
// sumar(numeroA, numeroB);
// restar(numeroA, numeroB);
// multiplicar(numeroA, numeroB);
// dividir(numeroA, numeroB);


// Intentemos crear una Calculadora

// let numeroA = parseFloat(prompt("Ingrese un numero A"));
// let numeroB = parseFloat(prompt("Ingrese un numero B"));
// let operacion = prompt("Ingrese la operacion");

// function calcular(a, b, op) {
//     const msgError = "No se puede dividir por cero";
//     let resultado = 0;
//     switch (op) {
//         case "+":
//             resultado = a + b;
//             console.log("Felicitaciones el resultado de la suma es: " + resultado);
//             break;
//         case "-":
//             resultado = a - b;
//             console.log("Felicitaciones el resultado de la resta es: " + resultado);
//             break;
//         case "*":
//             resultado = a * b;
//             console.log("Felicitaciones el resultado de la multiplicacion es: " + resultado);
//             break;
//         case "/":
//             resultado = a / b;
//             if (b !== 0) {
//                 console.log("Felicitaciones el resultado de la division es: " + resultado);
//             } else {
//                 alert(msgError);
//                 console.error(msgError);
//             }
//             break;
//         default:
//             console.error("Error, Ingrese una Operacion valida");
//     }
// }

// calcular(numeroA, numeroB, operacion);


// Funciones Anonimas (Siempre guarden las funciones en const)

// const saludar = function(nombre){
//     return "Hola, " + nombre + ", como estas?"; // Retorna un String
// }

// const sumar = function(a,b){
//     return a + b; // Evito generar una nueva variable llamada resultado por ejemplo
// }

// console.log(saludar("Alejandro"))
// console.log(saludar("Blas"))
// console.log(sumar(12,55));

// // saludar = "Hola";

// console.log(saludar("Mariana"))

// Las funciones flecha tienen un return implicito, solo cuando se pasa
// un parametro y la funcion en si no es compleja

// Ejemplo:
// const saludar = (nombre) => "Hola, " + nombre;
// console.log(saludar("Alejandro"))
// const sumarOConcatenar = (a,b) => a + b;
// console.log(sumarOConcatenar("Hola", " mundo"));
// console.log(sumarOConcatenar(10, 55));

// Intentemos crear una Calculadora usando funcion flecha

// let numeroA = parseFloat(prompt("Ingrese un numero A"));
// let numeroB = parseFloat(prompt("Ingrese un numero B"));
// let operacion = prompt("Ingrese la operacion");

// const calcular = (a, b, op) =>{
//     switch(op){
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             if(b === 0){
//                 return "Error, no se puede dividir por cero";
//             } else {
//                 return a / b;
//             }
//         default:
//             return "Error, operacion invalida";
//     }
// }

// console.log(calcular(numeroA, numeroB, operacion));


// Hacemos lo mismo pero usando un do while


// const calcular = (a, b, op) => {
//     switch (op) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             if (b === 0) {
//                 return "Error, no se puede dividir por cero";
//             } else {
//                 return a / b;
//             }
//         default:
//             return "Error, operacion invalida";
//     }
// }
// let continuar;

// do {
//     let numeroA = parseFloat(prompt("Ingrese un numero A"));
//     let numeroB = parseFloat(prompt("Ingrese un numero B"));
//     let operacion = prompt("Ingrese la operacion");

//     alert(calcular(numeroA, numeroB, operacion));

//     continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
// } while (continuar === 'si')

// alert("Gracias por utilizar la Calculadora");




