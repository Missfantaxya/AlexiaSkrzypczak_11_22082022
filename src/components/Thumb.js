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
      <Link to="/lodging" className="thumb__background">
        <p className="thumb__content">Titre de la location</p>
      </Link>
    </article>
  )
}

export default Thumb
