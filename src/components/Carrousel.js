import './Carrousel.css'

import coverMobile from '../assets/statique-carrousel-mobile.png'
import coverDesktop from '../assets/statique-carrousel-desktop.png'



function Carrousel ()
{
  const OnDesktop = window.screen.width >= 1440;
  const cover = !OnDesktop ? coverMobile : coverDesktop

  return ( 
    <div className="carrousel">
        <button className='carrousel__button carrousel__previous'>
          précédent
        </button>
      <img
        src={ cover }
        alt="logement"
        className="carrousel__picture" />
        <button className='carrousel__button carrousel__next'>
          suivant
        </button>
    </div>
  )
}

export default Carrousel
