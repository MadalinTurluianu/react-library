import { FC } from "react";

import InputType from "common/utils/Input/InputType";

import classes from "./Input.module.css";

const Input: FC<InputType> = (props) => {
  return (
    <div className={classes.container}>
      {props.label && (
        <label htmlFor={props.id ? props.id : ""}>{props.label}</label>
      )}
      <input
        id={props.id ? props.id : ""}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required={props.required}
      />
    </div>
  );
};

export default Input;
