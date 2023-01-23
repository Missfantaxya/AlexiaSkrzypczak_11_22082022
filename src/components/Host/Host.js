// imports : styles
import "./Host.css"

/**
 * Renders a host component
 * @param {object} props - The component props.
 * @param {object} props.currentHost - The current host data.
 * @param {string} props.currentHost.name - The name of the current host.
 * @param {string} props.currentHost.picture - current host picture url.
 *
 * @returns {JSX.Element} A JSX element that represents the host component.
 */
function Host ( {currentHost} )
{
  /**
   * @constant {string[]} currentHostName - An array that contains the current host's first and last name.
   */
  const currentHostName = currentHost.name.split( ' ' )

  return (
    <div className="host">
      <div className="host__identity">
        <p>{ currentHostName[0] }</p>
        <p>{ currentHostName[1] }</p>
      </div>
      <div className="host__picture">
        <img className="host__img" src={currentHost.picture} alt="portrait du propiétaire" />
      </div>
    </div>
  )
}

export default Host
