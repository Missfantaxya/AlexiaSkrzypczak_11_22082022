// imports : styles
import "./HostDetails.css"

//imports : components
import Host from "./Host"
import Rate from "./Rate"

/** 
 * Renders a host details component
 * @param {object} props - The component props.
 * @param {object} props.currentHost - An object that contains current host information.
 * @param {object} props.currentRate - An object that contains the current host's rating information.
 * @returns {JSX.Element} A JSX element that represents the host details component.
 */
function HostDetails ( {currentHost, currentRate} )
{
  return (
    <div className="host__details">
          <Host currentHost={ currentHost }/>
          <Rate currentRate={ currentRate }/>
    </div>
  )
}

export default HostDetails
