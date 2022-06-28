import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import BooksList from "./pages/BooksList";

import BookType from "../types/BookType";

const booksListUrl = "/book-list";
const myBooksUrl = "/my-books";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={booksListUrl} />
      </Route>

      <Route path={booksListUrl}>
        <BooksList />
      </Route>
      <Route path={myBooksUrl}>MyBooks</Route>
    </Switch>
  );
}

export default App;
