import {
  FC,
  FormEventHandler,
  ChangeEventHandler,
  MouseEventHandler,
  useReducer,
} from "react";
import { useDispatch } from "react-redux";
import { libraryActions } from "store/slices/librarySlice";
import { useHistory } from "react-router-dom";
import Input from "common/utils/Input/Input";
import BookType from "common/types/BookType";
import InputsObjectType from "./types/InputsObjectType";
import ActionTypeType from "./types/ActionTypeType";
import classes from "./AddBookForm.module.css";
import validateUserInput from "./helpers/validateUserInput";

const inputsInitialState: InputsObjectType = {
  ISBN: {
    value: "",
    isValid: false
  },
  title: {
    value: "",
    isValid: false
  },
  cost: {
    value: "",
    isValid: false
  },

  allValid: false
}

const inputsReducer = (
  state: InputsObjectType,
  action: {
    type: ActionTypeType,
    payload: string;
  }
) => {
  const newInputs = { ...state };

  if (newInputs[action.type]) {
    newInputs[action.type].value = action.payload;
    newInputs[action.type].isValid = validateUserInput(action.type, action.payload);
  }

  newInputs.allValid = newInputs.ISBN.isValid && newInputs.title.isValid && newInputs.cost.isValid
  
  return newInputs;
};

const AddBookForm: FC<{ baseUrl: string }> = (props) => {
  const [inputs, dispatchInputs] = useReducer(inputsReducer, inputsInitialState);

  const dispatch = useDispatch();

  const history = useHistory();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatchInputs({ type: event.target.id as ActionTypeType, payload: event.target.value });
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();

    console.log(inputs);
    
    if (!inputs.allValid) return;
    console.log("here");

    
    const book: BookType = {
      title: inputs.title.value.trim(),
      ISBN: inputs.ISBN.value.trim(),
      cost: Number(inputs.cost.value),
      number: 1,
    };

    dispatch(libraryActions.addBook(book));

    history.push(props.baseUrl);
  };

  const cancelHandler: MouseEventHandler = () => {
    history.push(props.baseUrl);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <Input
          id="title"
          type="text"
          label="Title"
          value={inputs.title.value}
          onChange={changeHandler}
          required={true}
        />
        <Input
          id="ISBN"
          type="text"
          label="ISBN"
          value={inputs.ISBN.value}
          onChange={changeHandler}
          required={true}
        />
        <Input
          id="cost"
          type="number"
          label="Price"
          value={inputs.cost.value}
          onChange={changeHandler}
          required={true}
        />
      </div>
      <div className={classes["buttons-container"]}>
        <button
          className="index__reverse-button"
          type="button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className="index__classic-button">Submit</button>
      </div>
    </form>
  );
};

export default AddBookForm;
