import './Tag.css'

function Tag ( { currentTags } )
{
  return (
    <ul className='tags__list'>
      { currentTags.map( ( tag ) =>
        <li
          key={ tag }
          className={ `tag ${ tag.length > 12 ? "tag--long" : "tag--short" }` }>
          { tag }
        </li>
      )}
    </ul>
  )
}

export default Tag
