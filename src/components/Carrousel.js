import { useState } from 'react'

import './Carrousel.css'
//TODO coment in english and use JSDoc
function Carrousel ({pictures})
{ 
  const [ pictureIndex, setPictureIndex ] = useState( 0 )
  
  function HandlePreviousClick ()
  {
    if ( pictureIndex === 0 )
    {
      let lastPicture = pictures.length-1
      setPictureIndex( lastPicture )
    } else
    {
      let previousPicture = pictureIndex - 1
      setPictureIndex( previousPicture )
    }
  }
  
  function HandleNextClick ()
  {
    if ( pictureIndex === pictures.length-1 )
    {
      let firstPicture = 0
      setPictureIndex( firstPicture )
    } else
    {
      let nextPicture = pictureIndex + 1
      setPictureIndex( nextPicture )
    }
  }
  
  const multipesPictures = pictures.length > 1
  return ( 
    <div className="carrousel">
      { multipesPictures &&
        <button
          className='carrousel__button carrousel__previous'
          onClick={ HandlePreviousClick }
        >
          précédent
        </button>
      }
        <img
        src={ pictures[pictureIndex] }
        alt="logement"
        className="carrousel__picture"
        />
        { multipesPictures &&
        <p className='carrousel__counter'> {pictureIndex+1} / {pictures.length} </p>
      }      
      { multipesPictures &&
        <button
          className='carrousel__button carrousel__next'
          onClick={HandleNextClick}
        >
          suivant
        </button>
      }
    </div>
  )
}

export default Carrousel
