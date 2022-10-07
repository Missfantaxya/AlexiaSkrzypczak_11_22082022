import { Link } from "react-router-dom"

import "./Thumb.css"

// TODO rendre le lien dynamique (https://reactrouter.com/en/main/route/route#dynamic-segments)

// FIXME créer une var avec {cover} pour l'utiliser en background image à la place de la balise image.

function Thumb ( {
  id,
  title,
  cover,
} )
{
  let coverImage = {cover}
  let divStyle = {
    backgroundImage: "url("+{ coverImage }+")",
    background: 'linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%)'
}
  return (
    <article className="thumb">
      <Link to="/lodging"  >
        <div className="thumb__background" style={divStyle} >
          {/* <img
            className="thumb__cover"
            src={ cover }
            alt=""
          /> */}
          <h2 className="thumb__content">
            { title }
          </h2>
        </div>
      </Link>
    </article>
  )
}

export default Thumb
