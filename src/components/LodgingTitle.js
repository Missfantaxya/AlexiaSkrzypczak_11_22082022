

import './LodgingTitle.css'

import Tag from './Tag'

function LodgingDetails ( {currentLodging} ) {
    return(
      <div className="lodging__title">
        <h2 className="lodging__content">
          { currentLodging.title }
        </h2>
        <p className="lodging__location">
          { currentLodging.location }
        </p>
        <Tag currentTags= {currentLodging.tags} />
      </div>
    )
}

export default LodgingDetails
