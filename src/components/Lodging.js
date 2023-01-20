import { useParams } from "react-router-dom"

import "./Lodging.css"

import advertisements from "../data/advertisements"
import NotFound from "./NotFound"
import Dropdown from "./Dropdown"
import Carrousel from "./Carrousel"
import LodgingTitle from "./LodgingTitle"
import HostDetails from "./HostDetails"

//TODO coment in english and use JSDoc
function Lodging ()
{
  const lodgingTitleMenus = [
    'Description',
    'Equipements'
  ]

  // valeur dynamique de l'url dans un objet
  const objUrlId  = useParams()
  
  // valeur dynamique de l'url dans un tableau
  const arrHousingId = Object.values( objUrlId )

  // purification de l'id 
  const houseId = arrHousingId[0].replace(":", '')

  // fonction de callback pour appliquer la fonction filter
  // retourne les élément dont l'id (house.id) est === à houseId 
  function findById ( housing )
  {
    return housing.id === houseId
  }

  //récupération des données avec l'id correspondant
  const HousingById = advertisements.filter( findById )
  // const HousingById = advertisements.filter( houseId )

  //récupération de toutes les données de l'élément 
  const currentLodging = HousingById[ 0 ]
  
  //vérifie que l'id existe dans le tableau des données
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
