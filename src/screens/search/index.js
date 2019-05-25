import React, { useEffect, useState } from "react";
import { connect } from "unistore/react";
import { searchInListByField } from "../../utils";

// acontions
import searchActions from "../../actions/searchActions";

// components
import { People } from "../../components";

class SearchScreen extends React.Component {
  state = {
    filter: ""
  };

  componentWillMount = () => {
    this.props.getPeople();
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    const { offsetHeight, scrollTop } = document.documentElement;
    const offset = 100; // um pouquinho antes né bb
    if (window.innerHeight + scrollTop <= offsetHeight - offset) return;
    this.props.getPeople();
  };

  render = () => {
    const { PEOPLE } = this.props;
    const { filter } = this.state;

    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Search Screen</h1>
          </div>
          <div className="column">
            <input
              type="text"
              className="input is-medium"
              placeholder="Filter by name"
              onChange={e => this.setState({ filter: e.target.value })}
            />
          </div>
        </div>

        <hr />

        <div className="peoples columns is-multiline">
          {searchInListByField(PEOPLE.data, "name", filter).map((item, index) => (
            <div className="column is-one-quarter">
              <People {...item} />
            </div>
          ))}
        </div>

        <br />

        {PEOPLE.isLoading && <div className="sub-title">Carregando...</div>}
      </div>
    );
  };
}

export default connect(
  "PEOPLE",
  searchActions
)(SearchScreen);
