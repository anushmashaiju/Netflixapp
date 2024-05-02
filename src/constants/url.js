import { api_key } from "./Apikey"
export const imageUrl = 'https://image.tmdb.org/t/p/original';
export const videoapi=`https://api.themoviedb.org/3/movie/872585/videos?api_key=${api_key}&language=en-US`;
export const apiBaseUrl='https://api.themoviedb.org/3';
export const trending=`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`;//template literals
export const action=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`;
export const originals=`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`;
// eslint-disable-next-line no-template-curly-in-string
export const horrorMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`;
export const comedyMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`;
export const romanticMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`;
export const documentary= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`;
export const crime= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=80`;
export const animation= `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=16`;

//genre id provided