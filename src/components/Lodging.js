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
  
  console.log( "test data.id: :", advertisements.id )//!
  
  return (
    <>
      <Carrousel />
      <div className="lodging__details">
        <LodgingTitle/>
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
              <p>{ lodgingMenus.description }</p>
              : <ul>
                { lodgingMenus.equipments.map( ( equipment ) =>
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
