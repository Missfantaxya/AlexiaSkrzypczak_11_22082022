import "./Lodging.css"
import Dropdown from "./Dropdown"

import Carrousel from "./Carrousel"
import LodgingTitle from "./LodgingTitle"
import HostDetails from "./HostDetails"

function Lodging ()
{
  
  const menus = [
    'Description',
    'Equipements'
  ]
  
  const description = "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "

  const equipments = [
    "Climatisation",
    "Wi-Fi",
    "Cuisine",
    "Espace de travail",
    "Fer à repasser",
    "Sèche-cheveux",
    "Cintres"
  ]

  return (
    <>
      <Carrousel />
      <div className="lodging">
        <LodgingTitle/>
        <HostDetails />
      </div>
      { menus.map( ( menu ) =>
          <Dropdown
            menu={ menu }
            description={ description }
            equipments={ equipments }
            key={menu}
          >
            { menu === 'Description'
              ? <p >{ description }</p>
              : <ul>
                { equipments.map( ( equipment ) =>
                  <li key={ equipment }>
                    { equipment }
                  </li> ) }
                </ul> }
          </Dropdown>
        )}
    </>
  )
}

export default Lodging
