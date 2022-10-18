import './Carrousel.css'

// passer par le css

function Carrousel ({pictures})
{
  // console.log("pictures : ",pictures) //* array
  
  const multipesPictures = pictures.length > 1
  function handlClickPrevious ()
  {
  // https://www.youtube.com/watch?v=fjsJLcGWjcU
  }

  return ( 
    <div className="carrousel">
        {multipesPictures && <button className='carrousel__button carrousel__previous'>
      précédent
    </button>}
      <div className='carroussel__container'>
        {pictures.map((picture, index) =>
          <img
            key={index}
          src={ picture }
          alt="logement"
          className = "carrousel__picture" />
        ) }
      </div>
      {multipesPictures &&  <button className='carrousel__button carrousel__next'>
      suivant
    </button>}
    </div>
  )
}

export default Carrousel
