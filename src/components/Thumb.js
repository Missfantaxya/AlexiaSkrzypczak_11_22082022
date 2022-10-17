import { Link } from "react-router-dom"

import "./Thumb.css"

function Thumb ( {
  id,
  title,
  cover,
} )
{
  
return (
  <article className="thumb" id={ id }>
      <Link to={`/lodging/:${id}`}  >
        <div className="thumb__background" >
          <img
            className="thumb__cover"
            src={ cover }
            alt=""
          />
          <h2 className="thumb__content">
            { title }
          </h2>
        </div>
      </Link>
    </article>
  )
}

export default Thumb
