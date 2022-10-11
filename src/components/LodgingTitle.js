import { useParams } from 'react-router-dom'

import './LodgingTitle.css'

import Tag from './Tag'

function LodgingDetails ()
{
  const { id } = useParams();
    return(
      <div className="lodging__title">
        <h2 className="lodging__content">Test id : {id}</h2>
        <p className="lodging__location">Paris, Île-de-France</p>
        <Tag />
      </div>
    )
}

export default LodgingDetails
