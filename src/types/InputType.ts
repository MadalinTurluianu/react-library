import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from "react";

type InputType = {
  label?: string;
  id?: string;
  value?: string | number;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
  onClick?: MouseEventHandler;
  type: string
  required?: boolean;
};

export default InputType;
