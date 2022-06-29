import { FC, FormEventHandler, useState } from "react";

import Input from "components/utils/Input";
import { ChangeEventHandler } from "react";



const AddBookForm: FC = () => {
  const [title, setTitle] = useState("");
  const [ISBN, setISBN] = useState("");
  const [price, setPrice] = useState("");

  const clearFields = () => {
    setTitle("");
    setISBN("");
    setPrice("");
  };

  const validateUserInput = () => {
  
  }

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.id === "Title") {
      setTitle(event.target.value);
    } else if (event.target.id === "ISBN") {
      setISBN(event.target.value);
    } else if (event.target.id === "Price") {
      setPrice(event.target.value);
    }
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();

    const inputsAreValid = validateUserInput();

    clearFields();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <Input
          id="Title"
          type="text"
          label="Title"
          value={title}
          onChange={changeHandler}
        />
        <Input
          id="ISBN"
          type="text"
          label="ISBN"
          value={ISBN}
          onChange={changeHandler}
        />
        <Input
          id="Price"
          type="text"
          label="Price"
          value={price}
          onChange={changeHandler}
        />
      </div>
      <button>Submit</button>
      <button type="button">Cancel</button>
    </form>
  );
};

export default AddBookForm;
