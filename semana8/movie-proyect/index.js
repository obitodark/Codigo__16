// La logica del DOM
import {
  getMovies,
  getMoviesFromMockApi,
  storeMovieMockApi,
} from "./service/index.js";

const btnGetMovies = document.querySelector("#btn-get-movies");
const btnSaveApi = document.querySelector("#btn-save-api");
const btnGetMoviesFromMockApi = document.querySelector(
  "#btn-get-movies-mock-api"
);
const containerMovies = document.querySelector("#container-movies");

const input_cantidad = document.getElementById("cant_movies");

input_cantidad.addEventListener("keydown", (e) => {
  const valid_codes = [
    "Backspace",
    "Delete",
    "Enter",
    "ArrowLeft",
    "ArrowRight",
  ];
  if (valid_codes.includes(e.code)) return;

  if (input_cantidad.value.length > 0) e.preventDefault();

  const cantidad = e.key;
  if (isNaN(cantidad) || cantidad < 1 || cantidad > 8) e.preventDefault();
});
input_cantidad.addEventListener("keyup", async () => {
  if (input_cantidad.value.length > 0) {
    btnGetMovies.removeAttribute("disabled");
    btnSaveApi.removeAttribute("disabled");
    const movies = await getMovies();

    containerMovies.innerHTML = "";

    movies
      .sort(() => 0.5 - Math.random())
      .forEach(async (movie) => {
        const imageUrl = movie.images["Poster Art"].url;

        const response = await fetch(imageUrl);
        if (response.ok) {
          // Si la peticion de la imagen esta ok vamos a renderizar la pelicula
          renderMovie(movie);
        }
      });
  }
});
// keydown -> keypress -> value -> keyup

const moviesWithImage = [];

btnGetMovies.onclick = async function () {
  const movies = await getMovies();

  containerMovies.innerHTML = "";

  movies
    .sort(() => 0.5 - Math.random())
    .forEach(async (movie) => {
      const imageUrl = movie.images["Poster Art"].url;

      const response = await fetch(imageUrl);
      if (response.ok) {
        // Si la peticion de la imagen esta ok vamos a renderizar la pelicula
        renderMovie(movie);
      }
    });
};

btnSaveApi.onclick = function () {
  console.log(moviesWithImage);
  moviesWithImage.forEach(async (movie) => {
    await storeMovieMockApi(movie);
  });
};
const table_container = documenttable_container("#table_container");
btnGetMoviesFromMockApi.onclick = async function () {
  const movies = await getMoviesFromMockApi();

  // console.log(movies);
  // Imprimir una table debajo de los cards, con TODO lo que viene de Mockapi:
};

function renderMovie(movie) {
  // va a contar la cantidad elmentos renderizado en nuestro html
  const movies = document.querySelectorAll("#container-movies .col");

  if (movies.length >= input_cantidad.value) return;

  moviesWithImage.push(movie);

  containerMovies.innerHTML += `
    <div class="col">
      <div class="card my-3">
        <div class="into-photo">
         <div class="position-relative">
          <img
            src="${movie.images["Poster Art"].url}"
            class="card-img-top"
            alt=""
          />
          <span class="badge  position-absolute start-0 top-0 p-3 text-bg-${
            movie.programType === "series" ? "danger" : "warning"
          }">${movie.programType}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-title">${movie.title}</div>
        </div>
      </div>
    </div>
  `;
}
