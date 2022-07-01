import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/navigation/Header";
import Library from "./pages/Library";
import User from "./pages/User";

import { useEffect } from "react";

import { libraryActions } from "store/slices/librarySlice";
import { userActions } from "store/slices/userSlice";
import BookType from "./types/BookType";

const urls = {
  library: "/library-books",
  user: "/my-books",
};

function App() {
  const libraryBooks = useSelector((state: any) => state.library.books);
  const userBooks = useSelector((state: any) => state.user.books);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendData = async (allBooks: {
      libraryBooks: BookType[];
      userBooks: BookType[];
    }) => {
      const response = await fetch(
        "https://react-practice-ac818-default-rtdb.europe-west1.firebasedatabase.app/books.json",
        {
          method: "PUT",
          body: JSON.stringify(allBooks),
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    };

    sendData({libraryBooks: libraryBooks, userBooks: userBooks});
  }, [libraryBooks, userBooks]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-practice-ac818-default-rtdb.europe-west1.firebasedatabase.app/books.json"
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result: { libraryBooks: BookType[]; userBooks: BookType[] } =
        await response.json();

      return result;
    };

    fetchData()
      .then((result) => {
        if (result.libraryBooks) {
          dispatch(libraryActions.addAllBooks(result.libraryBooks));
        }
        if (result.userBooks) {
          dispatch(userActions.addAllBooks(result.userBooks));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header urls={urls} />
      <Switch>
        <Route path="/" exact>
          <Redirect to={urls.library} />
        </Route>
        <Route path={urls.library}>
          <Library />
        </Route>
        <Route path={urls.user}>
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
