import './Rate.css'



function Rate (currentRate)
{
const Star = (color) => (
  <div className='host__star'>
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
        fill={ color }
      />
    </svg>
  </div>
  )

  // console.log( "currentRate : ", currentRate ) //* string
  const hostRate = parseInt( currentRate.currentRate , 10 ) 
  console.log( "hostRate : ", hostRate ) //*

    return (
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
