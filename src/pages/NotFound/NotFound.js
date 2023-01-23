// imports : npm
import { Link } from 'react-router-dom'

// imports : styles
import './NotFound.css'
/**
 * NotFound displays a 404 error message when the user tries to access a non-existent page.
 * @returns {JSX.Element} - Element representing the layout of the NotFound component.
 */
function NotFound() {
    return(
        <div className='notFound'>
        <p className='notFound__404'>404</p>
        <p className='notFound__text'>
          <span>Oups! La page que&nbsp;</span>
          <span>vous demandez n'existe pas.</span>
        </p>
        <div className='notFound__link'>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
        </div>
    )
}

export default NotFound
