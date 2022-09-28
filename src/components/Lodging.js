import "./Lodging.css"
import Dropdown from "./Dropdown"

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
      <Dropdown />
    </>
  )
}

export default Lodging
