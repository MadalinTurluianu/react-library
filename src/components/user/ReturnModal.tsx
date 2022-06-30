import { FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";

import BookType from "@library/types/BookType";

import { userActions } from "store/slices/userSlice";
import { libraryActions } from "store/slices/librarySlice";

const ReturnModal: FC<{book: BookType}> = (props) => {
  const dispatch = useDispatch();

  const paymentHandler: MouseEventHandler = () => {
    dispatch(userActions.removeBook(props.book));
    dispatch(libraryActions.returnBook(props.book))
  };

  return (
    <div>
      <p>{props.book.cost}</p>
      <button onClick={paymentHandler}>Pay</button>
      <button>Cancel</button>
    </div>
  );
};

export default ReturnModal;
