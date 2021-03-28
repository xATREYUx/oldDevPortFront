import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewPostForm from "./new-post-form";
import UpdatePostForm from "./update-post-form";

const PostForm = () => {
  return (
    <>
      <div
        className="container"
        style={{
          borderRadius: "0 0 15px 15px",
        }}
      >
        <Switch>
          <Route path="/admin-page" component={NewPostForm} exact />
          <Route
            path="/admin-page/update-post-form/:postId"
            component={UpdatePostForm}
          />
        </Switch>
      </div>
    </>
  );
};

export default PostForm;
