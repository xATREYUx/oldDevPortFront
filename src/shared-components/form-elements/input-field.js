import React, { useReducer, useEffect, forwardRef } from "react";
import { InputFieldContainer } from "./form-elements-style";
import { validate } from "../util/validators";

const inputReducer = (state, action) => {
  console.log("inputReducer State", state);
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCHED":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const InputField = forwardRef((props, ref) => {
  const [inputFieldState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputFieldState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchedHandler = () => {
    dispatch({
      type: "TOUCHED",
    });
  };

  const element =
    props.element === "input" ? (
      (console.log("inputFieldState.value", inputFieldState.value),
      (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={onChangeHandler}
          onBlur={touchedHandler}
          value={inputFieldState.value}
          // ref={ref}
        />
      ))
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 6}
        onChange={onChangeHandler}
        onBlur={touchedHandler}
        value={inputFieldState.value}
      />
    );

  return (
    <InputFieldContainer>
      <div
        className={`${!inputFieldState.isValid &&
          inputFieldState.isTouched &&
          "input-invalid"}`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputFieldState.isValid && inputFieldState.isTouched && (
          <p>{props.errorText}</p>
        )}
      </div>
    </InputFieldContainer>
  );
});
export default InputField;
