import React from "react";
import Row from "./Row";
import requests from "../req/requests";
import Banner from "./Banner";

function Main() {
  const row = requests.map((request, i) => {
    return (
      <div>
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
        <Banner />
      </div>
      {row}
    </div>
  );
}

export default Main;
