// @flow

import React, { useState, useEffect, Fragment } from "react";
import { StarShips } from "../index";
import Axios from "axios";

type PeopleProps = {
  name: String,
  height: Number,
  mass: Number,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: String,
  films: Array<String>,
  species: Array<String>,
  vehicles: Array<String>,
  starships: Array<String>,
  created: Date,
  edited: Date,
  url: String
};

export default function People(props: PeopleProps) {
  const [starShipsModal, setStarshipsModal] = useState(false);
  const [starshipsData, setStarShipsData] = useState([]);

  useEffect(() => {
    resolveStarships();
  }, []);

  const resolveStarships = async () => {
    let array = []
    props.starships.forEach(async url => {
      const { data } = await Axios.get(url);
      array.push(data);
    });
    setStarShipsData(array);
  }

  return (
    <Fragment>

      {/* modals */}
      {starShipsModal && <StarShips data={starshipsData} handleClose={() => setStarshipsModal(false)} />}


      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={"https://bulma.io/images/placeholders/1280x960.png"}
              alt={props.name}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6" style={{ textTransform: "capitalize" }}>
                {(props.height * 0.01).toFixed(2)}m | {props.mass}kgs | {props.hair_color} hair |{" "}
                {props.eye_color} eyes
              </p>
            </div>
          </div>

          <div className="content">
            <time dateTime={props.birth_year} style={{ textTransform: "capitalize" }}>
              borns on {props.birth_year}
            </time>
            <hr />
            <button className="button is-primary is-fullwidth" disabled={props.starships.length === 0} onClick={() => setStarshipsModal(true)}>
              View Starships ({props.starships.length})
              </button>

          </div>
        </div>
      </div>
    </Fragment>
  );
}
