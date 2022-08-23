import "./Lodging.css"

import Carrousel from "./Carrousel"

function Lodging()
{
  return (
    <>
      <Carrousel />
      <div className="lodging__content">
        <div className="lodging__title">
            <h2 className="lodging__description">Paris center, on the romantic Canal Saint-Martin</h2>
            <p className="lodging__location">Paris, Île-de-France</p>
        </div>
        <div className="lodging__details">
          <div> Les tags FAIRE COMPOSANT</div>
          <div> Notation FAIRE COMPOSANT </div>
        </div>
        <div className="lodging__host">
          <div className="host__name">
            <p>Alexandre</p>
            <p>Dumas</p>
          </div>
          <div className="host__picture">photo</div>
        </div>
        
      </div>
    </>
  )
}

export default Lodging
