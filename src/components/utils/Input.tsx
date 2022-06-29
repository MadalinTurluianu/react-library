import { FC } from "react";

import InputType from "@library/types/InputType";

const Input: FC<InputType> = (props) => {
  return (
    <div>
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
      />
    </div>
  );
};

export default Input;
