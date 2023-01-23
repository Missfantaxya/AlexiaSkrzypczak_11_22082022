// imports : npm
import { useState } from 'react'

// imports : styles
import './Dropdown.css'


/**
 * A functional component that returns a dropdown menu.
 * @function Dropdown
 * @param {string} classStyle - Additional classname to add to the dropdown container
 * @param {string} menu - Title of the menu
 * @param {JSX.Element} children - JSX elements to be displayed inside the dropdown
 * @returns {JSX.Element} - The JSX element for the dropdown.
 */
function Dropdown ({classStyle, menu, children})
{

  /**
   * A hook that allows updating the state of the dropdown to open or closed
   * @function
   * @param {boolean} state - The new state of the dropdown, whether it is open or closed
   */
  const [ open, setOpen ] = useState( false )

  /**
   * The concatenation of the classname of the dropdown and the classStyle passed as a prop
   * @constant {string}
   */
  const style = `dropdown ${classStyle}`

  /**
   * The classname for the dropdown content
   * @constant {string}
   * @param {boolean} open - The state of the dropdown
   */
  const dropdownnContentClassName = !open ? 'dropdownn__content--close' : 'dropdownn__content--open'

  /**
   * The classname for the dropdown arrow
   * @constant {string}
   * @param {boolean} open - The state of the dropdown
   */
  const arrowDirectionClassName = !open ? 'dropdown__arrow dropdown__arrow--close' : 'dropdown__arrow dropdown__arrow--open'

  return (
    <div key={ menu } className={style}>
      <button
        className='dropdown__button'
        type='button'
        onClick={ () => setOpen( !open ) }
      >
        <span>{ menu }</span>
        <span className={arrowDirectionClassName}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.51 3.87003L15.74 2.10003L5.83995 12L15.7399 21.9L17.5099 20.13L9.37995 12L17.51 3.87003V3.87003Z" fill="white"/>
          </svg>
        </span>
      </button>
      <div
        className={ dropdownnContentClassName }>
          {children}
        </div>
    </div>
  )
}

export default Dropdown
