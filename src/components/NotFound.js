import { Link } from 'react-router-dom'

import './NotFound.css'

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
