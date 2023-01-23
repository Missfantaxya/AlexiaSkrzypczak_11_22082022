// imports : styles
import './Rate.css'

/**
   * The rating component displays the satisfaction rate for the current host
   * @param {object} currentRate - Object containing host rate
   * @returns {JSX.Element} - Element representing host rate
   */
function Rate (currentRate)
{
  /**
   * @constant Star
   * @param {string} color - The fill color of the star
   * @returns {JSX.Element} Element representing the star in SVG format
   */
  const Star = (color) => (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
        fill={ color }
      />
    </svg>
  )

  /**
   *@constant {JSX.Element} fullStar - Element representing the full star in red
   */
  const fullStar = Star( "#FF6060" )
  /**
   *@constant {JSX.Element} emptyStar - Element representing the empty star in gray
   */
  const emptyStar = Star( "#E3E3E3" )

  /**
   *@constant {number} currentHostRate - Number of stars to display in full
   */
  const currentHostRate = parseInt( currentRate.currentRate , 10 ) 

  /**
   *@member {JSX.Element[]} stars - List of stars to display
   */
  let stars = []

  /**
    *@description - Loop that walks the range of currentHostRate and pushes the fullStar component to the star array.
    *@param {int} i - Iterator variable for loop
    *@param {int} currentHostRate - Current host rate, used to determine how many full stars to display
    *@param {component} fullStar - Full star component that is pushed to the star array
    */
  for (let i = 0; i < currentHostRate; i++) {
    stars.push( fullStar )
  }

  /**
   *@description - Conditional statement that checks if the currentHostRate is less than 5. If true, a second loop is executed that loops through the range of remaining empty stars and pushes the emptyStar component to the star array.
   *@param {int} i - Iterator variable for loop
   *@param {int} currentHostRate - Current host rate, used to determine how many empty stars to display
   *@param {int} 5 - Maximum number of stars that can be displayed
   *@param {component} emptyStar - Empty star component that is pushed to the stars array
   */
  if ( currentHostRate < 5 )
  {
    for (let i = currentHostRate+1; i < 6; i++) {
      stars.push( emptyStar )
    }
  }
  
  return (
      <div className='host__rate'>
      {
        stars.map( ( star,index ) =>
          <div key={index} className='host__star' >
            { star }
          </div> )
      }
    </div>
    )
}

export default Rate
