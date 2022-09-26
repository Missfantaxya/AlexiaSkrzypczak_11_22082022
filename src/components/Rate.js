import './Rate.css'


const Star = (size, color) => (
  <svg width={ size } height={ size } fill={ color } xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
  </svg>
)

function Rate() {
    return(
      <div>
        { Star( 16, "#FF6060" ) }
        { Star( 16, "#FF6060" ) }
        { Star( 16, "#FF6060" ) }
        { Star( 16, "#E3E3E3" ) }
        { Star( 16, "#E3E3E3" ) }
        </div>
    )
}

export default Rate
