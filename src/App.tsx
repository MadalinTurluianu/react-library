import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/navigation/Header";
import Library from "./pages/Library";
import User from "./pages/User";

const urls = {
  library: "/book-list",
  user: "/my-books",
};

function App() {
  return (
    <BrowserRouter>
      <Header urls={urls}/>
      <Switch>
        <Route path="/" exact>
          <Redirect to={urls.library} />
        </Route>
        <Route path={urls.library}>
          <Library/>
        </Route>
        <Route path={urls.user}>
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
