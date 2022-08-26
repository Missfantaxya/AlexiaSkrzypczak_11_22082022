import { NavLink } from "react-router-dom";

import "./Nav.css"

function Nav ()
{
  let activeStyle = { textDecoration: "underline" };
  // TODO vérifier si on peut garder activeStyle aussi pour la page /about plutôt que de passerpar la className
  // let activeClassName = "underline";

  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li>
          <NavLink
            to="home"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          {/* <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          > */}
            A propos
          {/* </NavLink> */}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
