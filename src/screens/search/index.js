import React, { useEffect } from "react";
import { connect } from "unistore/react";

import searchActions from "../../actions/searchActions";

import { People } from "../../components";

function SearchScreen(props) {
  //

  const { PEOPLE, getPeople, sdd } = props;

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Search Screen</h1>

      <hr />

      <div className="peoples columns is-multiline">
        {PEOPLE.data.map(item => (
          <div className="column is-half">
            <People {...item} />
          </div>
        ))}
      </div>

      <br />

      <div className="sub-title">Carregando...</div>
    </div>
  );
}

export default connect(
  "PEOPLE",
  searchActions
)(SearchScreen);
