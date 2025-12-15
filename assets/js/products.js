// console.log("Inicio de Programa");

// function funcionA() {
//     console.log("Entrando a Funcion A");
//     funcionB();
//     console.log("Saliendo de Funcion A");
// }

// function funcionB() {
//     console.log("Entrando a Funcion B");
//     setTimeout(() => {
//         console.log("Saliendo de Funcion B");
//     }, 300); // 300 Milisegundos despues...
// }

// function funcionC() {
//     console.log("Entrando a Funcion C");
// }

// funcionA();

// setTimeout(() => {
//     funcionC();
//     console.log("Saliendo de Funcion C");
// }, 500); // 500 Milisegundos despues...

// setTimeout(() => {
//     console.log("Fin de Programa");
// }, 600);

// // SetInterval

// let segundos = 0;
// let minutos = 0;
// let horas = 0;

// const cronometro = setInterval(() => {
//     segundos++;

//     if (segundos === 60) {
//         segundos = 0;
//         minutos++;
//     }

//     if (minutos === 60) {
//         minutos = 0;
//         horas++;
//     }

//     if (horas === 24) {
//         horas = 0;
//         minutos = 0;
//         segundos = 0;
//     }

//     let horasStr = horas.toString();
//     if (horas < 10) {
//         horasStr = '0' + horas;
//     }

//     let minutosStr = minutos.toString();
//     if (minutos < 10) {
//         minutosStr = '0' + minutos;
//     }

//     let segundosStr = segundos.toString();
//     if (segundos < 10) {
//         segundosStr = '0' + segundos;
//     }

//     console.log(horasStr + ':' + minutosStr + ':' + segundosStr);
// }, 1000); // Se ejecuta cada 1 seg,

// setTimeout(() => {
//     clearInterval(cronometro);
//     console.log("Cronometro detenido");
// }, 10000);

// Promesas

const peticion = () => {
    try {
        const data = fetch('/productos.json');
        console.log(data);
    } catch (error) {
        console.error("Ups, Algo salio mal... ", error);
    } finally {
        console.log("Peticion finalizada");
    }
}

// peticion();

const peticion2 = () => {
    fetch('/productos.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            // console.log(datos);
            datos.forEach((item, index) => {
                console.log(`Producto ${index + 1}: `, item)
            });
        })
        .catch((error) => {
            console.error("Ups, Algo salio mal... ", error);
        })
        .finally(() => {
            console.log("Peticion finalizada");
        })
}

// peticion2();

const cards = document.getElementById('cards');


const peticion3 = () => {
    fetch('/productos.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            const data = datos;
            data.forEach((item) => {
                const card = document.createElement('div');
                card.innerHTML = `
                    <div class="card" style="width: 18rem; height: 32rem;">
                    <img class="card-img-top" src="${item.imagen}" alt="${item.nombre}"/>
                        <div class="card-body">
                            <h5 class="card-title">${item.nombre}</h5>
                            <p class="card-text">Descripcion: ${item.descripcion}</p>
                            <p class="card-text">Precio: $${item.precio}.-</p>
                            <p class="card-text">Stock: ${item.stock} Unid.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                `;
                cards.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Ups, Algo salio mal... ", error);
        })
        .finally(() => {
            console.log("Peticion finalizada");
        })
}

// peticion3();

const API_URL = 'https://ghibliapi.vercel.app/films/';
const resultEl = document.getElementById('results');

let arrayAllMovies = [];

async function fetchAllMovies() {
    const res = await fetch(API_URL);
    const data = await res.json();
    arrayAllMovies = data;
    // console.log(arrayAllMovies);
    renderMovies(arrayAllMovies);
}

function renderMovies(movies){
    resultEl.innerHTML = movies.map(movie => `
        <div class="col-md-4">
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}"/>
                    <hr>
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">🎬 ${movie.director} | 📆 ${movie.release_date}</p>
                    <div class="mt-auto">
                        <button class="btn btn-outline-details">Detalles</button>
                        <button class="btn btn-outline-danger">❤️</button>
                    </div>
                </div>
            </div>
        </div>
        `).join('');
}

fetchAllMovies();