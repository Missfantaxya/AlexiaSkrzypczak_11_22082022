import { Routes, Route, useParams } from 'react-router-dom';

import './App.css'

import Header from './Header'
import Home from './Home'
import Lodging from './Lodging'
import About from './About'
import NotFound from './NotFound'
import Footer from './Footer'

// FIXME route dynamique avec id inventé doit conduire à 404.
function App ()
{
  let {id} = useParams()
  return (
    <div className="app">
      <Header />
        <main className='main'>
          <Routes>
            <Route path="/" element={ <Home /> } />
          <Route path={`lodging/:${id}`} element={ <Lodging /> } />
          <Route path="about" element={ <About /> } />
          <Route path="*" element={ <NotFound />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App
