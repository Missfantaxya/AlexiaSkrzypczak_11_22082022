import { Link } from "react-router-dom"

import "./Thumb.css"

// TODO rendre le lien dynamique (https://reactrouter.com/en/main/route/route#dynamic-segments)

function Thumb ( {
  id,
  title,
  cover,
} )
  {
return (
    <article className="thumb">
      <Link to="/lodging"  >
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
