// console.log(document)
// console.log(document.getElementsByTagName('title')[0])

// let titulo = document.getElementsByTagName('title')[0].innerText;
let titulo = document.getElementsByTagName('title')[0];
let h1Title = document.getElementById('titulo').innerText;
const titulos = ["Titulo 1", "Titulo 2", "Titulo 3"];

// titulo.innerText = titulos[2];
titulo.innerText = h1Title;
// console.log(titulo);

const cuerpo = document.body;

// console.log(cuerpo)

const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);
// contenedores[0].innerHTML = "<h2>Contenedor <strong>Modificado</strong> 2</h2>";

const personasArray = ["Alexis", "Alejandro", "Raul", "Valentina", "Vittorio", "Yeisi"];

function cargarElementosAlDOM() {
    const tituloLocal = "Personas Cargadas";
    h1Title = tituloLocal;
    let personasElement = document.getElementById('personas'); // Accede al UL del HTML
    for (const persona of personasArray) {
        let li = document.createElement('li'); // Crea un li por cada persona del Array
        li.innerHTML = persona; // Asignamos dinamicamente cada persona del Array
        personasElement.appendChild(li); // Agregarle al UL cada LI generado
    }
}

cargarElementosAlDOM();

// Agregar una section al final del main
// crear un Array de Objetos
// Mostrar una lista con los datos del Array
// a partir de una funcion



const cargarObjetosDelArrayAlDOM = () => {
    const arrayDeObjetos = [
        {
            id: 1,
            nombre: "Azucar",
            precio: 1250,
            stock: 1500
        }, {
            id: 2,
            nombre: "Yerba",
            precio: 1950,
            stock: 1356
        }, {
            id: 3,
            nombre: "Coca Cola",
            precio: 1800,
            stock: 2000
        }, {
            id: 4,
            nombre: "Pepsi",
            precio: 1750,
            stock: 1500
        }
    ];

    let main = document.querySelector('#main');
    let sectionDelMain = document.createElement('section');

    let lista = document.createElement('ul');
    lista.id = "productos-id"

    arrayDeObjetos.forEach(objeto => {
        let item = document.createElement('li');
        item.textContent = `ID: ${objeto.id}, Nombre: ${objeto.nombre}, Precio: $${objeto.precio}.-, Stock: ${objeto.stock} unidades.`;
        lista.appendChild(item);
    })
    sectionDelMain.appendChild(lista);
    main.appendChild(sectionDelMain);
}


cargarObjetosDelArrayAlDOM();

// Eventos
let botonClick = document.querySelectorAll('.button_grey')[0];

// console.log(botonClick)
// console.log(botonClick.innerText)

botonClick.addEventListener('click', () => {
    // console.log("Me Hicieron Click");
    cuerpo.style.backgroundColor = 'blue';
    cuerpo.style.color = 'white';
});

contenedores[0].addEventListener('mouseover', () => {
    let h4Cont = contenedores[0].querySelector('h4');
    h4Cont.style.color = 'green';
})

contenedores[1].addEventListener('mouseover', () => {
    let h4Cont = contenedores[1].querySelector('h4');
    h4Cont.style.color = 'blue';
})
contenedores[2].addEventListener('mouseover', () => {
    let h4Cont = contenedores[2].querySelector('h4');
    h4Cont.style.color = 'red';
})
contenedores[3].addEventListener('mouseover', () => {
    let h4Cont = contenedores[3].querySelector('h4');
    h4Cont.style.color = 'yellow';
})

const arrayDeObjetos = [
    {
        id: 5,
        nombre: "Azucar Negra",
        precio: 1250,
        stock: 1500
    }, {
        id: 6,
        nombre: "Chocolate",
        precio: 12550,
        stock: 150
    }, {
        id: 7,
        nombre: "Banana",
        precio: 120,
        stock: 150
    }, {
        id: 8,
        nombre: "Manzana",
        precio: 350,
        stock: 500
    },
];

let botonAgregar = document.querySelectorAll('.button_grey')[1];

let indiceObjeto = 0;

botonAgregar.addEventListener('click', () => {
    let listaProductos = document.querySelector('#productos-id');
    if (indiceObjeto < arrayDeObjetos.length) {
        let item = document.createElement('li');
        const objeto = arrayDeObjetos[indiceObjeto];

        item.textContent = `ID: ${objeto.id}, Nombre: ${objeto.nombre}, Precio: $${objeto.precio}.-, Stock: ${objeto.stock} unidades.`;


        listaProductos.appendChild(item);

        indiceObjeto++;
    } else {
        alert("Todos los productos fueron agregados")
    }
})

const footer = document.querySelector('#footer');

let parrafoFooter = "Hola desde Coder";

let parrafo = document.createElement('p');

parrafo.innerText = parrafoFooter;

footer.appendChild(parrafo);