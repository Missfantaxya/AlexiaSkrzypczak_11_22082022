// imports : npm
import { NavLink } from "react-router-dom";

//imports : styles
import "./Nav.css"

/**
 * Nav is a component that displays a navigation bar with links to the home page and the about page.
 * @returns {JSX.Element} JSX element that represents the navigation bar.
 */
function Nav ()
{

  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__item--home">
          <NavLink
            className={({ isActive }) =>
              isActive && "activeStyle" }
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li className="nav__item--about">
          <NavLink
            className={ ( { isActive } ) => isActive && "activeStyle" }
            to="about"
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
