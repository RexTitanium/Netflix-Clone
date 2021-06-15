import React, { useState, useEffect } from "react";
import axios from "../req/axios";
import { imageUrl } from "../shared/baseUrl";
import YouTube from "react-youtube";
import "./styles/row.scss";
import movieTrailer from "movie-trailer";
import { API_KEY } from "../req/requests";
function Row({ title, fetchUrl, isLargeRow, classname }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailers = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className={`row ${classname}`}>
      <h1>{title}</h1>

      <div className="row-posters">
        {movies.map((movie, i) => {
          return (
            <div key={i + 1}>
              <img
                key={movie.id}
                className={isLargeRow ? "row-poster" : "row-poster-wide"}
                src={`${imageUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleTrailers(movie)}
              />
            </div>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
