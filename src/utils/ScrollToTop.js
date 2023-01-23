// imports : npm
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

/**
 * Un composant fonctionnel qui utilise le crochet useEffect pour faire défiler vers le haut de la page lorsque l'emplacement change.
 * @returns {null} Le composant ne renvoie rien.
 */
export default function ScrollToTop() {
    /**
     * @constant {Object} pathname - Current pathname of the location, obtained from the useLocation hook.
     */
    const { pathname } = useLocation();

    /**
     * @constant {HTMLElement} body - Document root element, selected using document.querySelector('#root').
     */
    useEffect(() => {
        /**
         * The constant 'body' is a reference to the root element of the DOM, selected using the querySelector method with the selector "#root".
         * @constant
         */
        const body = document.querySelector('#root');
        body.scrollIntoView(
            {
                behavior: 'smooth',
            },
            500,
        );
    }, [pathname]);

    return null;
}
