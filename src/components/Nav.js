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
  /**
   * activeStyle is a variable that sets the style for active links in the navigation menu.
   * @type {Object}
   * @property {string} textDecoration - The underline style for active links.
   */
  let activeStyle = { textDecoration: "underline" };

  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__item--home">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="nav__item--about">
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
