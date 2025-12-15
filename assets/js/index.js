let titulo = document.getElementsByTagName('title')[0];
let h1Title = document.getElementById('titulo').innerText;
const titulos = ["Titulo 1", "Titulo 2", "Titulo 3"];

titulo.innerText = h1Title;

const cuerpo = document.body;

const footer = document.querySelector('#footer');

let parrafoFooter = "Hola desde Coder";

let parrafo = document.createElement('p');

parrafo.innerText = parrafoFooter;

footer.appendChild(parrafo);