import { FC } from "react";

import classes from "./Header.module.css";

import { NavLink } from "react-router-dom";

const Header: FC<{ urls: Record<string, string> }> = (props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <button>
          <NavLink to={props.urls.library}>Library</NavLink>
        </button>
        <button>
          <NavLink to={props.urls.user}>User</NavLink>
        </button>
      </nav>
    </header>
  );
};

export default Header;
