import React, { Component } from "react";
import { UnsplashContainer, NoItemsYet } from "./unsplash-search.styles";

import "./unsplashSearch.css";

import axios from "axios";
import SearchBar from "../search-bar/search-bar";
import ImageList from "./ImageList";

class UnSplashSearch extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (query) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: query },
      headers: {
        Authorization: "Client-ID pDzJFTIfPf7T1qnkhigVksWlxfxjF9HLYz3gUhoyPKg",
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <UnsplashContainer>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.length === 0 ? (
          <NoItemsYet>Search Unsplash</NoItemsYet>
        ) : (
          <ImageList images={this.state.images} />
        )}
      </UnsplashContainer>
    );
  }
}

export default UnSplashSearch;
