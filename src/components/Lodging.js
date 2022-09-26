import "./Lodging.css"

import Carrousel from "./Carrousel"
import Tag from "./Tag"
import Host from "./Host"
import Rate from "./Rate"

function Lodging()
{
  return (
    <>
      <Carrousel />
      <div className="lodging__content">
        <div className="lodging__title">
          <h2 className="lodging__description">Paris center, on the romantic Canal Saint-Martin</h2>
          <p className="lodging__location">Paris, Île-de-France</p>
          <Tag />
        </div>
        <div className="lodging__details">
          <Host />
          <div>
            <Rate />
          </div>
        </div>
      </div>
    </>
  )
}

export default Lodging
