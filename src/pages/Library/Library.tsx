import { useSelector, useDispatch } from "react-redux";

//import classes from "./Library.module.css"

import Card from "common/UI/Card/Card";
import BookList from "common/components/BookList/BookList";
import AddBookForm from "pages/Library/components/AddBookForm/AddBookForm";

import BookType from "common/types/BookType";

import { FC } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";

import { libraryActions } from "store/slices/librarySlice";
import { userActions } from "store/slices/userSlice";

const Library: FC = () => {
  const dispatch = useDispatch();

  const match = useRouteMatch();
  const history = useHistory();

  const books: BookType[] = useSelector((state: any) => state.library.books);

  const borrowBookHandler = (book: BookType) => {
    dispatch(libraryActions.borrowBook(book.ISBN));
    dispatch(userActions.addBook(book));
  };

  const openAddBookFormHandler = () => {
    history.push(`${match.path}/add-book`);
  };

  return (
    <Card>
      <Switch>
        <Route path={match.path} exact>
          <button className="my-5 index__classic-button" onClick={openAddBookFormHandler}>Add Book</button>
        </Route>
        <Route path={`${match.path}/add-book`}>
          <AddBookForm baseUrl={match.path} />
        </Route>
      </Switch>
      <h1 className="index__classic-h1">Library</h1>
      <BookList
        books={books}
        eventHandler={borrowBookHandler}
        owner="library"
      />
    </Card>
  );
};

export default Library;
