import { Link } from "react-router-dom"

import "./Thumb.css"

//TODO coment in english and use JSDoc
function Thumb ( {
  id,
  title,
  cover,
} )
{
  const theCover = <img
            className="thumb__cover"
            src={ cover }
            alt="" />
  
  const hasCover =  cover  !== undefined
  
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
