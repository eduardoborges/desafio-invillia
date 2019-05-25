// @flow

import React, { useEffect, useState } from "react";
import axios from "axios";


function StarShips({ starshipsUrls = [] }) {

  const [starships, setStarships] = useState([]);

  useEffect(() => {
    for (const item of starshipsUrls) {
      resolveStarShips(item);
    }
  }, [starshipsUrls]);

  const resolveStarShips = async (item) => {
    const { data } = await axios.get(item);
    setStarships([...starships, data]);
  };

  return <div>{starships.map(starship => <span>{starship.name} </span>)}</div>
}


export default StarShips;