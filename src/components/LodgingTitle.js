

import './LodgingTitle.css'

import Tag from './Tag'

function LodgingDetails ({
  id,
  title,
  cover,
} )
{
  
    return(
      <div className="lodging__title">
        <h2 className="lodging__content">Test id : {id}</h2>
        <p className="lodging__location">Paris, Île-de-France</p>
        <Tag />
      </div>
    )
}

export default LodgingDetails
