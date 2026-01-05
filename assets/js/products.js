// Promesas

const API_URL = 'https://ghibliapi.vercel.app/films/';
const resultEl = document.getElementById('results');

let arrayAllMovies = [];

async function fetchAllMovies() {
    const res = await fetch(API_URL);
    const data = await res.json();
    arrayAllMovies = data;
    console.log(arrayAllMovies)
    renderMovies(arrayAllMovies);
}

function confirmToast(title, added, ulr) {
    Toastify({
        text: "Favorito agregado!",
        duration: 3000,
        destintaion: API_URL,
    }).showToast();
}

function confirmFavorite() {
    if (!window.Swal) {
        alert('SweetAlert2 no esta disponible.');
    }

    return Swal.fire({
        title: "Agregar a favoritos",
        text: "Queres agregar la pelicula a favoritos?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si, agregar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Swal.fire("Favorito agregado!", "", "success");
            confirmToast()
        }
    });
}



function renderMovies(movies) {
    resultEl.innerHTML = movies.map(movie => `
        <div class="col-md-4" data-aos="zoom-in">
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}"/>
                    <hr>
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">🎬 ${movie.director} | 📆 ${movie.release_date}</p>
                    <div class="mt-auto">
                        <button class="btn btn-outline-details">Detalles</button>
                        <button class="btn btn-outline-danger" id="add-favorite">❤️</button>
                    </div>
                </div>
            </div>
        </div>
        `).join('');
}

fetchAllMovies();

document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'add-favorite') {
        confirmFavorite();
    }
});
