// imports : style
import "./Header.css"

// imports : components
import Banner from "./Banner"
import Nav from "./Nav"

/**
 * A functional component that represents the header of the website
 * @function
 * @returns {JSX.Element}
 */
function Header ()
{
  return (
    <header className="header">
      <Banner />
      <Nav />
    </header>)
}

export default Header
