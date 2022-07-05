import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

import Header from "common/components/Header/Header";
import Library from "pages/Library/Library";
import User from "pages/User/User";

import { useEffect } from "react";

import { libraryActions } from "store/slices/librarySlice";
import { userActions } from "store/slices/userSlice";
import BookType from "common/types/BookType";

const baseUrl = "/react-library";
const urls = {
  base: baseUrl,
  library: baseUrl + "/library-books",
  user: baseUrl + "/my-books",
};

function App() {
  const libraryBooks = useSelector((state: any) => state.library.books);
  const userBooks = useSelector((state: any) => state.user.books);

  const dispatch = useDispatch();

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
  }, [dispatch]);

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

    sendData({ libraryBooks: libraryBooks, userBooks: userBooks });
  }, [libraryBooks, userBooks]);

  return (
    <>
      <Header urls={urls} />
      <Switch>
        <Route path={urls.base} exact>
          <Redirect to={urls.library} />
        </Route>
        <Route path={urls.library}>
          <Library />
        </Route>
        <Route path={urls.user}>
          <User />
        </Route>
      </Switch>
    </>
  );
}

export default App;
