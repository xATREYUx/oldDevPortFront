import React, { useState, useContext } from "react";
import { AuthFormContainer, FormContainer } from "./auth-page-styles";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared-components/util/validators";
import { useForm } from "../../shared-components/hooks/form-hook";
import InputField from "../../shared-components/form-elements/input-field";
import Button from "../../shared-components/form-elements/button";
import { useHttpClient } from "../../shared-components/hooks/http-hook";
import { AuthContext } from "../../shared-components/context/auth-context";

const Auth = () => {
  const authContext = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { error, sendRequest, clearError } = useHttpClient();
  console.log("auth-page authContext", authContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    console.log("authSubmitHandler button fired login");
    event.preventDefault();
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        authContext.login(
          responseData.userId,
          responseData.token,
          responseData.userPosts
        );
        console.log("responseData login", responseData);
      } catch (err) {
        console.log("responseData err1", err);
      }
    } else {
      try {
        console.log("authSubmitHandler button fired signup");
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/signup",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        authContext.login(responseData.userId, responseData.token);
        console.log("responseData signup", responseData);
      } catch (err) {
        console.log("responseData err2", err);
      }
    }
  };

  return (
    <AuthFormContainer className="authentication">
      <FormContainer>
        {/* {isLoading && <div>Loading...</div>} */}
        {isLoginMode ? <h2>Login</h2> : <h2>Sign Up</h2>}

        <form onSubmit={authSubmitHandler}>
          <InputField
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <InputField
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password, at least 5 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
      </FormContainer>
      <Button className="auth-button" inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </AuthFormContainer>
  );
};
export default Auth;
