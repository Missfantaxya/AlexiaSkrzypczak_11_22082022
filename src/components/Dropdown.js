import './Dropdown.css'

const Arrow = ( sizeW, sizeH, color) => (
  <svg width={ sizeW } height={ sizeH } fill={ color } xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8495 9.1944L15.2079 7.8283L7.60994 0.238037L0.0120036 7.83598L1.37042 9.1944L7.60994 2.95488L13.8495 9.1944Z"/>
  </svg>
)

function Dropdown ()
{
  const menus = [
    'Description',
    'Equipement'
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
    <div>
      { menus.map( ( menu ) =>
        <div key={ menu } className='lodging__dropdown'>
          <button
            className='dropdown__title'
            type='button' >
            <span>{ menu }</span>
            <span className='dropdown__arrow'>{ Arrow( 15.2, 8.96, "#ffffff" ) }</span>
          </button> 
          <div>
            <div className='dropdownn__content'>
              { menu === 'Description'
                ? <p>{ description }</p>
                : <ul>
                  { equipments.map( ( equipment ) =>
                    <li key={ equipment }>
                      { equipment }
                    </li> ) }
                </ul> }
            </div>
          </div>
        </div>
      ) }
      
    </div>
  )
}

export default Dropdown
