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
    <a href={props.url}>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64 ">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.name} </strong>
                <small>
                  {props.height}cm • {props.mass}kgs • {props.eye_color} eyes • {props.skin_color}{" "}
                  skin{" "}
                </small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet
                massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
      </div>
    </a>
  );
}
