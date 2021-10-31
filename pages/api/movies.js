/** base url to make requests to the the movie database */
const BASE_URL = 'https://api.themoviedb.org/3';

export const NetflixOriginals = BASE_URL + `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`;
export const Trending = BASE_URL + `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`;
export const TopRated = BASE_URL + `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`;
export const ActionMovies = BASE_URL + BASE_URL + `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`;
export const ComedyMovies = BASE_URL + `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`;
export const HorrorMovies = BASE_URL + `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`;
export const RomanceMovies = BASE_URL + `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`;
export const Documentaries = BASE_URL + `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`;

