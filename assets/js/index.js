// Unidad 4: Arrays y Objetos

// const miArrayDeNumeros = [1, 2, 3, 5, 12];
//              Indices= [0, 1, 2, 3, 4]; -> Indices de los elementos del Array

// miArrayDeNumeros = 2;
// console.log(miArrayDeNumeros)
// console.log(typeof miArrayDeNumeros)
// Los Arrays tienen sus propios metodos (funciones)
// miArrayDeNumeros.push(5); // Agrega al final del Array
// miArrayDeNumeros.push(545);
// miArrayDeNumeros.push(45);

// miArrayDeNumeros.pop(); // Elimina el ultimo elemento (con el indice mas alto)


// Estos metodos modifican todos los indices del Array
// miArrayDeNumeros.shift(); // Elimina el primer elemento (con el indice 0) -> Destructivo
// miArrayDeNumeros.unshift(3); // Agrega al principio del Array -> Destructivo
// Estos metodos modifican todos los indices del Array


// console.log(miArrayDeNumeros)

// console.log(miArrayDeNumeros.indexOf(0))


// const miArrayDeNumeros = [1, 2, 3, 5, 12, 5, -8, 15];
// console.log(miArrayDeNumeros)
// console.log(miArrayDeNumeros.length) // Nos muestra la cantida de valores en numero entero que tiene nuestro Array


// // console.log(miArrayDeNumeros[4])
// const cantidad = miArrayDeNumeros.length;

// for(let i = 0; i < cantidad; i++){
//     console.log("Valor: " + miArrayDeNumeros[i])
// }

// console.log(miArrayDeNumeros.join(" + "));
// console.log(miArrayDeNumeros.join(" | "));
// console.log(miArrayDeNumeros.join(" / "));
// console.log(miArrayDeNumeros.join(" "));
// console.log(miArrayDeNumeros.join(""));


// console.log(miArrayDeNumeros.indexOf(0)); // Retorna un numero entero -> Indice del Elemento -> Solo muestra el 1ro que encuentra
// console.log(miArrayDeNumeros.includes(0)); // Retorna un Boleano si existe o no el elemento


// const miArrayDeStrings = ["Hola", "Mundo", "CoderHouse"];
// console.log(miArrayDeStrings.join(" - "))

// for(let i = 0; i < miArrayDeStrings.length; i++){
//     console.log("En el indice : " + i + " esta el valor " + miArrayDeStrings[i]);
// }

// console.log(miArrayDeStrings.includes("CoderHouse"));

// console.log(miArrayDeStrings.sort()); // Ordena Alfabeticamente -> Cambia los indices del Array
// console.log(miArrayDeStrings.sort().reverse()); // Ordena Alfabeticamente Invertido -> Cambia los indices del Array

// Objetos

// const producto = {
//     id: 1,
//     nombre: "Azucar",
//     precio: 1200.50,
//     stock: 20
// };
// console.log(typeof producto);
// console.log(producto);

// const productos = [
//     {
//         id: 1,
//         nombre: "Azucar",
//         precio: 1200.50,
//         stock: 20
//     },
//     {
//         id: 2,
//         nombre: "Yerba",
//         precio: 2200.50,
//         stock: 200
//     },
//     {
//         id: 3,
//         nombre: "Gaseosa",
//         precio: 1800.50,
//         stock: 500
//     },
//     {
//         id: 4,
//         nombre: "Harina",
//         precio: 990.50,
//         stock: 202
//     }
// ];

// console.log(productos[0]);
// console.log(productos[2].id);
// console.log(productos[2].nombre);
// console.log(productos[2].precio);
// console.log(productos[2].stock);

// console.log(productos);

// productos.push(
//     {
//         id: 5,
//         nombre: "Chocolate",
//         precio: 6990.50,
//         stock: 10     
//     }
// );

// console.log(productos);

// const productoImportado = {
//         id: 6,
//         nombre: "Chocolate Italiano",
//         precio: 12990.50,
//         stock: 100,
//         origen: "Italia",
//         codigo: "asdasdas"
// }

// productos.push(productoImportado);
// console.log(productos);
// productos.push(
//     {
//         id: 7,
//         nombre: "Chocolate Suizo",
//         precio: 12990.50,
//         stock: 100,
//         origen: "Suecia",
//         codigo: "CHS123"
//     }
// )
// console.log(productos);

// const carrito = [];

// // carrito.push(productos);

// carrito.push(productos[0], productos[2], productos[3]);
// console.log(carrito);

// Cuando quiero darle un formato Unico al Producto

// Clases

class Producto {

    constructor(id, nombre, precio, stock, origen, codigo){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.origen = origen;
        this.codigo = codigo;
    }

    sumarIVA() {
        this.precio = parseFloat((this.precio * 1.21).toFixed(2));
    }
}

const productosUsandoClase = [];

// Utilizamos la Clase Producto haciendo una Instancia para poder usar su Contructor
productosUsandoClase.push(new Producto(1, "Azucar", 1900, 20, "Argentina", "AZ001"));
productosUsandoClase.push(new Producto(2, "Yerba", 1650, 120, "Argentina", "YR001"));
productosUsandoClase.push(new Producto(3, "Chocolate", 9650, 150));

// productosUsandoClase.sumarIVA() // El metodo se aplica a cada elemento

const productoX = new Producto(4, "Cocolate Italiano", 12990, 12, "Italia", "CHI001");

productosUsandoClase.push(productoX);

for(const producto of productosUsandoClase){
    producto.sumarIVA();
    console.log(`El producto con ID: ${producto.id} es: 
        ${producto.nombre}. - El precio de ${producto.nombre} 
        es $${producto.precio}.- y existen en Stock: ${producto.stock} 
        Unidades. Origen: ${producto.origen}`);
}

console.table(productosUsandoClase);