import './Rate.css'



function Rate ()
{
  let StarSize
  if ( window.screen.width <= 375 )
  {
  StarSize= 15
  }
  else if ( window.screen.width > 375 && window.screen.width < 1440 )
  {
    // TODO voir pour le choix d ela valeur
    StarSize= 25
  }
  else if ( window.screen.width >= 1440 ){
    StarSize= 30
  }

   //FIXME erreur console sur la width du svg
const Star = (color) => (
  <div className='host__star'>
    <svg width={ StarSize } height={ StarSize } fill={ color } xmlns="http://www.w3.org/2000/svg">
      <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" width={ StarSize } height={ StarSize } fill={ color } />
    </svg>
  </div>
  )

    return(
      <div className='host__rate'>
        { Star( "#FF6060" ) }
        { Star( "#FF6060" ) }
        { Star("#FF6060" ) }
        { Star( "#E3E3E3" ) }
        { Star( "#E3E3E3" ) }
      </div>
    )
}

export default Rate
