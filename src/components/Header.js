import "./Header.css"
import Banner from "./Banner"
import Nav from "./Nav"
//TODO coment in english and use JSDoc
function Header ()
{
  return (
    <header className="header">
      <Banner />
      <Nav />
    </header>)
}

export default Header
