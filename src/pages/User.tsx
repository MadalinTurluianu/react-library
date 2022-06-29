import { useSelector, useDispatch } from "react-redux";

import Card from "../components/UI/Card";
import BookList from "../components/book-list/BookList";

import BookType from "@library/types/BookType";

import { libraryActions } from "../store/slices/librarySlice";
import { userActions } from "../store/slices/userSlice";

const User = () => {
  const dispatch = useDispatch();

  const books: BookType[] = useSelector((state: any) => state.user.books);

  const returnBookHandler = (book: BookType) => {
    dispatch(userActions.returnBook(book.ISBN));
    dispatch(libraryActions.addBook(book))
  }

  return (
    <Card>
      <h1>User</h1>
      <BookList books={books} eventHandler={returnBookHandler}/>
    </Card>
  );
};

export default User;
