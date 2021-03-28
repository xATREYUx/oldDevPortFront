import React, { useEffect, useState } from "react";
import InputField from "../../../../shared-components/form-elements/input-field";
import Button from "../../../../shared-components/form-elements/button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../../shared-components/util/validators";
import { NewPostFormContainer } from "../../../../shared-components/form-elements/form-elements-style";
import { useForm } from "../../../../shared-components/hooks/form-hook";
import { useParams } from "react-router-dom";

const UpdatePostForm = () => {
  const [isLoading, setIsLoading] = useState();
  const [selectedPost, setSelectedPost] = useState();

  console.log("---UpdatePostForm fired---");
  console.log("---selectedPost---", selectedPost);

  // console.log("props", props.postId);
  const postId = useParams().postId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      caption: {
        value: "",
        isValid: false,
      },
      cardImage: {
        value: "",
        isValid: false,
      },
      content: {
        value: "",
        isValid: false,
      },
      creator: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const DUMMY_POSTS = [];

  useEffect(() => {
    console.log("useEffect");

    const fetchPost = async () => {
      try {
        console.log("fetchPost", postId);
        const responseData = DUMMY_POSTS.find((p) => p.id === postId);

        setFormData(
          {
            title: {
              value: responseData.title,
              isValid: true,
            },
            caption: {
              value: responseData.caption,
              isValid: true,
            },
            cardImage: {
              value: responseData.cardImage,
              isValid: true,
            },
            content: {
              value: responseData.content,
              isValid: true,
            },
            creator: {
              value: responseData.creator,
              isValid: true,
            },
          },
          true
        );
        setSelectedPost(responseData);
      } catch (err) {
        console.log("err2", err);
      }
    };
    fetchPost();
    setIsLoading(false);
  }, [postId, setFormData]);

  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (!selectedPost) {
    return (
      <div>
        <p>Could not find the right post.</p>
      </div>
    );
  }

  const onSubmitUpdate = (event) => {
    event.preventDefault();
    console.log("onSubmitUpdate selectedPost", formState.inputs.title.value);
  };

  return (
    !isLoading &&
    selectedPost.id === postId && (
      <NewPostFormContainer>
        <h2>Update Post</h2>
        <form className="post-form" onSubmit={onSubmitUpdate}>
          {console.log("Form Render", selectedPost.title)}
          <InputField
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={selectedPost.title}
            initialValid={true}
          />
          <InputField
            id="caption"
            type="textarea"
            label="Caption"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid caption."
            onInput={inputHandler}
            initialValue={selectedPost.caption}
            initialValid={true}
          />
          <InputField
            id="content"
            type="textarea"
            label="Content"
            validators={[]}
            errorText="Image not valid."
            onInput={inputHandler}
            initialValue={selectedPost.content}
            initialValid={true}
          />
          <InputField
            id="cardImage"
            type="textarea"
            label="Card Image"
            validators={[]}
            errorText="Image not valid."
            onInput={inputHandler}
            initialValue={selectedPost.cardImage}
            initialValid={true}
          />
          <InputField
            id="creator"
            type="textarea"
            label="Creator"
            validators={[]}
            errorText="Creator is not valid."
            onInput={inputHandler}
            initialValue={selectedPost.creator}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Add Post
          </Button>
        </form>
      </NewPostFormContainer>
    )
  );
};

export default UpdatePostForm;
