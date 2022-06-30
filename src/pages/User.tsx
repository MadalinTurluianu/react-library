import { useSelector } from "react-redux";

import Card from "../components/UI/Card";
import BookList from "../components/book-list/BookList";

import BookType from "@library/types/BookType";

import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import ReturnModal from "components/user/ReturnModal";

const User = () => {
  const [currentBook, setCurrentBook] = useState<BookType | null>(null);
  const match = useRouteMatch();
  const history = useHistory()

  const books: BookType[] = useSelector((state: any) => state.user.books);
  const storeName: string = useSelector((state: any) => state.user.name);

  const returnButtonClickHandler = (book: BookType) => {
    setCurrentBook(book);
    history.push(`${match.path}/return-${book!.id}`)
  };

  return (
    <Card>
      {currentBook && (
        <Route path={`${match.path}/return-${currentBook!.id}`} exact>
          <ReturnModal book={currentBook!} />
        </Route>
      )}

      <h1>User</h1>
      <BookList
        books={books}
        eventHandler={returnButtonClickHandler}
        owner={storeName}
      />
    </Card>
  );
};

export default User;
