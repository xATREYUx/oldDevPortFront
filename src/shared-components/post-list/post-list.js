import React, { useContext, useState, useEffect } from "react";
import Button from "../form-elements/button";
import { PostListContainer, CardButtonArea, Row } from "./post-card-styles";
import Climber from "./card-assets/IMG_2280.jpeg";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../../shared-components/hooks/http-hook";
import PostPage from "../../pages/post-page/post-page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

const PostList = (props) => {
  const authContext = useContext(AuthContext);
  const [posts, setPosts] = useState(props.posts);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();
  console.log("allPosts PostList", JSON.stringify(props.posts));

  const updateCard = (post) => {
    history.push(`/admin-page/${post.id}`);
  };

  const goToPost = (props) => {
    history.push({ pathname: `/posts/${props.id}`, state: props });
    // console.log(props);
  };

  const foundPosts = props.posts.map((post) => {
    return (
      <PostListContainer key={post.id}>
        <div className="card-left">
          <img
            src={`http://localhost:5000/${post.cardImage}`}
            alt={post.title}
          />
          {/* <img src={Climber} alt="climber" className="cardImage" /> */}
        </div>
        <div className="card-right">
          <h2 className="card-caption">{post.caption}</h2>
          <CardButtonArea>
            <Row>
              <Button
                // to={{ pathname: `/posts/${props.id}`, state: props }}
                onClick={() => goToPost(post)}
                className="card-button"
              >
                {post.title}
              </Button>
            </Row>

            {/* <Row>
              {authContext.userId ? (
                <>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    color="orange"
                    onClick={() => goToPost(post)}
                  />
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => updateCard(post)}
                    color="red"
                  />
                </>
              ) : null}
            </Row> */}
          </CardButtonArea>
        </div>
      </PostListContainer>
    );
  });
  return <div>{foundPosts}</div>;
  // return <div>props</div>;
};
export default PostList;
