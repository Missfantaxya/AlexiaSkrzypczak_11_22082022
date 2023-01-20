// imports : components
import "./Footer.css"

/**
 * A functional component that represents the footer of the website
 * @function
 * @returns {JSX.Element}
 */
function Footer ()
{
  return (
    <footer className="footer">
      <div className="footer__logo">
        Kasa
      </div>
      <p className="footer__content">
        &copy; 2020 Kasa. All right reserved
      </p>
    </footer>
  )
}

export default Footer
