// imports : npm
import { useParams } from "react-router-dom"

// imports : styles
import "./Lodging.css"

// imports : data
import advertisements from "../../data/advertisements"

// imports : pages
import NotFound from "../NotFound/NotFound"

// imports : component
import Dropdown from "../../components/Dropdown/Dropdown"
import Carrousel from "../../components/Carrousel/Carrousel"
import LodgingTitle from "../../components/LodgingTitle/LodgingTitle"
import HostDetails from "../../components/HostDetails/HostDetails"

/**
 * Renders a hosting component that displays details and information about a specific hosting based on the id passed in the URL.
 * @returns {JSX.Element} A JSX element that represents the hosting component, or the NotFound page if the identifier passed in the URL is invalid.
 */
function Lodging ()
{
  const lodgingTitleMenus = [
    'Description',
    'Equipements'
  ]

  /**
   * @constant {object} objUrlId - Object that contains the parameters passed in the URL.
   */
  const objUrlId  = useParams()
  
 /**
   * @constant {string[]} arrHousingId - Array of values of parameters passed in URL.
   */
  const arrHousingId = Object.values( objUrlId )

  /**
 * @constant {string} houseId - The id of the lodging passed in the URL, cleaned up.
 */
  const houseId = arrHousingId[0].replace(":", '')

  /**
   * Filters a housing data collection to return the one with a matching id
   * @function
   * @param {object} housing - the housing object to verify the id
   * @returns {boolean} true if house id is equal to houseId
   */
  function findById ( housing )
  {
    return housing.id === houseId
  }

  /**
   * @constant {array} HousingById - Array of the housing object which has the same id as houseId.
   */
  const HousingById = advertisements.filter( findById )

  /**
   * @constant {object} currentLodging - The lodging object that has the same id as the houseId.
   */
  const currentLodging = HousingById[ 0 ]
  
  /**
   * @constant {boolean} isValidId - Boolean which is true if the id passed in the URL exists, false otherwise.
   */
  const isValidId = HousingById.length !== 0
  

  return (
    <>
      { isValidId
        ? <>
          <Carrousel pictures={ currentLodging.pictures } />
          <div className="lodging__details">
            <LodgingTitle currentLodging={ currentLodging } />
            <HostDetails
              currentHost={ currentLodging.host }
              currentRate={ currentLodging.rating } />
          </div>
          <div className="lodging__dropdowns">
            { lodgingTitleMenus.map( ( lodgingTitleMenu ) =>
              <Dropdown
                classStyle='dropdown__lodging'
                menu={ lodgingTitleMenu }
                key={ lodgingTitleMenu }
              >
                { lodgingTitleMenu === 'Description'
                  ?
                  <p>{ currentLodging.description }</p>
                  : <ul>
                    { currentLodging.equipments.map( ( equipment ) =>
                      <li key={ equipment }>
                        { equipment }
                      </li> ) }
                  </ul> }
              </Dropdown>
            ) }
          </div>
        </>
        : <NotFound />
      } 
    </>
    )
}

export default Lodging
