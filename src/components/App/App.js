//import : npm
import { Routes, Route } from 'react-router-dom';

//import  : style
import './App.css'

//imports : component
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// imports : pages
import Home from '../../pages/Home/Home'
import Lodging from '../../pages/Lodging/Lodging'
import About from '../../pages/About/About'
import NotFound from '../../pages/NotFound/NotFound'


/**
 * App renders the main layout.
 * @returns {JSX.Element} - An element representing the layout of the App component.
 */
function App ()
{
  return (
    <div className="app">
      <Header />
        <main className='main'>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
          <Route path="lodging/:id" element={ <Lodging /> } />
          <Route path="about" element={ <About /> } />
          <Route path="*" element={ <NotFound />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App
