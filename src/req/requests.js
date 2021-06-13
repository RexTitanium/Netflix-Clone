/*const API_KEY ="3c37c3e386dbe8f41c61a032e5ec812c";

const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;*/

const API_KEY = "3c37c3e386dbe8f41c61a032e5ec812c";

const requests = [
  {
    id: 0,
    classname: "netflix-originals",
    title: "Netflix Originals",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLargeRow: true,
  },
  {
    id: 1,
    title: "Trending Now",
    fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  {
    id: 2,
    title: "Top Rated",
    fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: 3,
    title: "Action Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: 4,
    title: "Comedy Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 5,
    title: "Romance Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: 6,
    title: "Horror Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: 7,
    title: "Documentaries",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export default requests;
