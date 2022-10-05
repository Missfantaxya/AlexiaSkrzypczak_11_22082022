import { Routes, Route} from 'react-router-dom';

import './App.css'

import Header from './Header'
import Home from './Home'
import Lodging from './Lodging'
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      <Header />
        <main className='main'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="lodging" element={<Lodging />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
