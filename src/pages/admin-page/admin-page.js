import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import { AdminPageContainer } from "./admin-page-styles";
import PostList from "../../shared-components/post-list/post-list";
import NewPostForm from "./admin-page-components/new-post-form/new-post-form";
import UpdatePostForm from "./admin-page-components/new-post-form/update-post-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared-components/context/auth-context";
import Button from "../../shared-components/form-elements/button";
import { useHttpClient } from "../../shared-components/hooks/http-hook";

const AdminPage = () => {
  const authContext = useContext(AuthContext);

  const [loadedPosts, setLoadedPosts] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  let { path } = useRouteMatch();
  console.log("----AdminPage Fired----", path, authContext);
  const history = useHistory();
  const params = useParams().postId;

  const [newButton, setNewButton] = useState(false);

  useEffect(() => {
    console.log("useEffect fired");
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/posts/${authContext.userId}`
        );
        setLoadedPosts(responseData.posts);
        console.log("responseData homePage", responseData);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchPosts();
    // }, [sendRequest, userId]);
  }, [authContext.userId, sendRequest]);

  // const newPostMode = (post) => {
  //   history.push(`/admin-page`);
  // };

  return (
    <AdminPageContainer>
      <div className="column">
        {/* <Button onClick={newPostMode}>New Post</Button> */}
        <PostList posts={loadedPosts} />
      </div>
      <div className="column">
        <Switch>
          <Route exact path={`${path}`}>
            <NewPostForm />
          </Route>
          <Route path={`${path}/:postId`}>
            <UpdatePostForm />
          </Route>
        </Switch>
      </div>
    </AdminPageContainer>
  );
};

export default AdminPage;
