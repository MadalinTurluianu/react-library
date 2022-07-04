import {
  FC,
  FormEventHandler,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";

import { useDispatch } from "react-redux";
import { libraryActions } from "store/slices/librarySlice";

import { useHistory } from "react-router-dom";

import Input from "common/utils/Input/Input";

import BookType from "common/types/BookType";

import classes from "./AddBookForm.module.css";

const AddBookForm: FC<{ baseUrl: string }> = (props) => {
  const [title, setTitle] = useState("");
  const [ISBN, setISBN] = useState("");
  const [cost, setCost] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.id === "Title") {
      setTitle(event.target.value);
    } else if (event.target.id === "ISBN") {
      setISBN(event.target.value);
    } else if (event.target.id === "Price") {
      setCost(event.target.value);
    }
  };

  const validateUserInput = () => {
    if (title.trim() === "") {
      return false;
    }

    if (
      !(
        ISBN.trim().match(/\d+?-\d+?-\d+?-\d+?-\d+?/g) &&
        ISBN.trim().length === 17
      )
    ) {
      return false;
    }

    if (!(Number(cost) > 0)) {
      return false;
    }

    return true;
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();

    const inputsAreValid = validateUserInput();

    if (!inputsAreValid) return;

    const book: BookType = {
      title: title.trim(),
      ISBN: ISBN.trim(),
      cost: Number(cost),
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
          id="Title"
          type="text"
          label="Title"
          value={title}
          onChange={changeHandler}
          required={true}
        />
        <Input
          id="ISBN"
          type="text"
          label="ISBN"
          value={ISBN}
          onChange={changeHandler}
          required={true}
        />
        <Input
          id="Price"
          type="number"
          label="Price"
          value={cost}
          onChange={changeHandler}
          required={true}
        />
      </div>
      <div className={classes["buttons-container"]}>
        <button className="index__reverse-button" type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="index__classic-button">Submit</button>

      </div>
    </form>
  );
};

export default AddBookForm;
