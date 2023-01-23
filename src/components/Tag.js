// imports : styles
import './Tag.css'

/**
 * This component restores the list of tags of an accommodation.
 * @param {Object} currentTags - Object containing current tags for a slot
 * @returns {JSX} - Element of the list of tags in JSX format
 */
function Tag ( { currentTags } )
{
  return (
    <ul className='tags__list'>
      { currentTags.map( ( tag ) =>
        <li
          key={ tag }
          className="tag" >
          { tag }
        </li>
      )}
    </ul>
  )
}

export default Tag
