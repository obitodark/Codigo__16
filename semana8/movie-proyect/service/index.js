// Estarea los metodos para poder
/**
 * Obten      => GET
 * Crear      => POST
 * Actualizar => PUT
 * Eliminar   => DELETE
 */
import { urlMovies, mockAPIUrl } from "./config.js";

/**
 * Funcion que retorna las 100 peliculas
 */

export const getMovies = async () => {
  try {
    const response = await fetch(urlMovies);
    // tiene 2 key
    /**
     * data =>
     * total: 100
     * entries: []
     */
    const { entries } = await response.json();
    return entries;
  } catch (error) {
    return error;
  }
};

export const getMoviesFromMockApi = async () => {
  try {
    const response = await fetch(mockAPIUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const storeMovieMockApi = async (movie) => {
  try {
    const object = {
      title: movie.title,
      programType: movie.programType,
      releaseYear: movie.releaseYear,
      imageUrl: movie.images["Poster Art"].url,
    };
    const response = await fetch(mockAPIUrl, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e) {
    return e;
  }
};

// export const getMoviesFromMockApi = (async = () => {
//   try {
//   } catch (error) {}
// });
