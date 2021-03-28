import React from "react";
import { PostsSectionContainer } from "../../../shared-components/post-list/post-card-styles";
import PostCard from "../../../shared-components/post-list/post-list";

const PostsSection = (props) => {
  console.log("allPosts PostSection", JSON.stringify(props.posts));
  return (
    <PostsSectionContainer>
      <PostCard posts={props.posts} />
    </PostsSectionContainer>
  );
};

export default PostsSection;
