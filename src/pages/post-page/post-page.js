import React from "react";
import { PostPageContainer } from "./post-page-styles";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../pages/home-page/home-page-assets/logo.svg";
import Linkify from "react-linkify";

const PostPage = (props) => {
  const history = useHistory();
  const postDetails = history.location.state;
  console.log("PostPage props", postDetails);

  return (
    <PostPageContainer>
      <div className="post-image-section-container">
        <div className="post-image-container"></div>
        <div className="post-image-container"></div>
      </div>
      <div className="post-section-container">
        <h1>{postDetails.title}</h1>
        <Linkify>
          <div className="post-content">{postDetails.content}</div>
        </Linkify>
        <Logo className="logo" />
      </div>
    </PostPageContainer>
  );
};

export default PostPage;
