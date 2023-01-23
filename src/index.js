//imports : npm
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// imports : utils
import ScrollToTop from './utils/ScrollToTop';

// imports : styles
import './index.css';

// imports : components
import App from './components/App';
/**
 * @const
 * @description Create the root element and render the application with the React DOM library.
 * The application is wrapped in a BrowserRouter component to enable client-side routing.
 * The ScrollToTop component is also included to scroll to the top of the page when the route changes.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

