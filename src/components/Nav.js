import { NavLink } from "react-router-dom";

import "./Nav.css"

function Nav ()
{
  let activeStyle = { textDecoration: "underline" };

  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
