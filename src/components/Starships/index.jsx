// @flow

import React from "react";
import axios from "axios";

type StarShipType = {
  MGLT: String,
  cargo_capacity: Number,
  consumables: String,
  cost_in_credits: Number,
  created: Date,
  crew: Number,
  edited: Date,
  hyperdrive_rating: Number,
  length: Number,
  manufacturer: String,
  max_atmosphering_speed: String,
  model: String,
  name: String,
  passengers: Number,
  films: Array<String>,
  pilots: Array<String>,
  starship_class: String,
  url: String
}

type StarshipProps = {
  data: Array<StarShipType>,
  handleClose: Function
};



function StarShips({ data, handleClose }: StarshipProps) {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={handleClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">StarShips</p>
          <button className="delete" aria-label="close" onClick={handleClose} />
        </header>
        <section className="modal-card-body">

          {data.map((item, index) => (
            <div key={item.name}>
              <b className="title is-4">{item.name}</b> <br />
              <span>{item.passengers} passengers</span> <br />
              <span>{item.cargo_capacity} cargo capacity</span><br />
              <span>{item.consumables} consumables</span><br />
              <span>{item.created} created</span><br />
              <span>Crew{item.crew}</span><br />
              <span>{item.model} model</span><br />
              <span>{item.length} length</span><br />
              <span>Manufactured by {item.manufacturer}</span><br />
              <span>Class {item.starship_class}</span><br />
              <hr />
            </div>
          ))}
        </section>
        <footer className="modal-card-foot" />
      </div>
    </div>
  )
}


export default StarShips;
