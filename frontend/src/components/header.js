import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/public-dragons">
        Public Dragons
      </NavLink>
      <NavLink activeClassName="active" to="/account-dragons">
        My Dragons
      </NavLink>
    </nav>
  );
}

export default Header;