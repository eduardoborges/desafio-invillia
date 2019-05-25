// @flow

import React from "react";

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
  films: [],
  species: Array<String>,
  vehicles: Array<String>,
  starships: Array<String>,
  created: Date,
  edited: Date,
  url: String
};

export default function People(props: PeopleProps) {
  return (
    <div className="people">
      <h1 className="title">{props.name}</h1>
    </div>
  );
}
