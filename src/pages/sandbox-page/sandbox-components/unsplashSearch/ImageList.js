import React from "react";
// import styles from "../styles/styles.imageListLayoutOne";
import { ListContainer } from "./unsplash-search.styles";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <ListContainer>{images}</ListContainer>;
};

export default ImageList;
