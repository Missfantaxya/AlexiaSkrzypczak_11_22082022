// imports : npm
import { useState } from 'react'

// imports : components
import './Carrousel.css'

/**
 * Functional component returns a carousel element.
 * @function Carrousel
 * @param {Array.<string>} pictures - Array of image URLs to display in the carousel.
 * @returns {JSX.Element} - The JSX element for the carousel.
 */
function Carrousel ({pictures})
{ 
  /**
   * A boolean indicating if there are multiple pictures in the pictures array.
   * @constant {boolean}
   */
  const multipesPictures = pictures.length > 1
  
  const [ pictureIndex, setPictureIndex ] = useState( 0 )
  
  /**
   * Handles the event of clicking the "previous" button.
   * Changes the displayed image to the previous image in the pictures array.
   * If the current image is the first image, it will display the last image.
   * @function
   */
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
  
  /** 
   * Handles the event of clicking the "next" button.
   * Changes the displayed image to the next image in the pictures array.
   * If the current image is the last image, it will display the first image.
   * @function
   */
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
          <p className='carrousel__counter'>
            { pictureIndex + 1 } / { pictures.length }
          </p>
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
