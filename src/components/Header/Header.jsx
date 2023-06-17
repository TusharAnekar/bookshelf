import { NavLink } from "react-router-dom";

import "./header.css"

export function Header() {
  return (
    <nav className="nav_container">
      <NavLink to={"/"} className={"links"}>Home</NavLink>
      <NavLink to={"/search"} className={"links"}>Search</NavLink>
    </nav>
  );
}
