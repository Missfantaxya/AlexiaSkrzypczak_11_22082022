import './Tag.css'

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
