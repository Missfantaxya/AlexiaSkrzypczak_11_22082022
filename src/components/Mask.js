// imports : styles
import "./Mask.css"

/**
 * Renders a Mask component that displays a background and a message
 * @returns {JSX.Element} A JSX element that represents the Mask component
 */
function Mask ()
{
  return (
    <section className="home__mask">
        <div className="mask__background">
          <p className="mask__content">Chez vous,&nbsp;
            <span>partout et ailleurs</span>
          </p>
        </div>
    </section>
  )
}

export default Mask
