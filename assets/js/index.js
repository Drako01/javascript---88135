// Clase 06

// Funciones de Orden Superior

// function operarNumeros(a, b, operacion){
//     return operacion(a,b);
// }

// const operarNumeros = (a, b, operacion) => operacion(a, b);

// // Definimos las Operaciones
// const suma = (x, y) => x + y;
// const resta = (x, y) => x - y;
// const multiplicacion = (x, y) => x * y;
// const division = (x, y) => {
//     if (y === 0) {
//         return "Error, No se puede dividir por Cero"
//     }

//     return x / y;
// };

// console.log(operarNumeros(5, 52, suma));
// console.log(operarNumeros(5, 52, resta));
// console.log(operarNumeros(5, 52, multiplicacion));
// console.log(operarNumeros(5, 52, division));
// console.log(operarNumeros(5, 0, division));


// Array

// const myArray = [1, 2, 3];
// // console.log(typeof myArray);
// // myArray = 4;
// // console.log(typeof myArray);

// myArray.push(4);

// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray.length); // Gallina Tiene Huevos

// const myArrayString = ["Hola", "Mundo"];

// myArrayString.push("Coder");
// myArrayString.push("JavaScript");

// console.log(myArrayString);
// console.log(myArrayString.sort());

// const myArray = [1, 2, 3, -5, 0, 55, 1212, -56, -36, 99, 100, 1025, -524, 0];
// console.log(myArray);

// myArray.forEach((num) => {
//     console.log(num);
// })

// myArray.forEach((num, i) => {
//     console.log(`Para el Indice ${i}, el numero es: ${num}`);
// })

// myArray.forEach((num, i, array) => {
//     array[i] = num * 2;
// });

// console.log(myArray);

// const myArrayString = ["Hola", "Mundo", "Coder"];
// console.log(myArrayString);

// const inventario = {}; // Creamos un Objeto vacio -> Global

// myArrayString.forEach((palabra, indice) => {
//     inventario[indice] = palabra;
// });

// console.log(inventario);

// Filter

// const cursos = [
//     { nombre: "JavaScript", precio: 180000 },
//     { nombre: "React", precio: 190000 },
//     { nombre: "Angular", precio: 210000 },
//     { nombre: "SQL", precio: 90000 },
//     { nombre: "BackEnd", precio: 360000 },
// ];

// console.log(cursos);

// const cursosEconomicos = cursos.filter((curso) => curso.precio <= 180000);
// const cursosCaros = cursos.filter((curso) => curso.precio > 200000);

// console.log(cursosEconomicos);
// console.log(cursosCaros);

// const myArray = [1, 2, 3, -5, 0, 55, 1212, -56, -36, 99, 100, 1025, -524, 0];
// const myArrayFiltrado = myArray.filter((num) => num > 10);
// console.log(myArrayFiltrado);

// Map

// const frutas = ["Banana", "Pera", "Manzana", "Anana", "Frutilla"];

// const frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());

// console.log(frutas);
// console.log(frutasMayusculas);

// const myArray = [1, 2, 3, -5, 0, 55, 1212, -56, -36, 99, 100, 1025, -524, 0];
// const myArrayDuplicado = myArray.map((num) => num * 2);
// console.log(myArrayDuplicado);

// const cursos = [
//     { nombre: "JavaScript", precio: 180000 },
//     { nombre: "React", precio: 190000 },
//     { nombre: "Angular", precio: 210000 },
//     { nombre: "SQL", precio: 90000 },
//     { nombre: "BackEnd", precio: 360000 },
// ];

// console.log(cursos);

// const nombresDeCursos = cursos.map((curso) => curso.nombre);
// console.log(nombresDeCursos);

// const preciosDeCursos = cursos.map((curso) => curso.precio);
// console.log(preciosDeCursos);

// const boleanos = [true, true, false, true, false, false, true, true, false];

// console.log(boleanos);

// const boleanoATexto = boleanos.map((valor) => {
//     if (valor) {
//         return "✅ Verdadero"
//     } else {
//         return "❌ Falso"
//     }
// });
// console.log(boleanoATexto);

