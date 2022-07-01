import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { MouseEventHandler, useState } from "react";

import Card from "../components/UI/Card";
import BookList from "../components/book-list/BookList";
import ReturnModal from "components/user/ReturnModal";

import BookType from "@library/types/BookType";

import { userActions } from "store/slices/userSlice";
import { libraryActions } from "store/slices/librarySlice";


const User = () => {
  const [currentBook, setCurrentBook] = useState<BookType | null>(null);
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch()

  const books: BookType[] = useSelector((state: any) => state.user.books);

  const returnButtonClickHandler = (book: BookType) => {
    setCurrentBook(book);
    history.push(`${match.path}/return-${book!.id}`);
  };

  const closeModalHandler = () => {
    history.goBack();
    setCurrentBook(null);
  };

  const paymentHandler: MouseEventHandler = () => {
    dispatch(userActions.removeBook(currentBook!))
    dispatch(libraryActions.returnBook(currentBook!))
    closeModalHandler();
  }

  return (
    <Card>
      {currentBook && (
        <Route path={`${match.path}/return-${currentBook!.id}`} exact>
          <ReturnModal book={currentBook!} closeModalHandler={closeModalHandler} onPay={paymentHandler}/>
        </Route>
      )}

      <h1 className="font-bold">User</h1>
      <BookList
        books={books}
        eventHandler={returnButtonClickHandler}
        owner="user"
      />
    </Card>
  );
};

export default User;
