import React, { Component } from "react";
import {
  SearchBarContainer,
  SearchLeft,
  SearchRight,
  SearchGlass,
} from "./search-bar.styles";

class SearchBar extends Component {
  state = { searchField: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchField);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <SearchGlass>
          <SearchBarContainer>
            <SearchLeft>
              <button onClick={{}}> Search </button>
            </SearchLeft>
            <SearchRight>
              <input
                value={this.state.searchField}
                onChange={(query) =>
                  this.setState({ searchField: query.target.value })
                }
                placeholder="Search"
              />
            </SearchRight>
          </SearchBarContainer>
        </SearchGlass>
      </form>
    );
  }
}

export default SearchBar;
