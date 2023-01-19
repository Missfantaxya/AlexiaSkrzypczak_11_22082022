import { useState } from 'react'

import './Dropdown.css'



function Dropdown ({classStyle, menu, children})
{
  const [ open, setOpen ] = useState( false )

  const style = `dropdown ${classStyle}`

  const dropdownnContentClassName = !open ? 'dropdownn__content--close' : 'dropdownn__content--open'
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
