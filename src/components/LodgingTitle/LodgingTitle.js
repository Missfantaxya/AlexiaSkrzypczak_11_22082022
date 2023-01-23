// imports : styles
import './LodgingTitle.css'

//imports : components
import Tag from '../Tag/Tag'

/**
 * Renders the title and location of a slot, and its tags.
 * @param {Object} currentLodging - Lodging object that contains the title, location and tags of the lodging.
 * @returns {JSX.Element} JSX element that represents slot title, location and tags.
 */
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
