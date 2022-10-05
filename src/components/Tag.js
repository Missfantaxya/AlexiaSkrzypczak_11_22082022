import './Tag.css'

// TODO faire le map pour afficher tous les tags.


function Tag()
{
  const tags = [
  'Cozy',
  'Canal',
  'Paris 10'
  ]

  return (
    <ul className='tags__list'>
      {tags.map((tag)=>
        <li key={tag} className='tag'>
        {tag}
      </li>)}
    </ul>
  )
}

export default Tag
