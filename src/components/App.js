//import : npm
import { Routes, Route } from 'react-router-dom';

//import  : style
import './App.css'

//imports : component
import Header from './Header'
import Footer from './Footer'

// imports : pages
import Home from './Home'
import Lodging from './Lodging'
import About from './About'
import NotFound from './NotFound'


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