// const productos = [
//     {id: 1, nombre: "Azucar", precio: 1800, disponible: true},
//     {id: 2, nombre: "Yerba", precio: 1900, disponible: true},
//     {id: 3, nombre: "Cafe", precio: 3600, disponible: false},
//     {id: 4, nombre: "Coca Cola", precio: 1800, disponible: true},
//     {id: 5, nombre: "Pepsi", precio: 1750, disponible: false},
//     {id: 6, nombre: "Harina", precio: 800, disponible: false},
// ];

// const stock = productos.map((producto) => {
//     let disponibilidad = "";
//     if(producto.disponible){
//         disponibilidad = "Tiene Stock"
//     } else {
//         disponibilidad = "Sin Stock"
//     }

//     return `El Producto ${producto.nombre} ${disponibilidad} - Precio: $${producto.precio}.-`
// });

// console.log(stock);


// Reduce

// const myArray = [1, 2, 3, -5, 0, 55, 1212, -56, -36, 99, 100, 1025, -524, 0];

// const sumaDeElementosDelArray = myArray.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(sumaDeElementosDelArray);

// const cursos = [
//     { nombre: "JavaScript", precio: 180000 },
//     { nombre: "React", precio: 190000 },
//     { nombre: "Angular", precio: 210000 },
//     { nombre: "SQL", precio: 90000 },
//     { nombre: "BackEnd", precio: 360000 },
// ];

// const cursoObjeto = cursos.reduce((acc, curso) => {
//     acc[curso.nombre] = curso.precio
//     return acc
// }, {});


// console.log(cursos);
// console.log(cursoObjeto);


// const frutas = ["Banana", "Banana", "Banana", "Banana", "Banana", "Pera", "Pera", "Pera", "Manzana", "Anana", "Manzana", "Manzana", "Anana", "Frutilla"];

// const frutasObjeto = frutas.reduce((acc, fruta) => {
//     acc[fruta] = (acc[fruta] || 0) + 1
//     return acc;
// }, {})

// console.log(frutasObjeto);

const carrito = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true, cantidad: 6 },
    { id: 2, nombre: "Yerba", precio: 1900, disponible: true, cantidad: 1 },
    { id: 3, nombre: "Cafe", precio: 3600, disponible: false, cantidad: 2 },
    { id: 4, nombre: "Coca Cola", precio: 1800, disponible: true, cantidad: 2 },
    { id: 5, nombre: "Pepsi", precio: 1750, disponible: false, cantidad: 5 },
    { id: 6, nombre: "Harina", precio: 800, disponible: false, cantidad: 10 },
    { id: 7, nombre: "Azucar", precio: 1800, disponible: true, cantidad: 6 },
];

console.log(carrito);

const resumenDeCarrito = carrito.reduce((acc, item) => {
    if(acc[item.nombre]){
        acc[item.nombre].cantidad += item.cantidad 
    } else {
        acc[item.nombre] = {
            precio: item.precio,
            cantidad: item.cantidad
        }
    }
    return acc
}, {});

console.log(resumenDeCarrito);

const productos = [
    {id: 1, nombre: "Azucar", precio: 1800, disponible: true},
    {id: 2, nombre: "Yerba", precio: 1900, disponible: true},
    {id: 3, nombre: "Cafe", precio: 3600, disponible: false},
    {id: 4, nombre: "Coca Cola", precio: 1800, disponible: true},
    {id: 5, nombre: "Pepsi", precio: 1750, disponible: false},
    {id: 6, nombre: "Harina", precio: 800, disponible: false},
];

const productoBuscado = productos.find((producto) => producto.id === 3);
const productoBuscadoPorNombre = productos.find((producto) => producto.nombre === 'Pepsi');

// const productoBuscadoPorDisponibilidad = productos.find((producto) => producto.disponible === true);

console.log(productoBuscado);
console.log(productoBuscadoPorNombre);
// console.log(productoBuscadoPorDisponibilidad);

const hayProductoDisponible = productos.some((producto) => producto.disponible === true);
console.log(hayProductoDisponible);
