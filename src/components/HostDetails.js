import "./HostDetails.css"

import Host from "./Host"
import Rate from "./Rate"

//TODO coment in english and use JSDoc
function HostDetails ( {currentHost, currentRate} )
{
  // console.log("currentRate : ",currentRate) //*
  return (
    <div className="host__details">
          <Host currentHost={ currentHost }/>
          <Rate currentRate={ currentRate }/>
    </div>
  )
}

export default HostDetails
