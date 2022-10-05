import './LodgingTitle.css'

import Tag from './Tag'

function LodgingDetails() {
    return(
      <div className="lodging__title">
        <h2 className="lodging__content">Paris center, on the romantic Canal Saint-Martin</h2>
        <p className="lodging__location">Paris, Île-de-France</p>
        <Tag />
      </div>
    )
}

export default LodgingDetails
