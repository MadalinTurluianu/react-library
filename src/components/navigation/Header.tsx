import { FC } from "react";

import { NavLink } from "react-router-dom";

const Header: FC<{ urls: Record<string, string> }> = (props) => {
  const buttonClass = "text-white text-xl font-bold mx-3";
  
  return (
    <header className="bg-black flex justify-end p-2">
      <nav>
        <button className={buttonClass}>
          <NavLink to={props.urls.library}>Library</NavLink>
        </button>
        <button className={buttonClass}>
          <NavLink to={props.urls.user}>User</NavLink>
        </button>
      </nav>
    </header>
  );
};

export default Header;
