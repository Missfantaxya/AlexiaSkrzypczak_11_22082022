import { Routes, Route } from 'react-router-dom';

import './App.css'

// import advertisements from '../data/advertisements';
import Header from './Header'
import Home from './Home'
import Lodging from './Lodging'
import About from './About'
import NotFound from './NotFound'
import Footer from './Footer'

// FIXME renvoyer sur la 404 quand route dynamique inexistante
//TODO coment in english and use JSDoc
//TODO supprimé les commentaires

function App ()
{

  // const listIdValid = advertisements.map( ( advertisement ) => ( 
  //   advertisement.id
  //   ) )
  // console.log( "listIdValid : ", listIdValid ) //* []

  // function isIsValid ()
  // {

  // }

  return (
    <div className="app">
      <Header />
        <main className='main'>
          <Routes>
            <Route path="/" element={ <Home /> } />
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
