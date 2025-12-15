let titulo = document.getElementsByTagName('title')[0];
let h1Title = document.getElementById('titulo').innerText;

titulo.innerText = h1Title;
const cuerpo = document.body;
const footer = document.querySelector('#footer');
let parrafoFooter = "Hola desde Coder";
let parrafo = document.createElement('p');
parrafo.innerText = parrafoFooter;
footer.appendChild(parrafo);

const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';
const links = ["Index", "Products", "Contact"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const origen = document.createElement('a');

origen.href = '/';
origen.appendChild(img);
img.src = '/assets/img/logo.png';
img.alt = 'CoderHouse';

liImagen.appendChild(origen);
ul.appendChild(liImagen);

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >
    ${link}
    </a>`;
    ul.appendChild(li);
}

cabecera.style.backgroundColor = '#c2c2c2';

const toggleDarkMode = document.getElementById('toggle-dark-mode');

if(localStorage.getItem('theme') === 'dark'){
    cuerpo.classList.add('dark');
}

toggleDarkMode.addEventListener('click', () => {
    darkMode(cuerpo);
})

function darkMode(cuerpo) {
    cuerpo.classList.toggle('dark');
    localStorage.setItem('theme', cuerpo.classList.contains('dark') ? 'dark' : '');
}