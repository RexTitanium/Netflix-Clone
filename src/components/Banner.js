import React, { useState, useEffect } from "react";
import axios from "../req/axios";
import requests from "../req/requests";
import { imageUrl } from "../shared/baseUrl";
import "./styles/banner.scss";

function Banner() {
  const [movie, setMovie] = useState([]);

  function trimstr(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests[0].fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${imageUrl}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
          zIndex: 0,
        }}
      >
        <div className="banner-content">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

          <h2 className="banner-description">
            {trimstr(movie?.overview, 150)}
          </h2>
          <div className="banner-buttons">
            <button className="banner-button">
              <span class="material-icons">play_arrow</span>
              <p>Play</p>
            </button>
            <button className="banner-button btn-1">
              <span class="material-icons">info</span>
              <p>More Info</p>
            </button>
          </div>
        </div>
      </header>
      <div className="empty-row"></div>
    </div>
  );
}

export default Banner;
