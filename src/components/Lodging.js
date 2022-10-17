import { useParams } from "react-router-dom"

import "./Lodging.css"

import advertisements from "../data/advertisements"

import Dropdown from "./Dropdown"
import Carrousel from "./Carrousel"
import LodgingTitle from "./LodgingTitle"
import HostDetails from "./HostDetails"

function Lodging ()
{
  const lodgingTitleMenus = [
    'Description',
    'Equipements'
  ]
  const lodgingMenus = 
    {
      'description': "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).",
      'equipments': [
        "Climatisation",
        "Wi-Fi",
        "Cuisine",
        "Espace de travail",
        "Fer à repasser",
        "Sèche-cheveux",
        "Cintres"
      ]
    }

  // valeur dynamique de l'url dans un ocject
  const objUrlId  = useParams()
  
  // valeur dynamique de l'url dans un tableau
  const arrHousingId = Object.values( objUrlId )

  // purification de l'id 
  const houseId = arrHousingId[0].replace(":", '')

  /**
   * récupération de l'object de l'hébergement actif sur la page
   * @param {*} housing 
   * @returns boolean
   */
  function findById ( housing )
  {
    return housing.id === houseId
  }

  const HousingById = advertisements.filter( findById )

  const currentLodging = HousingById[ 0 ]
  console.log( "currentLodging : ", currentLodging )
  
  return (
    <>
      <Carrousel />
      <div className="lodging__details">
        <LodgingTitle currentLodging={ currentLodging } />
        <HostDetails />
      </div>
      <div className="lodging__dropdowns">
        { lodgingTitleMenus.map( ( lodgingTitleMenu ) =>
          <Dropdown
            classStyle = 'dropdown__lodging'
            menu={ lodgingTitleMenu }
            key={lodgingTitleMenu}
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
        )}
      </div>
    </>
  )
}

export default Lodging
