import React, { useState, useEffect } from "react";
import axios from "../req/axios";
import { imageUrl } from "../shared/baseUrl";

import "./styles/row.scss";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <div>
              <img
                key={movie.id}
                className={isLargeRow ? "row-poster" : "row-poster-wide"}
                src={`${imageUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
