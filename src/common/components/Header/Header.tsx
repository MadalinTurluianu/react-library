import { FC } from "react";

import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const class__ActiveLink = "text-red-600"

const Header: FC<{ urls: Record<string, string> }> = (props) => {
  
  return (
    <header className={`bg-black flex justify-end p-2 ${classes.header}`}>
      <nav>
        <button>
          <NavLink activeClassName={class__ActiveLink} to={props.urls.library}>Library</NavLink>
        </button>
        <button>
          <NavLink activeClassName={class__ActiveLink} to={props.urls.user}>User</NavLink>
        </button>
      </nav>
    </header>
  );
};

export default Header;
