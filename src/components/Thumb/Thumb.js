//imports : npm
import { Link } from "react-router-dom"

// imports : styles
import "./Thumb.css"

/**
 * @function
 * @param {Object} props - Contains the following properties
 * @param {string} props.id - Slot ID
 * @param {string} props.title - Slot title
 * @param {string} props.cover - Slot cover image
 * @returns {JSX.Element} - JSX element representing a thumbnail of a slot with title and cover image
 */
function Thumb ( {
  id,
  title,
  cover,
} )
{
  /**
   * @constant
   * @type {ReactElement} - JSX element that renders housing cover image
   */
  const theCover = <img
            className="thumb__cover"
            src={ cover }
            alt="" />
  /**
   * @constant
   * @type {boolean} - Boolean that checks if the slot has a cover image
   */
  const hasCover = cover !== undefined
  
  /**
   * @constant
   * @type {string} - String that represents the CSS class to apply when the slot has no cover image 
   */
  const notCover = "thumb--red"

return (
  <article
    className={ `thumb ${ !hasCover ? notCover : "" }` }
    id={ id }
  >
      <Link to={`/lodging/:${id}`}  >
      <div className="thumb__background" >
        { hasCover && theCover }
          <h2 className="thumb__content">
            { title }
          </h2>
        </div>
      </Link>
    </article>
  )
}

export default Thumb
