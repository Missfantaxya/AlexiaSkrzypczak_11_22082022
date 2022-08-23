import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <main className='main'>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
