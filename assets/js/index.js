// console.log(verdadero);
// console.log(falso);

// Codicionales -> Son los que permiten que nuestro codigo tome decisiones
// Estructura if
// if(condicion) { // Solo permite ejecutar el bloque de codigo si es true
//     se ejecuta todo lo que esta aca adentro
// }

// if (verdadero){
//     console.log("El valor de verdad de verdadero es " + verdadero);
// }

// if (!falso) {
//     console.log("El valor de verdad de falso es " + falso);
// }

// let condicion = false;

// if (condicion){
//     console.log("El valor de verdad de condicion es " + condicion);
// } else {
//     console.log("El valor de verdad de condicion es " + condicion);
// }

// let stock = false;

// if (stock) {
//     console.log("Usted puede comprar");
// } else {
//     console.error("Error, no hay Stock");
// }

// let edad = parseInt(prompt("Ingrese su Edad (Sin mentir)"));
// const edadPermitida = 18;

// if (edad === edadPermitida) { // Estrictamente igual
//     console.log("Puede pasar, porque tiene " + edadPermitida)
// } else if (edad > edadPermitida) {
//     console.log("Pase sin problema")
// } else {
//     console.error("Usted es menor de edad, no puede pasar")
// }

// let numeroIngresado = parseInt(prompt("Ingrese un numero cualquiera"));

// // console.log(numeroIngresado)

// if ( numeroIngresado > 0 ) {
//     console.log("Usted ingreso un numero positivo")
// } else if( numeroIngresado < 0 ){
//     console.log("Usted ingreso un numero negativo");
// } else if ( numeroIngresado === 0 ) {
//     console.log("Usted ingreso el 0")
// } else if (isNaN(numeroIngresado)) {
//     console.warn("El valor ingresado no es un Numero")
// } else {
//     console.error("Error, Ud no ingreso nada")
// }

// let numeroA = 12;
// let numeroB = "12";

// if ( numeroA == numeroB ) { // Comparacion basica, comparo valor
//     console.log("El numeroA es: " + numeroA + ", El numeroB es: " 
//         + numeroB + ", entonces: Ambos numeros son 12")
// } else {
//     console.warn("Ojo, no son iguales")
// }

// if ( numeroA === numeroB ) { // Comparacion estricta, comparo valor y tipo de dato
//     console.log("El numeroA es: " + numeroA + ", El numeroB es: " 
//         + numeroB + ", entonces: Ambos numeros son 12")
// } else {
//     console.warn("Ojo, no son iguales")
// }

// let numeroA = 1;
// let numeroB = 10;

// let numeroIngresado = parseInt(prompt("Ingrese un numero cualquiera"));

// // Si el numero esta entre el numeroA y el numeroB
// if (numeroIngresado > numeroA && numeroIngresado < numeroB) {
//     console.log( "El numero ingresado esta entre A y B")
// } else {
//     console.warn("Usted ingreso " + numeroIngresado + ", no cumple con la condicion")
// }

// ------------------------------------------------------------------------

// let variable =  "Hola";

// Ciclos por condicion

// let nombreDelUsuario = prompt("Ingrese su nombre");

// while(nombreDelUsuario === '' || !isNaN(nombreDelUsuario)) {
//     alert("Ingrese un Nombre valido");
//     nombreDelUsuario = prompt("Ingrese su nombre");
// }
// console.log("El nombre del usuario es: " + nombreDelUsuario);

// let nombreDelUsuario;
// let validacion;

// do {
//     nombreDelUsuario = prompt("Ingrese su nombre");
//     validacion = nombreDelUsuario === '' || !isNaN(nombreDelUsuario) // Termina siendo Boolean

//     if(validacion){
//         alert("Ingrese un Nombre valido");
//     }
// } while(validacion);

// console.log("El nombre del usuario es: " + nombreDelUsuario);

// Ciclos por conteo

// Ciclo for
// for(let i = 0; i < 6; i++) {
//     if(i === 0 ){
//         console.log("Un mensaje que se esta ejecutando " + (i + 1) + " vez.!!");
//     } else {
//         console.log("Un mensaje que se esta ejecutando " + (i + 1) + " veces.!!");
//     }
// }

// let palabra = "Hola Coders"; // 11 Caracteres
// for(let i = 0; i < palabra.length; i++){ // Se ejecuto tantas veces como cantidad de caracteres tiene el String "palabra"
//     console.log("Palabra")
// }

// Tabla de Verdad (logica proposiocional)
// const V = true;
// const F = false;

// console.log("Tabla de Verdad del Operador && (Y)");
// console.log(V && V); // Si ambos son V => true
// console.log(V && F); // Si al menos uno de los valores es F => false
// console.log(F && V); // Si al menos uno de los valores es F => false
// console.log(F && F); // Si ambos de los valores son F => false


// console.log("Tabla de Verdad del Operador || (O)");
// console.log(V || V); // Si ambos son V => true
// console.log(V || F); // Si al menos uno de los valores es V => true
// console.log(F || V); // Si al menos uno de los valores es V => true
// console.log(F || F); // Si ambos de los valores son F => false

// console.log("Tabla de Verdad del Operador de Negación (!)");
// console.log(!V); // Si no es Verdadero => false
// console.log(!F); // Si no es False => true

// Pedir al usuario que ingrese su mes de nacimiento, y vamos a mostrar su signo zodiacal

// let mes; // Number
// let condition; // Boolean
// do{
//     mes = parseInt(prompt("Ingrese el mes de su nacimiento (1-12)"));
//     condition = isNaN(mes) || mes < 1 || mes > 12;
//     if(condition){
//         alert("Por favor, Ingrese un numero del 1 al 12")
//     }

// } while(condition);

// switch(mes) {
//     case 1:
//         console.log("Tu signo es Capricornio o Acuario");
//         break;
//     case 2:
//         console.log("Tu signo es Acuario o Pisis");
//         break;
//     case 3:
//         console.log("Tu signo es Pisis o Aries");
//         break;
//     case 4:
//         console.log("Tu signo es Aries o Tauro");
//         break;
//     case 5:
//         console.log("Tu signo es Tauro o Geminis");
//         break;
//     case 6:
//         console.log("Tu signo es Geminis o Cancer");
//         break;
//     case 7:
//         console.log("Tu signo es Cancer o Leo");
//         break;
//     case 8:
//         console.log("Tu signo es Leo o Virgo");
//         break;
//     case 9:
//         console.log("Tu signo es Virgo o Libra");
//         break;
//     case 10:
//         console.log("Tu signo es Libra o Escorpio");
//         break;
//     case 11:
//         console.log("Tu signo es Escorpio o Sagitario");
//         break;
//     case 12:
//         console.log("Tu signo es Sagitario o Capricornio");
//         break;
//     default:
//         console.error("El numero ingresado es incorrecto");
// }