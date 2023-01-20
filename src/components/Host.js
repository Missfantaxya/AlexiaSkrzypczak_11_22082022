import "./Host.css"

//TODO coment in english and use JSDoc
function Host ( {currentHost} )
{
  const currentHostName = currentHost.name.split( ' ' )

  return (
    <div className="host">
      <div className="host__identity">
        <p>{ currentHostName[0] }</p>
        <p>{currentHostName[1]}</p>
      </div>
      <div className="host__picture">
        <img className="host__img" src={currentHost.picture} alt="portrait du propiétaire" />
      </div>
    </div>
  )
}

export default Host
