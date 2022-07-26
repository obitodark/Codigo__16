const containerMovies = document.querySelector("#container-movies");
let text = "";
function renderCards(movies) {
  containerMovies.innerHTML = "";

  movies
    .sort(() => 0.5 - Math.random())
    .forEach((movie, index) => {
      if (index >= 10) return;

      const { title: titulo, programType: tipo, images } = movie;
      const imageUrl = images["Poster Art"].url;

      try {
        var request = new XMLHttpRequest();
        request.open("GET", `${images["Poster Art"].url}`, true);
        request.send();
        if (request == true) {
          alert("No existe pagina");
        }
      } catch (error) {
        console.log("error");
      }
      if (movie.programType == "series") {
        text = `<span class="badge text-bg-danger position-absolute  start-0 top-0 p-3">Series</span>`;
      } else {
        text = `<span class="badge text-bg-warning position-absolute start-0 top-0 p-3">Peliculas</span>`;
      }
      containerMovies.innerHTML += `

       
        <div class="col-12 col-sm-4 col-md-3 col-lg-2">
          <div class="card my-3" >
          <div class="position-relative">
          <img
          src="${images["Poster Art"].url}"
          class="card-img-top"
          alt=""
          onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
        />
        <span class="badge  position-absolute start-0 top-0 p-3 text-bg-${
          tipo === "series" ? "danger" : "warning"
        }">${tipo}</span>
        
          </div>
           
         
            <div class="card-body">
              <div class="card-title">${titulo}</div>
              <p class="card-text">
             
              </p>
            </div>
          </div>
        </div>
    `;
    });
}

const url =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

fetch(url)
  .then((response) => response.json())
  .then((datos) => renderCards(datos.entries));

function valor() {}
// console.log(peticion);
// recordemos que fetch retorna una promesa esta tiene 2 escenario
//* resolve (resolver) => Es ocurre cuando la peticion esta ok
//! reject (rechazar) => Es cuando algo fallo

//* then() Es un callback, es una funcion que se ejecuta cuando algo terminar

// Ejemplo con el API de pokemon
const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

fetch(urlPokemon).then((response) => response.json());
