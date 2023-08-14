import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>  
    <Header/>
    <main className='main'>
      <Home/>
     
    </main>
    <Contact/>
    </>
  );
}

export default App;
