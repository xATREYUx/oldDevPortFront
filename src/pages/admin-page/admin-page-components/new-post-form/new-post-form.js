import React, { useContext, useEffect, useState } from "react";
import { NewPostFormContainer } from "../../../../shared-components/form-elements/form-elements-style";
import InputField from "../../../../shared-components/form-elements/input-field";
import Button from "../../../../shared-components/form-elements/button";
import ImageUpload from "../../../../shared-components/form-elements/image-upload";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../../shared-components/util/validators";

import { useForm } from "../../../../shared-components/hooks/form-hook";
import { AuthContext } from "../../../../shared-components/context/auth-context";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "../../../../shared-components/hooks/http-hook";

const NewPostForm = () => {
  console.log("----NewPostForm Fired----");
  const auth = useContext(AuthContext);
  const [resetForm, setResetForm] = useState(false);
  const history = useHistory();
  const { error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {}, [resetForm]);
  const INITIAL_VALUES = {
    title: {
      value: "",
      isValid: false,
    },
    caption: {
      value: "",
      isValid: false,
    },
    content: {
      value: "",
      isValid: true,
    },
    cardImage: {
      value: "",
      isValid: true,
    },
    postImages: {
      value: [],
      isValid: true,
    },
  };
  const [formState, inputHandler, setFormData] = useForm(INITIAL_VALUES, false);

  const postSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("---postSubmitHandler Fired---");
    try {
      console.log("newPost formState fired", JSON.stringify(formState));
      let formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("caption", formState.inputs.caption.value);
      formData.append("content", formState.inputs.content.value);
      formData.append("cardImage", formState.inputs.cardImage.value);
      // formData.append("postImages", formState.inputs.postImages.value);
      // formData.append("creator", formState.inputs.creator.value);

      await sendRequest("http://localhost:5000/api/posts", "POST", formData, {
        Authorization: "Bearer " + auth.token,
      });
      // titleRef.current.value = "";
      // captionRef.current.value = "";
      // contentRef.current.value = "";
      // cardImageRef.current.value = "";
      for (var key of formData.entries()) {
        inputHandler(key[0], "0000", true);
        console.log("key", key[0]);
        console.log("key", key[1]);
        console.log("formData", key[0] + ", " + key[1]);
        // console.log("formData", key[0] + ", " + key[1]);
      }
      console.log("formData log", formData.title);
      setResetForm(!resetForm);
      // // history.push("/admin-page");
    } catch (err) {
      console.log("postSubmitHander err", err, error);
    }
  };

  return (
    <NewPostFormContainer>
      <form id="newPostForm" className="post-form" onSubmit={postSubmitHandler}>
        <h2>New Post</h2>
        <InputField
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <InputField
          id="caption"
          element="input"
          type="textarea"
          label="Caption"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid caption."
          onInput={inputHandler}
        />
        <InputField
          id="content"
          // element="input"
          type="textarea"
          label="Content"
          validators={[]}
          errorText="Content not valid."
          onInput={inputHandler}
        />
        <ImageUpload
          id="cardImage"
          onInput={inputHandler}
          errorText="Please provide an image."
        />
        {/* <InputField
          id="creator"
          element="input"
          type="textarea"
          label="Creator"
          validators={[]}
          errorText="Creator is not valid."
          onInput={inputHandler}
        /> */}
        <Button type="submit" disabled={!formState.isValid}>
          Add Post
        </Button>
      </form>
    </NewPostFormContainer>
  );
};

export default NewPostForm;
