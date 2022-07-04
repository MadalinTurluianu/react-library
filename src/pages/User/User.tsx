import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { MouseEventHandler, useState } from "react";

import Card from "common/UI/Card/Card";
import BookList from "common/components/BookList/BookList";
import ReturnModal from "pages/User/components/ReturnModal/ReturnModal";

import BookType from "common/types/BookType";

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

      <h1 className="index__classic-h1">User</h1>
      <BookList
        books={books}
        eventHandler={returnButtonClickHandler}
        owner="user"
      />
    </Card>
  );
};

export default User;
