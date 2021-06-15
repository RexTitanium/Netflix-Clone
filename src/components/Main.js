import React from "react";
import Row from "./Row";
import requests from "../req/requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function Main() {
  const row = requests.map((request, i) => {
    return (
      <div key={i + 1}>
        <Row
          title={request.title}
          fetchUrl={request.fetchUrl}
          isLargeRow={request.isLargeRow}
          classname={request.classname}
        />
      </div>
    );
  });

  return (
    <div>
      <div>
        <Navbar />
        <Banner />
      </div>
      {row}
    </div>
  );
}

export default Main;
