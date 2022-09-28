import "./Lodging.css"

import Carrousel from "./Carrousel"
import LodgingTitle from "./LodgingTitle"
import HostDetails from "./HostDetails"

function Lodging()
{
  return (
    <>
      <Carrousel />
      <div className="lodging">
        <LodgingTitle/>
        <HostDetails />
      </div>
    </>
  )
}

export default Lodging
