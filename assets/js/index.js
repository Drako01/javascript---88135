// Objetos
// const persona1 = {
//     id: 1,
//     nombre: "Analia",
//     apellido: "Gonzalez",
//     edad: 25,
//     email: "analia@mail.com"
// };

// console.log(persona1);

// const persona2 = {
//     id: 2,
//     nombre: "Mario",
//     apellido: "Perez",
//     edad: 35,
//     email: "mario@mail.com"
// };

// const persona3 = {
//     id: 3,
//     nombre: "Maraiana",
//     apellido: "Garcia",
//     edad: 20,
//     email: "mariana@mail.com"
// };

// // console.log(persona2);

// function Persona(persona){ // Pasamos el objeto literal
//     this.id = persona.id,
//     this.nombre = persona.nombre,
//     this.apellido = persona.apellido,
//     this.edad = persona.edad,
//     this.email = persona.email
// }

// const personaLiteral = new Persona(
//     {
//         id: 1,
//         nombre: "Analia",
//         apellido: "Gonzalez",
//         edad: 25,
//         email: "analia@mail.com"
//     }
// );

// console.log(personaLiteral);

// const personaLiteral2 = new Persona(
//     {
//         id: 2,
//         nombre: "Mario",
//         apellido: "Perez",
//         edad: 35,
//         email: "mario@mail.com"
//     }
// );
// console.log(personaLiteral2);

// const personaLiteral3 = new Persona(persona3);
// console.log(personaLiteral3);


// function Persona(id, nombre, apellido, edad, email) { // Pasamos sus atriburos como parametros
//         this.id = id,
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.edad = edad,
//         this.email = email
// }

// const persona = new Persona(1, "Alejandro", "Di Stefano", 49, "alejandro@mail.com");

// persona.email = "nuevoemail@mail.com";

// persona['email'] = "nuevoemailconcorchete@mail.com";

// console.log(persona);

function Gato(nombre, edad, raza, color, peso) {
    this.nombre = nombre,
        this.edad = edad,
        this.raza = raza,
        this.color = color,
        this.peso = peso
}

function Perro(nombre, edad, raza, color, peso) {
    this.nombre = nombre,
        this.edad = edad,
        this.raza = raza,
        this.color = color,
        this.peso = peso
}

const gatito = new Gato("Mishi", 4, "Gato", "Blanco", 3.5);
console.log(gatito);

const perrito = new Perro("Daisy", 4, "Yorky", "Beige", 3.5);
console.log(perrito);

class Mascota {
    constructor(tipo, nombre, edad, raza, color, peso) { // Atributos -> Como es la mascota
        this.tipo = tipo,
        this.nombre = nombre,
        this.edad = edad,
        this.raza = raza,
        this.color = color,
        this.peso = peso
    }

    // Metodos -> Que puede hacer la Mascota?
    caminar() {
        console.log(`Mi ${this.tipo} ${this.nombre} esta caminando.!`)
    }

    comer() {
        console.log(`Mi ${this.tipo} ${this.nombre} esta comiendo.!`)
    }

}

const perritoConClass = new Mascota("Perro", "Daisy", 4, "Yorky", "Beige", 3.5);
const gatitoConClass = new Mascota("Gato", "Mishi", 4, "Gato", "Blanco", 3.5);
console.log(perritoConClass);
console.log(gatitoConClass);

perritoConClass.caminar();
gatitoConClass.caminar();
perritoConClass.comer();
gatitoConClass.comer();


// Almacenamiento
let mensaje = "Hola desde Coder";
let mensaje2 = "Hola desde LocalStorage"

// Guardar informacion en formato String
localStorage.setItem("Mensaje", mensaje);
localStorage.setItem("Mensaje2", mensaje2);
localStorage.setItem("Numero" , 2);
localStorage.setItem("Boleando", true);

// Cuando queremos guardar Objetos, tenemos que convertirlos en formato String


localStorage.setItem("Perro", perritoConClass);
console.log(typeof perritoConClass); // Objeto
console.log(typeof JSON.stringify(perritoConClass)); // String

localStorage.setItem("Perro", JSON.stringify(perritoConClass));
sessionStorage.setItem("Perro", JSON.stringify(perritoConClass));
localStorage.setItem("Gato", JSON.stringify(gatitoConClass));

const perritoLS = localStorage.getItem("Perro");

console.log(typeof perritoLS);
console.log(perritoLS);

const perritoLSParceado = JSON.parse(localStorage.getItem("Perro"));

console.log(typeof perritoLSParceado);
console.log(perritoLSParceado);

localStorage.removeItem("Boleando");
localStorage.removeItem("Numero");
localStorage.removeItem("Mensaje2");

// localStorage.clear();

const guardarEnElLocalStorage = (clave, valor) =>{
    localStorage.setItem(clave, valor)
}

guardarEnElLocalStorage("Clave", "Valor");

guardarEnElLocalStorage("Perrito", JSON.stringify(perritoConClass));

localStorage.clear();

const carrito = [];

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
    }
}

function eliminarProductoPorIndice(indice){
    if(indice >= 0 && indice < carrito.length){
        const eliminado = carrito.splice(indice, 1);
        guardarEnElLocalStorage("carrito", JSON.stringify(carrito));
        console.log(`${eliminado[0].nombre} fue eliminado del Carrito`)
    } else {
        console.error("Indice fuera de rango")
    }
}


const producto1 = new Producto("Chocolate", 15000, 2);
const producto2 = new Producto("Gaseosa", 1800, 3);
const producto3 = new Producto("Manteca", 1550, 1);

carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);

eliminarProductoPorIndice(1);
eliminarProductoPorIndice(1);
eliminarProductoPorIndice(0);

guardarEnElLocalStorage("carrito", JSON.stringify(carrito));

// localStorage.removeItem("carrito");
