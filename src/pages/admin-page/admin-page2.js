import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AdminPageContainer } from "./admin-page-styles";
import PostForm from "./admin-page-components/new-post-form/post-form";
import PostList from "../../shared-components/post-list/post-list";
import NewPostForm from "./admin-page-components/new-post-form/new-post-form";
import UpdatePostForm from "./admin-page-components/new-post-form/update-post-form";

const AdminPage = () => {
  const [postId, setPostId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const postParam = useParams().postId;
  useEffect(() => {
    const loadParams = () => {
      setPostId(postParam);
      console.log("postParam", postParam);
    };
    loadParams();
    setIsLoading(false);
  }, [postParam]);
  return (
    <AdminPageContainer>
      <div className="column">
        <PostList />
      </div>
      {!postId && !isLoading
        ? (console.log("postId1", postId),
          (
            <div className="column">
              <NewPostForm />
            </div>
          ))
        : (console.log("postId2", postId),
          (
            <div className="column">
              <UpdatePostForm postId={postId} />
            </div>
          ))}
      <div className="column"></div>
    </AdminPageContainer>
  );
};

export default AdminPage;
