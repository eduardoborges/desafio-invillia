import React from "react";
import { connect } from "unistore/react";

import searchActions from "../../actions/searchActions";

function SearchScreen({ PEOPLE = { data: [], isLoading: false }, actions }) {
  return (
    <div className="container">
      <h1 className="title">Search Screen</h1>
    </div>
  );
}

export default connect(
  "PEOPLE",
  searchActions
)(SearchScreen);
